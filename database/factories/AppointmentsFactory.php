<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

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
        $time = fake()->time();
        $timeTwo = Carbon::createFromFormat('H:i:s', $time)->addMinutes(30);
        return [
        'nookazon_username' => fake()->userName(),
        'discord_username' => fake()->userName().'#'.fake()->numberBetween(1000, 9999),
        'appointment_date' => fake()->dateTimeThisMonth(),
        'appointment_time_start' => $time,
        'appointment_time_end' => $timeTwo,
        'contact_method' => fake()->randomElement(['Discord', 'Website']),
        'appointment_type' => fake()->randomElement(['donor', 'winner'])
    ];
    }
}
