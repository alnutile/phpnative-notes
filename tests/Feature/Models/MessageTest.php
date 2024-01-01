<?php

namespace Tests\Feature\Models;

use App\Models\Message;
use Tests\TestCase;

class MessageTest extends TestCase
{


    public function test_model()
    {
        $message = Message::factory()->create();

        $this->assertNotNull($message->body);
    }

    public function test_in_out()
    {
        $message = Message::factory()->create([
            'in_out' => true
        ]);

        $this->assertTrue($message->from_user);
        $this->assertFalse($message->from_ai);
    }
}
