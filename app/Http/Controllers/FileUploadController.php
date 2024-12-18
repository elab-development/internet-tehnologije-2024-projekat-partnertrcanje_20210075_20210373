<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    
    public function index()
    {
        return view('upload'); 
    }

    public function store(Request $request)
    {
        // Validacija fajla
        $request->validate([
            'file' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048', 
        ]);

        // Čuvanje fajla
        $file = $request->file('file');
        $path = $file->store('uploads', 'public'); 

        // Poruka o uspehu
        return response()->json([
            'success' => 'Fajl je uspešno uploadovan',
            'path' => $path
        ]);
        
    }
}
