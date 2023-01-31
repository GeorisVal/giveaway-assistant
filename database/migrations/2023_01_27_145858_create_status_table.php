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
            $table->string('visible');
        });
        DB::table('status')->insert([
            ['status' => 'invalid', 'visible' => 'true'],
            ['status' => 'dnr', 'visible' => 'true'],
            ['status' => 'contacted', 'visible' => 'true'],
            ['status' => 'pending', 'visible' => 'true'],
            ['status' => 'collected', 'visible' => 'true'],
            ['status' => 'scheduled_web', 'visible' => 'true'],
            ['status' => 'scheduled_discord', 'visible' => 'true'],
            ['status' => 'scheduled_programs', 'visible' => 'true'],
            ['status' => 'done', 'visible' => 'true'],
            ['status' => 'cancelled', 'visible' => 'true']]);
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
