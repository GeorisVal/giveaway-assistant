<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointments extends Model
{
    use HasFactory;
    protected $fillable = ['nookazon_username', 'discord_username', 'appointment_date', 'appointment_time', 'contact_method', 'appointment_type'];
}
