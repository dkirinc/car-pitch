<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Car;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $featuredCars = Car::with('brand')
            ->where('is_featured', true)
            ->latest()
            ->take(8)
            ->get()
            ->map(fn (Car $car) => [
                'id' => $car->id,
                'model' => $car->model,
                'slug' => $car->slug,
                'year' => $car->year,
                'fuel_type' => $car->fuel_type->value,
                'transmission' => $car->transmission->value,
                'mileage' => $car->mileage,
                'price' => $car->price,
                'status' => $car->status->value,
                'brand' => [
                    'id' => $car->brand->id,
                    'name' => $car->brand->name,
                    'slug' => $car->brand->slug,
                ],
            ]);

        $brands = Brand::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'slug']);

        $stats = [
            'cars_sold' => Car::count(),
            'brands_count' => Brand::where('is_active', true)->count(),
            'avg_delivery_days' => 7,
        ];

        return Inertia::render('welcome', [
            'featuredCars' => $featuredCars,
            'brands' => $brands,
            'stats' => $stats,
        ]);
    }
}
