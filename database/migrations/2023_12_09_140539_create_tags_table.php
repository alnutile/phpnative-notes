<?php

use App\Models\Tag;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('tags');
        Schema::dropIfExists('note_tag');

        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type')->nullable();
            $table->timestamps();
        });

        Schema::create('note_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Tag::class);
            $table->foreignIdFor(\App\Models\Note::class);
            $table->timestamps();
        });

        Tag::updateOrCreate(['name' => 'Laravel']);
        Tag::updateOrCreate(['name' => 'Bloggable']);
        Tag::updateOrCreate(['name' => 'Vue']);
        Tag::updateOrCreate(['name' => 'Bullet Journal']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tags');
    }
};
