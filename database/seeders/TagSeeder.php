<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Tags\Tag;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tag::findOrCreate('Laravel');
        Tag::findOrCreate('Bloggable');
        Tag::findOrCreate('Vue');
        Tag::findOrCreate('Bullet Journal');
    }
}
