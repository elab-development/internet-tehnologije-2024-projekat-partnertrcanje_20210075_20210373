<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\API\PartnerRequestController;
use App\Http\Controllers\API\RunningGroupController;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

// Test route
Route::middleware('api')->get('test', function () {
    return response()->json(['message' => 'API funkcioniše!']);
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);



// Sanctum authenticated routes
Route::middleware('auth:sanctum')->group(function () {
     
    
    Route::post('logout', [AuthController::class, 'logout']);
// User routes
    Route::get('users', [UserController::class, 'index']);
    Route::post('users', [UserController::class, 'store']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::get('users/active', [UserController::class, 'activeUsers']);
    Route::get('users/activities/{activity_level}', [UserController::class, 'getUsersByActivity']);
    

    // PartnerRequest routes
    Route::get('partner-requests', [PartnerRequestController::class, 'index']);
    Route::post('partner-requests', [PartnerRequestController::class, 'store']);
    Route::get('partner-requests/{id}', [PartnerRequestController::class, 'show']);
    Route::get('partner-requests/group/{group_id}', [PartnerRequestController::class, 'getGroupRequests']);

    // RunningGroup routes
    Route::get('running-groups', [RunningGroupController::class, 'index']);
    Route::post('running-groups', [RunningGroupController::class, 'store']);
    Route::get('running-groups/{id}', [RunningGroupController::class, 'show']);

    

});
