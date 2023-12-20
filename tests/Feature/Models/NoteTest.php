<?php

namespace Tests\Feature\Models;

use App\Models\Note;
use Tests\TestCase;

class NoteTest extends TestCase
{
    public function test_model()
    {
        $model = Note::factory()->create();
        $this->assertNotNull($model->title);
    }
}
