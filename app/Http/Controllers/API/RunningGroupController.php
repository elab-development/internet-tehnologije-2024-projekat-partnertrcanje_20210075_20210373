<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\RunningGroup;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RunningGroupController extends Controller
{
    public function index()
    {
        $runningGroups = RunningGroup::all();
        return response()->json($runningGroups, Response::HTTP_OK);
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'creator_id' => 'required|exists:users,id',
        'location' => 'required|string|max:255', 
    ]);

    $runningGroup = RunningGroup::create($validated);
    return response()->json($runningGroup, Response::HTTP_CREATED);
}


    public function show($id)
    {
        $runningGroup = RunningGroup::find($id);
        if (!$runningGroup) {
            return response()->json(['error' => 'Running Group not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($runningGroup, Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        $runningGroup = RunningGroup::find($id);
        if (!$runningGroup) {
            return response()->json(['error' => 'Running Group not found'], Response::HTTP_NOT_FOUND);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'location' => 'nullable|string|max:255', // dodano za update
        ]);

        $runningGroup->update($validated);
        return response()->json($runningGroup, Response::HTTP_OK);
    }

    public function destroy($id)
    {
        $runningGroup = RunningGroup::find($id);
        if (!$runningGroup) {
            return response()->json(['error' => 'Running Group not found'], Response::HTTP_NOT_FOUND);
        }

        $runningGroup->delete();
        return response()->json(['message' => 'Running Group deleted'], Response::HTTP_OK);
    }
}
