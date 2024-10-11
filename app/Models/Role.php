<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    protected $fillable = ['admin', 'buyer', 'seller'];
    use HasFactory;

    public function accounts()
    {
        return $this->hasMany(Account::class);
    }
}
