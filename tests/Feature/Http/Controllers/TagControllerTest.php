<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Note;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TagControllerTest extends TestCase
{

    public function test_create()
    {
        $note = Note::factory()->create();

        $this->post(route("notes.tag", [
            'note' => $note->id
        ]), [
            'name' => 'foo'
        ])->assertStatus(302);


        $this->assertCount(3, $note->refresh()->tags);
    }


    public function test_remove()
    {
        $note = Note::factory()->create();
        $tag = $note->tags()->first();

        $this->post(route("notes.tag.remove", [
            'note' => $note->id,
            'tag' => $tag->id
        ]))->assertStatus(302);

        $this->assertCount(1, $note->refresh()->tags);
    }

}
