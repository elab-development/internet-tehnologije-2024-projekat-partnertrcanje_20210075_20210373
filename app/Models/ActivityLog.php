<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'activity_date',
        'distance',
        'activity_type',
        'calories_burned',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function activityLogs()
    {
        return $this->hasMany(ActivityLog::class);  
    }
}

