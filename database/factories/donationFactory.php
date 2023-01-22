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
    public function definition()
    {
        return [
            'timestamp' => now(),
            'status' => fake()->randomElement(['invalid', 'dnr', 'contacted', 'pending_pickup', 'collected', 'scheduled_web', 'scheduled_discord', 'scheduled_programs', 'done', 'cancelled']),
            'schedule_date' => fake()->dateTimeThisMonth(),
            'platform' => fake()->randomElement(['Discord', 'Website']),
            'shoutout' => fake()->randomElement(['1', '0']),
            'contact_method' => fake()->randomElement(['Discord', 'Website']),
            'discord_username' => fake()->userName().'#'.fake()->numberBetween(0000, 9999),
            'discord_id' => fake()->numberBetween(1000000000000000, 11000000000000000),
            'nookazon_username' => fake()->userName(),
            'nookazon_link' => 'https://nookazon.com/profile/'.fake()->numberBetween(0000000000, 9999999999),
            'currencies' => fake()->numberBetween(100000, 100000000).' Bells',
            'items' => fake()->text(50)
        ];
    }
}
