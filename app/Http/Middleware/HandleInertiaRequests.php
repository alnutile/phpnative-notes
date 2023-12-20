<?php

namespace App\Http\Middleware;

use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     */
    public function share(Request $request): array
    {
        logger('request', $request->toArray());

        try {
            $tags = TagResource::collection(Tag::orderBy('name')->get());
        } catch (\Exception $exception) {
            $tags['data'][] = [
                'name' => $exception->getMessage(),
                'id' => 1,
            ];
        }


        return array_merge(parent::share($request), [
            'logo' => config('app.logo'),
            'app_name' => config('app.name'),
            'tags' => $tags,
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
            ],
            'errorBags' => function () {
                return collect(optional(Session::get('errors'))->getBags() ?: [])
                    ->mapWithKeys(function ($bag, $key) {
                        return [$key => $bag->messages()];
                    })->all();
            },
        ]);
    }
}
