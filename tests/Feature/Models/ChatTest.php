<?php

namespace Tests\Feature;

use App\Models\Chat;
use App\Models\Message;
use OpenAI\Laravel\Facades\OpenAI;
use OpenAI\Responses\Chat\CreateResponse;
use OpenAI\Responses\Completions\CreateResponse as CompletionResponse;
use Tests\TestCase;

class ChatTest extends TestCase
{
    public function test_start_chat()
    {

        OpenAI::fake(
            [
                CompletionResponse::fake([
                    'choices' => [
                        [
                            'text' => 'awesome!',
                        ],
                    ],
                ]),
            ]
        );

        $chat = Chat::factory()->create();

        $message = $chat->addInput(
            'testing'
        );

        $this->assertInstanceOf(Message::class, $message);

        $this->assertEquals('awesome!', $chat->refresh()->title);
    }

    public function test_output()
    {

        OpenAI::fake(
            [
                CreateResponse::fake([
                    'choices' => [
                        [
                            'text' => 'awesome!',
                        ],
                    ],
                ]),
            ]
        );

        $chat = Chat::factory()->create();

        /**
         * Create the starting message
         */
        Message::factory()->create([
            'chat_id' => $chat->id,
        ]);

        $this->assertDatabaseCount('messages', 1);

        $message = $chat->addOutput(
            'testing'
        );

        $this->assertInstanceOf(Message::class, $message);

        $this->assertDatabaseCount('messages', 2);
    }
}
