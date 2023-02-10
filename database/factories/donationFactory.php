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
            'timestamp' => now(),
            'status' => fake()->randomElement(['Invalid', 'Did Not Respond', 'Contacted', 'Pending Pickup', 'Items Collected', 'Queued for Website', 'Queued for Discord', 'Queued for Programs', 'Done', 'Cancelled']),
            'schedule_date' => fake()->randomElement([null, fake()->dateTimeThisMonth()]),
            'platform' => fake()->randomElement(['Discord', 'Website']),
            'shoutout' => fake()->randomElement(['Yes - shout out my Nookazon account', 'Yes - shout out my Discord account', 'No - I would like to remain anonymous']),
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
