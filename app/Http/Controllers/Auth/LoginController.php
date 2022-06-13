<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function login(LoginRequest $request){

        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];

        if(!Auth::attempt($credentials)){
            return response([
               'error' => 'Provided credentials are not correct',
            ],422);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
             'user' => $user,
             'token' => $token
        ]);
    }

    public function logout() {

        /** @var User $user */
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}
