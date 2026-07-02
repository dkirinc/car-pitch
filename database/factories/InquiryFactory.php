<?php

namespace Database\Factories;

use App\Enums\InquiryType;
use App\Models\Car;
use App\Models\Inquiry;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Inquiry> */
class InquiryFactory extends Factory
{
    public function definition(): array
    {
        $type = fake()->randomElement(InquiryType::cases());
        $isImport = $type === InquiryType::Import;
        $yearFrom = $isImport ? fake()->numberBetween(2018, 2021) : null;

        return [
            'car_id' => $isImport ? null : Car::factory(),
            'type' => $type,
            'name' => fake()->name(),
            'phone' => '+385 ' . fake()->numerify('## ### ###'),
            'email' => fake()->safeEmail(),
            'brand_preference' => $isImport ? fake()->randomElement(['Audi', 'BMW', 'Volkswagen', 'Volvo', 'Mercedes']) : null,
            'body_type' => $isImport ? fake()->randomElement(['suv', 'sedan', 'karavan', 'hatchback']) : null,
            'year_from' => $yearFrom,
            'year_to' => $isImport ? fake()->numberBetween($yearFrom + 1, 2025) : null,
            'fuel_types' => $isImport ? fake()->randomElements(['benzin', 'diesel', 'hibrid', 'elektricni'], fake()->numberBetween(1, 3)) : null,
            'transmission' => $isImport ? fake()->randomElement(['automatski', 'rucni']) : null,
            'budget_min' => $isImport ? fake()->randomElement([10000, 15000, 20000, 35000, 50000]) : null,
            'budget_max' => $isImport ? fake()->randomElement([30000, 55000, 80000, 120000]) : null,
            'notes' => fake()->optional(0.6)->sentence(12),
            'is_read' => fake()->boolean(30),
        ];
    }

    public function stock(): static
    {
        return $this->state(fn () => [
            'type' => InquiryType::Stock,
            'car_id' => Car::factory(),
            'brand_preference' => null,
            'body_type' => null,
            'year_from' => null,
            'year_to' => null,
            'fuel_types' => null,
            'transmission' => null,
            'budget_min' => null,
            'budget_max' => null,
        ]);
    }

    public function import(): static
    {
        $yearFrom = fake()->numberBetween(2018, 2021);

        return $this->state([
            'type' => InquiryType::Import,
            'car_id' => null,
            'brand_preference' => fake()->randomElement(['Audi', 'BMW', 'Volkswagen', 'Volvo', 'Mercedes']),
            'body_type' => fake()->randomElement(['suv', 'sedan', 'karavan']),
            'year_from' => $yearFrom,
            'year_to' => fake()->numberBetween($yearFrom + 1, 2025),
            'fuel_types' => fake()->randomElements(['benzin', 'diesel', 'hibrid'], fake()->numberBetween(1, 3)),
            'transmission' => fake()->randomElement(['automatski', 'rucni']),
            'budget_min' => fake()->randomElement([10000, 20000, 35000]),
            'budget_max' => fake()->randomElement([55000, 80000, 120000]),
        ]);
    }
}
