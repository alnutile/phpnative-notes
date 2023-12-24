<?php

namespace Tests\Feature\Models;

use App\Models\File;
use Tests\TestCase;

class FileTest extends TestCase
{
    public function test_model()
    {
        $file = File::factory()->create();

        $this->assertNotNull($file->note->id);
        $this->assertNotNull($file->note->files()->first()->id);
    }
}
