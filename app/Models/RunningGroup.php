<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RunningGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'creator_id', 'description',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }


    public function participants()
    {
        return $this->belongsToMany(User::class, 'group_user');
    }

}

