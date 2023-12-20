<?php

namespace App\Http\Controllers;

use App\Http\Resources\NoteResource;
use App\Http\Resources\TagResource;
use App\Models\Note;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Builder;

class HomeController extends Controller
{
    public function index()
    {

        $tag = request()->tag;
        $search = request()->search;
        $results = [];
        $error = null;

        try {
            if ($search) {
                $results = Note::search($search)
                    ->latest('updated_at')
                    ->paginate(5);
            } else {
                $results = Note::when($tag, function ($query) use ($tag) {
                    $query->whereHas("tags", function (Builder $query) use ($tag) {
                        $query->whereRaw("LOWER(name) = ?", [strtolower($tag)]);
                    });
                })
                    ->latest("updated_at")
                    ->paginate(5);
            }
        } catch (\Exception $e) {
            $error = $e->getMessage();
        }

        return inertia('Dashboard/Home', [
            'search' => $search,
            'tag' => $tag,
            'error' => $error,
            'notes' => NoteResource::collection($results),
        ]);
    }
}
