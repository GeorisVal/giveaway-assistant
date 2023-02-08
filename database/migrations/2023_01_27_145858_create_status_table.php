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
            $table->string('status')->primary();
            $table->boolean('visible');
        });
        DB::table('status')->insert([
            ['status' => 'Invalid', 'visible' => 1],
            ['status' => 'Did Not Respond', 'visible' => 1],
            ['status' => 'Donator Contacted', 'visible' => 1],
            ['status' => 'Pending pick up', 'visible' => 1],
            ['status' => 'Items Collected', 'visible' => 1],
            ['status' => 'Queued for Website', 'visible' => 1],
            ['status' => 'Queued for Discord', 'visible' => 1],
            ['status' => 'Queued for Programs', 'visible' => 1],
            ['status' => 'Complete', 'visible' => 1],
            ['status' => 'Cancelled', 'visible' => 1]]);
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
