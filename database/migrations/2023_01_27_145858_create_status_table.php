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
            ['status' => 'invalid', 'visible' => 1],
            ['status' => 'dnr', 'visible' => 1],
            ['status' => 'contacted', 'visible' => 1],
            ['status' => 'pending', 'visible' => 1],
            ['status' => 'collected', 'visible' => 1],
            ['status' => 'scheduled_web', 'visible' => 1],
            ['status' => 'scheduled_discord', 'visible' => 1],
            ['status' => 'scheduled_programs', 'visible' => 1],
            ['status' => 'done', 'visible' => 1],
            ['status' => 'cancelled', 'visible' => 1]]);
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