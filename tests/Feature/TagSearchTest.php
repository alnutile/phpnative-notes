<?php

namespace Tests\Feature;

use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TagSearchTest extends TestCase
{

    public function test_tag_query()
    {
        $tag = Tag::factory()->create(['name' => "YES"]);

        $tagNot = Tag::factory()->create(['name' => "NOT"]);

        $data = $this->get(route('api.tags', [
            'tag' => 'YE'
        ]))->assertOk()->json();

        $this->assertCount(1, $data);
    }
}
