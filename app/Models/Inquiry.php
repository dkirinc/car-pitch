<?php

namespace App\Models;

use App\Enums\InquiryType;
use Database\Factories\InquiryFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'car_id', 'type', 'name', 'phone', 'email', 'brand_preference', 'body_type',
    'year_from', 'year_to', 'fuel_types', 'transmission', 'budget_min', 'budget_max',
    'notes', 'is_read',
])]
class Inquiry extends Model
{
    /** @use HasFactory<InquiryFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return [
            'type' => InquiryType::class,
            'fuel_types' => 'array',
            'is_read' => 'boolean',
        ];
    }

    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }
}
