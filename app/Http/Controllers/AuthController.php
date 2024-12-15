<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator; 


class AuthController extends Controller
{
    // Registrovanje novog korisnika
    public function register(Request $request)
    {
        // Validacija ulaza
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Kreiranje novog korisnika
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['user' => $user], 201);
    }

    // Prijava korisnika
   // Prijava korisnika
public function login(Request $request)
{
    // Validacija podataka
    $validated = $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);

    // Pokušaj autentifikacije
    if (Auth::attempt(['email' => $validated['email'], 'password' => $validated['password']])) {
        $user = Auth::user();
        $token = $user->createToken('MyApp')->plainTextToken;

        return response()->json([
            'message' => 'Login successful!',
            'token' => $token
        ]);
    }

    // Ako autentifikacija ne uspe
    throw ValidationException::withMessages([
        'email' => ['The provided credentials are incorrect.'],
    ]);
}


    // Odjava korisnika
    public function logout(Request $request)
    {
        // Brisanje tokena za trenutno autentifikovanog korisnika
        $request->user()->tokens->each(function ($token) {
            $token->delete();
        });

        return response()->json([
            'message' => 'Logged out successfully!'
        ]);
    }
}
