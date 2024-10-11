<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'username',
        'password', 
        'name',
        'address', 
        'phone', 
        'email', 
        'status_id', 
        'role_id'];
        
        public function status()
        {
            return $this->belongsTo(Status::class);
        }
        public function role()
        {
            return $this->belongsTo(Role::class);
        }
    
      
        
}
