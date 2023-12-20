<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

/**
 * @property string $title
 * @property string $type
 * @property string $content
 */
class Note extends Model
{
    use HasFactory;
    use Searchable;
    use SoftDeletes;

    protected $guarded = [];

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return [
            'id' => $array['id'],
            'title' => $array['title'],
            'content' => $array['content'],
        ];
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function attachTag(string $tag, string $type = null): void
    {
        $tag = Tag::firstOrCreate(['name' => $tag], ['type' => $type]);

        $this->tags()->attach([$tag->id]);
    }

    public function attachTags(array $tags)
    {
        foreach ($tags as $tag) {
            $this->attachTag($tag);
        }
    }

    public function files() : HasMany
    {
        return $this->hasMany(File::class);
    }
}
