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
        'timestamp' => fake()->dateTimeInInterval('-1 year'),
        'username' => fake()->userName(),
        'appointment' => fake()->dateTimeThisMonth(),
        'contact_method' => fake()->randomElement(['Discord', 'Website'])
    ];
    }
}
