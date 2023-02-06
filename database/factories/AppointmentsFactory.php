<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointments>
 */
class AppointmentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
        'nookazon_username' => fake()->userName(),
        'discord_username' => fake()->userName().'#'.fake()->numberBetween(1000, 9999),
        'appointment_date' => fake()->date(),
        'appointment_time' => fake()->time('H:i:s'),
        'contact_method' => fake()->randomElement(['Discord', 'Website']),
        'appointment_type' => fake()->randomElement(['donor', 'winner'])
    ];
    }
}
