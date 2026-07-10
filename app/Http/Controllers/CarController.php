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
}
