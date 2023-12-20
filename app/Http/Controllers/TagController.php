<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{

    public function attach(Note $note)
    {
        $validate = request()->validate([
            'name' => ['required'],
            'type' => ['nullable']
        ]);

        $note->attachTag($validate['name'], data_get($validate, 'type', null));
        request()->session()->flash("message", "Tagged 🚀");
        return back();

    }

    public function remove(Note $note, Tag $tag)
    {

        $note->tags()->detach([$tag->id]);
        request()->session()->flash("message", "Un-Tagged 🧨");
        return back();

    }
}
