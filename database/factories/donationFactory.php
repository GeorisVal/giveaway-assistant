<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class donationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition() {
        return [
            'timestamp' => fake()->dateTimeThisMonth(),
            'status' => fake()->randomElement(['Invalid', 'Did Not Respond', 'Donator Contacted', 'Pending pick up', 'Items Collected', 'Queued for Website', 'Queued for Discord', 'Queued for Programs', 'Completed', 'Cancelled', '']),
            'schedule_date' => fake()->randomElement([null, fake()->dateTimeThisMonth()]),
            'platform' => fake()->randomElement(['Nookazon Discord', 'Nookazon Website', 'Nookazon Programs (i.e. Streams, Contests, etc.)']),
            'shoutout' => fake()->randomElement(['Yes - Shout out my Nookazon account', 'Yes - Shout out my Discord account', 'No - I would like to remain anonymous']),
            'contact_method' => fake()->randomElement(['Discord', 'Website']),
            'discord_username' => fake()->userName().'#'.fake()->numberBetween(1000, 9999),
            'discord_id' => fake()->numberBetween(1000000000000000, 11000000000000000),
            'nookazon_username' => fake()->userName(),
            'nookazon_link' => 'https://nookazon.com/profile/'.fake()->numberBetween(0000000000, 9999999999),
            'currencies' => fake()->numberBetween(100000, 100000000).' Bells',
            'items' => fake()->text(50),
        ];
    }
}
