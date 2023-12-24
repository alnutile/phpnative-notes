<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class FileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'id' => $this->id,
            'type' => $this->type,
            'data' => base64_encode(Storage::disk('documents')
                ->get('Notes/'.$this->note_id.'/Files/'.$this->name)),
            'link' => route('files.file.get', [
                'file' => $this->id,
            ]),
        ];
    }
}
