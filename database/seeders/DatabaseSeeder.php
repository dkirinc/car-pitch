<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Car;
use App\Models\Inquiry;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@autolider.hr',
        ]);

        $brands = collect([
            'Audi', 'BMW', 'Volkswagen', 'Volvo', 'Mercedes', 'Škoda',
        ])->map(fn (string $name) => Brand::factory()->create([
            'name' => $name,
            'slug' => Str::slug($name),
        ]));

        $cars = $brands->flatMap(
            fn (Brand $brand) => Car::factory(4)
                ->forBrand($brand)
                ->create()
        );

        $featuredCars = $cars->random(4);
        foreach ($featuredCars as $car) {
            $car->update(['is_featured' => true]);
        }

        foreach ($cars->random(8) as $car) {
            \App\Models\BlogPost::factory()->forCar($car)->create();
        }

        foreach ($cars->random(10) as $car) {
            Inquiry::factory()->stock()->create(['car_id' => $car->id]);
        }

        Inquiry::factory(8)->import()->create();

        Review::factory(6)->create();
    }
}
