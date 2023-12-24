<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\File;
use App\Models\Note;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UploadFileControllerTest extends TestCase
{
    public function test_upload()
    {
        Storage::fake('file');
        Storage::fake('documents');
        $note = Note::factory()->create();
        $this->post(route('files.create', [
            'note' => $note->id,
        ]), [
            'files' => [UploadedFile::fake()->image('test.jpg')],
        ]);

        $this->assertDatabaseCount('files', 1);
        $file = File::first();
        $this->assertEquals('test.jpg', $file->name);
        $this->assertCount(1, $note->refresh()->files);
        Storage::assertExists('test.jpg');

    }
}
