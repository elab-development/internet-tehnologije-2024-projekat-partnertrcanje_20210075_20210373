<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivityLogController extends Controller
{
    // Metoda za dodavanje nove aktivnosti
    public function store(Request $request)
    {
        $request->validate([
            'distance' => 'required|numeric',
            'activity_type' => 'required|string|max:255',
            'calories_burned' => 'required|numeric',
            'activity_date' => 'required|date',
        ]);

        $activityLog = ActivityLog::create([
            'user_id' => Auth::id(),
            'activity_date' => $request->activity_date,
            'distance' => $request->distance,
            'activity_type' => $request->activity_type,
            'calories_burned' => $request->calories_burned,
        ]);

        return response()->json(['message' => 'Aktivnost uspešno dodata', 'data' => $activityLog]);
    }

    // Metoda za prikaz svih aktivnosti korisnika
    public function index(Request $request)
    {
        $user = $request->user();
        $activities = $user->activityLogs;  
        return response()->json($activities);
    }
}

