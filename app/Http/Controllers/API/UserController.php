<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;


class UserController extends Controller
{

    public function index(Request $request)
    {
        Log::info('Fetching all users');
        $users = User::all();
        Log::info('Users fetched: ', ['users' => $users]);
        return response()->json($users, 200);
        
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'activity_level' => 'nullable|string|in:beginner,intermediate,advanced',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $user = User::create($validated);
        return response()->json($user, 201);
    }

    public function show($id)
    {
        $user = User::findOrFail($id); // automatski baca 404 ako nije pronađen
        return response()->json($user, 200);
    }
    
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id); // automatski baca 404 ako nije pronađen
    
        $validated = $request->validate([
            'name' => 'string|max:255',
            'email' => [
                'email',
                Rule::unique('users')->ignore($id),
            ],
            'password' => 'nullable|string|min:6|confirmed',
            'activity_level' => 'nullable|string|in:beginner,intermediate,advanced',
        ]);
    
        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        }
    
        $user->update($validated);
        return response()->json($user, 200);
    }
    

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->delete();
        return response()->json(['message' => 'User deleted'], 200);
    }

    public function activeUsers()
    {
        // Pretpostavimo da "active" korisnici imaju neki kriterijum, poput datuma poslednje aktivnosti
        $activeUsers = User::where('is_active', true)->get();
        return response()->json($activeUsers, 200);
    }

    public function getUsersByActivity($activity_level)
    {
        $users = User::where('activity_level', $activity_level)->get();
        if ($users->isEmpty()) {
            return response()->json(['error' => 'No users found for the given activity level'], 404);
        }
        return response()->json($users, 200);
    }

    public function search(Request $request)
{
    $users = User::query()
        ->filterByName($request->name)
        ->filterByEmail($request->email)
        ->filterByCreatedAt($request->created_after, $request->created_before)
        ->paginate(10);

    return response()->json($users);
}

   
 //Log::info('Paginate request received', ['activity_level' => $activityLevel, 'per_page' => $perPage]);

}
