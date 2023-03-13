<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('platform', function (Blueprint $table) {
            $table->string('slug');
            $table->string('platform')->primary();
            $table->boolean('visible');
        });
        DB::table('platform')->insert([
            ['slug' => 'discord', 'platform' => 'Nookazon Discord', 'visible' => 1],
            ['slug' => 'website', 'platform' => 'Nookazon Website', 'visible' => 1],
            ['slug' => 'programs', 'platform' => 'Nookazon Programs (i.e. Streams, Contests, etc.)', 'visible' => 1],
            ['slug' => 'either', 'platform' => 'Either', 'visible' => 1]]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('platform');
    }
};
