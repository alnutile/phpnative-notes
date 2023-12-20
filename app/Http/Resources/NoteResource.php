<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'date' => $this->updated_at->diffForHumans(),
            'truncated' => str($this->content)->limit(200)->markdown(),
            'formatted' => str($this->content)->markdown(),
            'files' => FileResource::collection($this->files),
            'tags' => TagResource::collection($this->tags),
            'route' => route('notes.show', [
                'note' => $this->id,
            ]),
        ];
    }
}
