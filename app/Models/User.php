<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; 
use Illuminate\Database\Eloquent\Builder;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'activity_level',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function partnerRequests()
    {
        return $this->hasMany(RunningPartnerRequest::class);
    }


    public function runningGroups()
    {
        return $this->belongsToMany(RunningGroup::class, 'group_user');
    }

    public function scopeFilterByName(Builder $query, $name)
    {
        if ($name) {
            $query->where('name', 'like', '%' . $name . '%');
        }
    }

    public function scopeFilterByEmail(Builder $query, $email)
    {
        if ($email) {
            $query->where('email', $email);
        }
    }

    public function scopeFilterByCreatedAt(Builder $query, $createdAfter, $createdBefore)
    {
        if ($createdAfter) {
            $query->where('created_at', '>=', $createdAfter);
        }

        if ($createdBefore) {
            $query->where('created_at', '<=', $createdBefore);
        }
    }
        public function activityLogs()
    {
        return $this->hasMany(ActivityLog::class);
    }
    
}
