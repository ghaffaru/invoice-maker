<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
            'address' => 'required'
        ]);

        $user_id = Auth::id();

        $customer = Customer::create($request->all('name', 'email', 'phone_number', 'address') + [
            'user_id' => $user_id
        ]);

        return Response::json(['message' => 'Customer created successfully', 'customer' => $customer]);
    }

    public function index()
    {
        $user_id = Auth::id();

        $customers = Customer::where(['user_id' => $user_id])->get();

        return Response::json($customers);
    }
}


