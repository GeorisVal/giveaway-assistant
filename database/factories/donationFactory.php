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
            'status' => fake()->randomElement(['Contacted', 'Collected', 'Scheduled Web', 'Scheduled Discord', 'Done']),
            'platform' => fake()->randomElement(['Discord', 'Website']),
            'shoutout' => fake()->randomElement(['1', '0']),
            'contact_method' => fake()->randomElement(['Discord', 'Website']),
            'discord_username' => fake()->userName(),
            'discord_id' => fake()->numberBetween(1000000000000000, 11000000000000000),
            'nookazon_username' => fake()->userName(),
            'nookazon_link' => 'https://nookazon.com/profile/',
            'currencies' => 'none',
            'items' => fake()->text(50)
        ];
    }
}
