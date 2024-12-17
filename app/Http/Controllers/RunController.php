<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class RunController extends Controller
{
    public function index(Request $request)
{
    $users = User::query();

    if ($request->has('activity_level')) {
        $users->where('activity_level', $request->input('activity_level'));
    }

    $paginatedUsers = $users->paginate(10); 

    return response()->json($paginatedUsers);
}
}
