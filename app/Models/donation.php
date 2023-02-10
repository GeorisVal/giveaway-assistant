<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class donation extends Model
{
    use HasFactory;
    protected $fillable = ['notes', 'schedule_date', 'status', 'description', 'title', 'img_link'];
}
