<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Note;
use Tests\TestCase;

class NoteControllerTest extends TestCase
{
    public function test_create()
    {
        $this->post(route('notes.store'), [
            'title' => 'foo',
            'content' => 'bar',
        ])->assertRedirect();

        $this->assertEquals('foo', Note::first()->title);
    }

    public function test_update()
    {
        $note = Note::factory()->create();
        $this->put(route('notes.update', [
            'note' => $note->id,
        ]), [
            'title' => 'foo',
            'content' => 'bar',
        ])->assertRedirect();

        $this->assertEquals('foo', $note->refresh()->title);
    }
}
