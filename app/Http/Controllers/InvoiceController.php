<?php

namespace App\Http\Controllers;

use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Item;
use GrahamCampbell\ResultType\Result;
use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class InvoiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('show');
    }

    public function index()
    {
        return Response::json(Invoice::where(['user_id' => Auth::id()])->get());
    }

    public function show(Invoice $invoice)
    {
        return Response::json(new InvoiceResource($invoice));
    }
    public function store(Request $request)
    {
        $request->validate([
            'organizationEmail' => 'required|email',
            'organizationName' => 'required',
            'organizationLogo' => 'required|image:jpg,png,gif',
            'issueDate' => 'required',
            'dueDate' => 'required',
            'subTotal' => 'required',
            'items' => 'required'
        ]);
        
        for ($i=0; $i < count($request->items); $i++)
        { 
            $queriedItem = Item::where(['id' => $request->items[$i], 'user_id' => Auth::id()])->get()->first();
            
            if (!$queriedItem)
            {
                return Response::json(['message' => 'Item not found!'], 404);
            }
        }
        

        DB::beginTransaction();
        try {
            $path = Storage::putFile('/logos', new File($request->organizationLogo));

            $invoice = Invoice::create($request->except('organizationLogo') + ['organizationLogo' => $path]);

            for ($i=0; $i < count($request->items); $i++) 
            { 
                $invoice->items()->attach(Item::find($request->items[$i]));
            }

            DB::commit();

            return Response::json(['message' => 'Invoice created successfully!', 'invoice' => $invoice]);

        } catch (\Exception $e) {
            DB::rollBack();
            return Response::json(['message' => $e->getMessage()], 500);
        }

    }
}
