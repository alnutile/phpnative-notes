<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Support\Facades\Storage;

class BackupController extends Controller
{
    public function backup()
    {

        foreach (Note::get() as $note) {
            /**
             * @TODO add tags
             */
            Storage::disk('documents')->put('Notes/'.$note->id.'/'.$note->title.'.md', $note->content);
        }

        request()->session()->flash('message', 'Backup complete');

        return back();
    }
}
