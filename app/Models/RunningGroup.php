<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RunningGroup extends Model
{
    //
    public function creator()
{
    return $this->belongsTo(User::class, 'creator_id');
}

}
