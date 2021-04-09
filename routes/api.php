<?php


use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ItemController;
use App\Models\Invoice;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/customer', [CustomerController::class, 'index']);
Route::post('/customer', [CustomerController::class, 'store']);

Route::get('/item', [ItemController::class, 'index']);
Route::post('/item', [ItemController::class, 'store']);

Route::post('/invoice', [InvoiceController::class,'store']);
Route::get('/invoice', [InvoiceController::class, 'index']);
Route::get('/invoice/{invoice}', [InvoiceController::class, 'show']);
