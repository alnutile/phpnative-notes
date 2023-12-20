<?php

namespace App\Http\Controllers;

class SettingsController extends Controller
{
    public function show()
    {

        return inertia('Settings/Show');
    }
}
