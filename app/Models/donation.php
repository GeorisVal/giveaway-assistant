<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpseclib3\Math\PrimeField\Integer;

class donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'notes',
        'schedule_date'
    ];

    protected $casts = [
        'timestamp' => 'datetime',
        'platform' => 'string',
        'shoutout' => 'boolean',
        'contact_method' => 'string',
        'discord_username' => 'string',
        'discord_id' => 'integer',
        'nookazon_username' => 'string',
        'nookazon_link' => 'string',
        'currencies' => 'string',
        'items' => 'string'
    ];
}
