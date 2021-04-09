<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItemResource;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class ItemController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index()
    {
        $items = Item::where(['user_id' => Auth::id()])->get();

        return Response::json(ItemResource::collection($items));
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required', 'price' => 'required']);

        $item = Item::create($request->only('name', 'price') + ['user_id' => Auth::id()]);

        return Response::json(['message' => 'Item added successfully', 'item' => new ItemResource($item)]);
    }
}
