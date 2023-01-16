<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
    protected $fillable = ['notes', 'schedule_date', 'status'];
    public function donation() {
        return $this->belongsTo(Donation::items);
    }
}
