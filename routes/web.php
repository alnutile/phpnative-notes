<?php

use App\Models\Import;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/settings', [\App\Http\Controllers\SettingsController::class, 'show'])->name('settings');

Route::post("/notes/{note}/tag/{tag}/remove", [\App\Http\Controllers\TagController::class, 'remove'])->name('notes.tag.remove');

Route::post("/notes/{note}/tag", [\App\Http\Controllers\TagController::class, 'attach'])->name('notes.tag');

Route::post('/seed', function () {

    try {
        Artisan::call('db:seed');
        request()->session()->flash('message', 'Seeding Done');

        return back();
    } catch (\Exception $e) {
        $message = $e->getMessage();
        request()->session()->flash('message', 'ERROR: '.$message);

        return back();
    }

})->name('run.seed');

Route::post("/upload/{note}", [\App\Http\Controllers\UploadFileController::class, 'upload'])->name('upload.file');

Route::post('/force_migration', function () {

    try {
        Artisan::call('native:migrate');
        request()->session()->flash('message', 'Migration done');

        return back();
    } catch (\Exception $e) {
        $message = $e->getMessage();
        request()->session()->flash('message', 'ERROR: '.$message);

        return back();
    }

})->name('run.migrations');

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/notes', function () {
    return inertia('Notes/Index');
})->name('notes');

Route::get('/notes/create', [\App\Http\Controllers\NoteController::class, 'create'])->name('notes.create');
Route::post('/notes/store', [\App\Http\Controllers\NoteController::class, 'store'])->name('notes.store');
Route::get('/notes/{note}', [\App\Http\Controllers\NoteController::class, 'show'])->name('notes.show');
Route::put('/notes/{note}', [\App\Http\Controllers\NoteController::class, 'update'])->name('notes.update');
