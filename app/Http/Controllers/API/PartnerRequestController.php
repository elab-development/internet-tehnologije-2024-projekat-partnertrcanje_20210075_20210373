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
        'partner_id' => 'nullable|exists:partners,id',
        'group_id' => 'nullable|exists:running_groups,id',
        'location' => 'required|string|max:255',
        'availability' => 'required|string|max:255',
    ]);

    if ((!isset($validated['partner_id']) && !isset($validated['group_id'])) ||
        (isset($validated['partner_id']) && isset($validated['group_id']))) {
        return response()->json([
            'error' => 'Morate proslediti ili partner_id ili group_id, ali ne oba.'
        ], Response::HTTP_BAD_REQUEST);
    }

    $partnerRequest = PartnerRequest::create([
        'user_id' => $validated['user_id'],
        'partner_id' => $validated['partner_id'] ?? null, // Postavljamo `partner_id` ako postoji
        'group_id' => $validated['group_id'] ?? null,     // Postavljamo `group_id` ako postoji
        'location' => $validated['location'],
        'availability' => $validated['availability'],
    ]);

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
            'partner_id' => 'sometimes|exists:partners,id',
            'group_id' => 'sometimes|exists:running_groups,id',
        ]);

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
