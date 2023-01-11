<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donation', function (Blueprint $table) {
            $table->id('id');
            $table->dateTime('timestamp');
            $table->string('status');
            $table->string('notes')->nullable();
            $table->dateTime('schedule_date')->nullable();
            $table->string('platform');
            $table->boolean('shoutout');
            $table->string('contact_method');
            $table->string('discord_username')->nullable();
            $table->integer('discord_id')->nullable();
            $table->string('nookazon_username')->nullable();
            $table->string('nookazon_link')->nullable();
            $table->string('currencies')->nullable();
            $table->text('items')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('donation');
    }
};
