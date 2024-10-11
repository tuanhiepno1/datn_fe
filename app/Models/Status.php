<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{

    protected $fillable = ['status_code', 'status_name'];

    public function accounts()
    {
        return $this->hasMany(Account::class);
    }
}
