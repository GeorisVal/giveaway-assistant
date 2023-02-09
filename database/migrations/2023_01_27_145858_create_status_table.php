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
        Schema::create('status', function (Blueprint $table) {
            $table->string('slug');
            $table->string('status')->primary();
            $table->boolean('visible');
        });
        DB::table('status')->insert([
            ['slug' => 'invalid', 'status' => 'Invalid', 'visible' => 1],
            ['slug' => 'dnr', 'status' => 'Did Not Respond', 'visible' => 1],
            ['slug' => 'contacted', 'status' => 'Donator Contacted', 'visible' => 1],
            ['slug' => 'pending', 'status' => 'Pending pick up', 'visible' => 1],
            ['slug' => 'collected', 'status' => 'Items Collected', 'visible' => 1],
            ['slug' => 'scheduledwebsite', 'status' => 'Queued for Website', 'visible' => 1],
            ['slug' => 'scheduleddiscord', 'status' => 'Queued for Discord', 'visible' => 1],
            ['slug' => 'scheduledprograms', 'status' => 'Queued for Programs', 'visible' => 1],
            ['slug' => 'complete', 'status' => 'Complete', 'visible' => 1],
            ['slug' => 'cancelled', 'status' => 'Cancelled', 'visible' => 1]]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('status');
    }
};
