<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function items()
    {
        return $this->belongsToMany(Item::class, 'invoice_items')->withPivot('quantity', 'amount');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
