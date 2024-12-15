<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PartnerRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class PartnerRequestController extends Controller
{
    public function index()
    {
        Log::info('Fetching all requests');
        $partnerRequests = PartnerRequest::all();
        Log::info('Requests fetched: ', ['partner-requests' => $partnerRequests]);
        return response()->json($partnerRequests, Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        // Validacija zahteva
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'location' => 'required|string|max:255',
            'availability' => 'required|string|max:255',
        ]);

        // Kreiranje partner zahtjeva
        $partnerRequest = PartnerRequest::create($validated);
        Log::info('Partner request created: ', ['partnerRequest' => $partnerRequest]);

        return response()->json($partnerRequest, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        $partnerRequest = PartnerRequest::find($id);
        if (!$partnerRequest) {
            return response()->json(['error' => 'Partner Request not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($partnerRequest, Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        $partnerRequest = PartnerRequest::find($id);
        if (!$partnerRequest) {
            return response()->json(['error' => 'Partner Request not found'], Response::HTTP_NOT_FOUND);
        }

        // Validacija sa optional poljima
        $validated = $request->validate([
            'location' => 'sometimes|string|max:255',
            'availability' => 'sometimes|string|max:255',
        ]);

        // Ažuriranje partner zahtjeva
        $partnerRequest->update($validated);
        return response()->json($partnerRequest, Response::HTTP_OK);
    }

    public function destroy($id)
    {
        $partnerRequest = PartnerRequest::find($id);
        if (!$partnerRequest) {
            return response()->json(['error' => 'Partner Request not found'], Response::HTTP_NOT_FOUND);
        }

        $partnerRequest->delete();
        return response()->json(['message' => 'Partner Request deleted'], Response::HTTP_OK);
    }

    // Dodatna metoda za filtriranje po group_id
    public function getGroupRequests($group_id)
    {
        $requests = PartnerRequest::where('group_id', $group_id)->get();
        return response()->json($requests);
    }
}
