<?php

namespace App\Http\Controllers;


use Facades\Illuminate\Foundation\Application;

class SettingsController extends Controller
{
    public function show()
    {

        return inertia('Settings/Show', [
            'storage_path' => Application::storagePath()
        ]);
    }
}
