<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    public function connect(Request $request)
    {
        // Validacija inputa
        $request->validate([
            'partner_id' => 'required|exists:partners,id',
        ]);

        // Pronađi korisnika
        $user = auth()->user();
        
        // Poveži korisnika sa partnerom
        $user->partner_id = $request->partner_id;
        $user->save();

        return response()->json(['message' => 'Successfully connected to partner!']);
    }
}

