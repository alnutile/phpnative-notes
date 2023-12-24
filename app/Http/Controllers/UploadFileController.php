<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadFileController extends Controller
{

    public function upload(Note $note)
    {
        $validate = request()->validate([
            'files' => ['required'],
        ]);

        foreach ($validate['files'] as $file) {
            $name = $file->getClientOriginalName();

            $file->storeAs(
                path: "Notes/" .$note->id.'/Files/',
                name: $name,
                options: ['disk' => 'documents']
            );

            $validated['name'] = $name;

            $mimeType = $file->getMimeType();

            File::create([
                'note_id' => $note->id,
                'name' => $name,
                'type' => $mimeType
            ]);
        }


        request()->session()->flash("message", "Upload complete!");

        return back();
    }

    public function getFile(File $file)
    {
        $path = 'Notes/' . $file->note->id. '/Files/' . $file->name;

        return Storage::disk('documents')->download($path);

    }
}
