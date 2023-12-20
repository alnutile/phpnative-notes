<?php

namespace App\Http\Controllers;

use App\Models\Note;

class NoteController extends Controller
{
    public function show(Note $note)
    {
        return inertia('Notes/Show', [
            'note' => new \App\Http\Resources\NoteResource($note),
        ]);
    }

    public function create()
    {
        return inertia('Notes/Create', []);
    }

    public function store()
    {

        $validated = request()->validate([
            'title' => ['required'],
            'content' => ['required'],
        ]);

        $note = Note::create($validated);

        request()->session()->flash('message', 'Created 🚀');

        return to_route('notes.show', ['note' => $note->id]);
    }

    public function update(Note $note)
    {

        $validated = request()->validate([
            'title' => ['required'],
            'content' => ['required'],
        ]);

        $note->update($validated);

        return back();
    }
}
