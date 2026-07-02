<?php

namespace Database\Factories;

use App\Models\BlogPost;
use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/** @extends Factory<BlogPost> */
class BlogPostFactory extends Factory
{
    private static array $titles = [
        'Nova isporuka — %s',
        'Isporuka klijentu — %s',
        '%s stigao u salon',
        'Zadovoljan kupac preuzeo %s',
        'Nova akvizicija — %s u ponudi',
        '%s — detaljan pregled',
        'Iz prve ruke: %s',
    ];

    public function definition(): array
    {
        $title = fake()->randomElement(self::$titles);
        $carName = fake()->randomElement([
            'BMW X3 M Sport', 'Audi A5 Sportback', 'Volkswagen Tiguan',
            'Volvo XC60', 'Audi Q5 Quattro', 'BMW Serija 5', 'Mercedes GLC',
            'Volkswagen Arteon', 'Volvo V90', 'Audi Q7',
        ]);
        $title = sprintf($title, $carName);

        return [
            'car_id' => Car::factory(),
            'title' => $title,
            'slug' => Str::slug($title) . '-' . fake()->unique()->numberBetween(1, 9999),
            'excerpt' => fake()->sentence(15),
            'content' => implode("\n\n", fake()->paragraphs(5)),
            'is_published' => true,
            'published_at' => fake()->dateTimeBetween('-12 months', 'now'),
        ];
    }

    public function forCar(Car $car): static
    {
        $brandName = $car->brand?->name ?? '';
        $title = sprintf(fake()->randomElement(self::$titles), "{$brandName} {$car->model}");

        return $this->state([
            'car_id' => $car->id,
            'title' => $title,
            'slug' => Str::slug($title) . '-' . fake()->unique()->numberBetween(1, 9999),
        ]);
    }

    public function draft(): static
    {
        return $this->state(['is_published' => false, 'published_at' => null]);
    }
}
