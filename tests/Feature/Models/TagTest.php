<?php

namespace Tests\Feature\Models;

use App\Models\Note;
use App\Models\Tag;
use Tests\TestCase;

class TagTest extends TestCase
{
    public function test_tag()
    {

        $tag = Tag::factory()->create();

        $note = Note::factory()->create();

        $tag->notes()->attach([$note->id]);

        $this->assertCount(1, $tag->refresh()->notes);

        /**
         * I add some in the factory
         */
        $this->assertCount(3, $tag->refresh()->notes()->first()->tags);
    }
}
