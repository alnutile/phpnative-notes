<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Note;
use Illuminate\Http\Request;

class UploadFileController extends Controller
{

    public function upload(Note $note)
    {
        $validate = request()->validate([
            'file' => ['required', 'file'],
        ]);

        $name = request()->file('file')->getClientOriginalName();
        $mimeType = request()->file('file')->getMimeType();

        $results = request()->file('file')->storeAs(
            path: '/',
            name: $name,
        );

        logger("storage_path", [storage_path()]);

        File::create([
           'note_id' => $note->id,
           'name' => $name,
            'type' => $mimeType
        ]);

        request()->session()->flash("message", "Upload complete!");

        return back();
    }
}
