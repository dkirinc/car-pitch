<?php

namespace Database\Factories;

use App\Enums\BodyType;
use App\Enums\CarStatus;
use App\Enums\FuelType;
use App\Enums\Transmission;
use App\Models\Brand;
use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/** @extends Factory<Car> */
class CarFactory extends Factory
{
    private static array $modelsByBrand = [
        'Audi' => ['A3', 'A4', 'A5 Sportback', 'A6 Avant', 'Q3', 'Q5 Quattro', 'Q7', 'Q8', 'e-tron GT'],
        'BMW' => ['Serija 1', 'Serija 3', 'Serija 5', 'X1', 'X3 M Sport', 'X5 M', 'X6', 'M3', 'M5'],
        'Volkswagen' => ['Golf GTI', 'Passat', 'Tiguan', 'Arteon', 'T-Roc', 'Touareg', 'ID.4', 'Amarok'],
        'Volvo' => ['XC40', 'XC60', 'XC90', 'V60', 'V90', 'S60', 'S90', 'C40 Recharge'],
        'Mercedes' => ['A-Klasa', 'C-Klasa', 'E-Klasa', 'GLC', 'GLE', 'GLA', 'CLA', 'EQC'],
        'Škoda' => ['Octavia', 'Superb', 'Kodiaq', 'Karoq', 'Enyaq', 'Fabia', 'Scala'],
    ];

    public function definition(): array
    {
        $year = fake()->numberBetween(2018, 2024);

        return [
            'brand_id' => Brand::factory(),
            'model' => fake()->randomElement(['X3 M Sport', 'A5 Sportback', 'Tiguan', 'XC60', 'Serija 5', 'Q5 Quattro']),
            'slug' => Str::slug('car') . '-' . Str::lower(Str::random(10)),
            'year' => $year,
            'body_type' => fake()->randomElement(BodyType::cases()),
            'fuel_type' => fake()->randomElement(FuelType::cases()),
            'transmission' => fake()->randomElement([Transmission::Automatski, Transmission::Automatski, Transmission::Rucni]),
            'mileage' => fake()->numberBetween(0, 150000),
            'price' => fake()->optional(0.6)->numberBetween(15000, 120000),
            'description' => fake()->paragraphs(2, true),
            'video_url' => null,
            'engine' => fake()->randomElement(['1.5 TSI', '2.0 TDI', '2.0 TSI', '3.0 TDI', '2.0 Diesel', '1.4 TFSI', '3.0 V6']),
            'power' => fake()->randomElement([110, 130, 150, 190, 204, 245, 286, 320, 380]),
            'exterior_color' => fake()->randomElement(['Crna metalik', 'Bijela biserna', 'Siva metalik', 'Plava metalik', 'Crvena metalik', 'Srebrna metalik']),
            'interior_color' => fake()->randomElement(['Koža crna', 'Koža crna/siva', 'Koža bež', 'Tkanina crna', 'Koža smeđa']),
            'doors' => fake()->randomElement([3, 5]),
            'seats' => fake()->randomElement([5, 7]),
            'registration_date' => fake()->dateTimeBetween("{$year}-01-01", "{$year}-12-31")->format('Y-m-d'),
            'vin' => strtoupper(Str::random(17)),
            'equipment' => fake()->randomElements([
                'LED farovi', 'Panorama krov', 'Kožna sjedala', 'Parking senzori',
                'Automatska klima - 2 zone', 'Bluetooth', 'Navigacijski sustav',
                'Grijanje sjedala', 'Kamera za vožnju unatrag', 'Tempomat',
                'Apple CarPlay / Android Auto', 'Sportski auspuh', 'Head-up display',
                'Električni prtljažnik', 'Bežično punjenje', 'Ambijentalno osvjetljenje',
                'Memorijska sjedala', 'Adaptivni tempomat',
            ], fake()->numberBetween(5, 12)),
            'status' => fake()->randomElement(CarStatus::cases()),
            'is_featured' => false,
        ];
    }

    public function forBrand(Brand $brand): static
    {
        $models = self::$modelsByBrand[$brand->name] ?? ['Model'];

        return $this->state(function () use ($brand, $models) {
            $model = fake()->randomElement($models);

            return [
                'brand_id' => $brand->id,
                'model' => $model,
                'slug' => Str::slug($brand->slug . '-' . $model) . '-' . Str::lower(Str::random(8)),
            ];
        });
    }

    public function featured(): static
    {
        return $this->state(['is_featured' => true, 'status' => CarStatus::Novo]);
    }
}
