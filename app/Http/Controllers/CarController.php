<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Car;
use Inertia\Inertia;
use Inertia\Response;

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
                'video_url' => $car->video_url,
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
}
