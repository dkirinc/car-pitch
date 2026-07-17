<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Car;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class CarController extends Controller
{
    public function index(): Response
    {
        $cars = Car::with('brand')
            ->latest()
            ->get()
            ->map(fn (Car $car) => [
                'id' => $car->id,
                'model' => $car->model,
                'slug' => $car->slug,
                'year' => $car->year,
                'fuel_type' => $car->fuel_type->label(),
                'transmission' => $car->transmission->label(),
                'mileage' => $car->mileage,
                'price' => $car->price,
                'status' => $car->status->value,
                'brand' => [
                    'id' => $car->brand->id,
                    'name' => $car->brand->name,
                    'slug' => $car->brand->slug,
                ],
                'thumbnail_url' => $car->getFirstMediaUrl('images'),
                'created_at' => $car->created_at->toISOString(),
            ]);

        $brands = Brand::where('is_active', true)
            ->whereHas('cars')
            ->orderBy('name')
            ->get(['id', 'name', 'slug']);

        return Inertia::render('cars', [
            'cars' => $cars,
            'brands' => $brands,
        ]);
    }

    public function show(Car $car): Response
    {
        $car->load('brand');

        return Inertia::render('car-detail', [
            'car' => [
                'id' => $car->id,
                'model' => $car->model,
                'slug' => $car->slug,
                'year' => $car->year,
                'fuel_type' => $car->fuel_type->label(),
                'transmission' => $car->transmission->label(),
                'mileage' => $car->mileage,
                'price' => $car->price,
                'status' => $car->status->value,
                'brand' => [
                    'id' => $car->brand->id,
                    'name' => $car->brand->name,
                    'slug' => $car->brand->slug,
                ],
                'thumbnail_url' => $car->getFirstMediaUrl('images'),
                'description' => $car->description,
                'video_url' => $this->resolveVideoEmbedUrl($car->video_url),
                'gallery' => $car->getMedia('images')
                    ->map(fn (Media $media) => $media->getUrl())
                    ->all(),
                'engine' => $car->engine,
                'power' => $car->power,
                'exterior_color' => $car->exterior_color,
                'interior_color' => $car->interior_color,
                'doors' => $car->doors,
                'seats' => $car->seats,
                'registration_date' => $car->registration_date?->format('Y-m'),
                'vin_masked' => mb_substr($car->vin, 0, 3).str_repeat('*', 8),
                'equipment' => $car->equipment,
            ],
        ]);
    }

    private function resolveVideoEmbedUrl(?string $url): ?string
    {
        if (! $url) {
            return null;
        }

        if (preg_match('/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/', $url, $matches)) {
            return "https://www.youtube.com/embed/{$matches[1]}";
        }

        if (str_contains($url, 'facebook.com') || str_contains($url, 'fb.watch')) {
            return 'https://www.facebook.com/plugins/video.php?href='.urlencode($url).'&show_text=false';
        }

        return $url;
    }
}
