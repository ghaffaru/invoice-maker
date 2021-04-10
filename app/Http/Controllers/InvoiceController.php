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
        $this->middleware('auth:sanctum');
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
            'items' => 'required|array'
        ]);

        foreach ($request->items as $item)
        {
            $item = json_decode(collect($item)[0]);

            $queriedItem = Item::where(['id' => $item->id, 'user_id' => Auth::id()])->get()->first();

            if (!$queriedItem)
            {
                return Response::json(['message' => 'Item not found!'], 404);
            }
        }

        DB::beginTransaction();
        try {
            $path = Storage::putFile('/logos', new File($request->organizationLogo));

            $invoice = Invoice::create($request->except('organizationLogo') + ['organizationLogo' => $path,
                                        'user_id' => Auth::id()]);

            foreach ($request->items as $item)
            {
               $item = json_decode(collect($item)[0]);

               $invoice->items()->attach(Item::find($item->id), ['quantity' => $item->quantity, 'amount' => $item->amount]);
            }

            DB::commit();

            return Response::json(['message' => 'Invoice created successfully!', 'invoice' => $invoice]);

        } catch (\Exception $e) {
            DB::rollBack();
            Storage::delete($request->organizationLogo);
            return Response::json(['message' => $e->getMessage()], 500);
        }

    }
}
