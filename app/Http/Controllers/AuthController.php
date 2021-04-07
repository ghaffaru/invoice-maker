<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required'
        ]);

        $user = User::create($request->all('name', 'email') + ['password' => Hash::make($request->password)]);

        $token = $user->createToken('auth')->plainTextToken;

        return Response::json(['message' => 'Registration successful', 'user' => $user, 'token' => $token]);

    }

    public function login(Request $request)
    {
        $request->validate(['email' => 'required', 'password' => 'required']);

        if (!Auth::attempt($request->only('email', 'password')))
        {
            return response()->json(['message' => 'Credentials do not match'], 400);
        }

        $user = User::where(['email' => $request->email])->get()->first();

        $token = $user->createToken('authtoken')->plainTextToken;

        return Response::json(['message' => 'Login successful', 'user' => $user, 'token' => $token]);
    }
}
