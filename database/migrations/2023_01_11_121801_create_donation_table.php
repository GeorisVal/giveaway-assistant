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
        Schema::create('donations', function (Blueprint $table) {
            $table->id('id');
            $table->string('timestamp');
            $table->string('status')->nullable();
            $table->string('notes')->nullable();
            $table->date('schedule_date')->nullable();
            $table->string('platform');
            $table->string('shoutout');
            $table->string('contact_method');
            $table->string('discord_username')->nullable();
            $table->string('discord_id')->nullable();
            $table->string('nookazon_username')->nullable();
            $table->string('nookazon_link')->nullable();
            $table->string('currencies')->nullable();
            $table->text('items')->nullable();
            $table->dateTime('updated_at')->nullable();
            $table->dateTime('created_at')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->string('shoutout_cc')->nullable();
            $table->string('img_link')->nullable();
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
