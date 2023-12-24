<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $name
 * @property int $note_id
 * @property Note $note
 */
class File extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function note(): BelongsTo
    {
        return $this->belongsTo(Note::class);
    }
}
