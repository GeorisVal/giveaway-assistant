<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DonationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\donation::factory(25)->create();
        // \App\Models\donation::factory()->create([
        //     'discord_id' => 'this is just a random length of string'
        // ]);
    }
}
