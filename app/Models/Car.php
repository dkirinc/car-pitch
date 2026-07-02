<?php

namespace App\Models;

use App\Enums\BodyType;
use App\Enums\CarStatus;
use App\Enums\FuelType;
use App\Enums\Transmission;
use Database\Factories\CarFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable([
    'brand_id', 'model', 'slug', 'year', 'body_type', 'fuel_type', 'transmission',
    'mileage', 'price', 'description', 'video_url', 'engine', 'power',
    'exterior_color', 'interior_color', 'doors', 'seats', 'registration_date',
    'vin', 'equipment', 'status', 'is_featured',
])]
class Car extends Model
{
    /** @use HasFactory<CarFactory> */
    use HasFactory, SoftDeletes;

    protected function casts(): array
    {
        return [
            'equipment' => 'array',
            'body_type' => BodyType::class,
            'fuel_type' => FuelType::class,
            'transmission' => Transmission::class,
            'status' => CarStatus::class,
            'registration_date' => 'date',
            'is_featured' => 'boolean',
            'price' => 'decimal:2',
        ];
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function inquiries(): HasMany
    {
        return $this->hasMany(Inquiry::class);
    }

    public function blogPosts(): HasMany
    {
        return $this->hasMany(BlogPost::class);
    }
}
