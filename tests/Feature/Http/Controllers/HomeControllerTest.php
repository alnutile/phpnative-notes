<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Note;
use Illuminate\Support\Str;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HomeControllerTest extends TestCase
{
    public function test_home()
    {
        Note::factory()->count(2)->create();

        $this->get(route('home'))
            ->assertOk();
    }

    public function test_tag()
    {
        Note::factory()->count(2)
            ->create();

        $note = Note::factory()->create(0);

        $tag = Str::random();
        $note->attachTag($tag);

        $this->get(route('home', [
            'tag' => $tag,
        ]))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->has('notes.data', 1));
    }
}
