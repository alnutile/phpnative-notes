<?php

namespace App\Http\Controllers;

class SettingsController extends Controller
{
    public function show()
    {

        $settings = [
            'running' => config('nativephp-internal.running'),
            'storage_path' => config('nativephp-internal.storage_path'),
            'storage_path_env' => env('NATIVEPHP_STORAGE_PATH'),
            'database_path' => env('NATIVEPHP_DATABASE_PATH'),
            'filesystem' => config('filesystems.disks'),
        ];

        return inertia('Settings/Show', [
            'settings' => $settings,
        ]);
    }
}
