<?php

namespace Database\Factories;

use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Review> */
class ReviewFactory extends Factory
{
    private static array $reviews = [
        'Odlično iskustvo od prvog kontakta do preuzimanja vozila. Sve je prošlo glatko i profesionalno, bez ikakvih iznenađenja. Definitivno za svaku preporuku.',
        'Kupovina auta s Auto Liderom bila je iznimno ugodno iskustvo. Sve od odabira modela do realizacije je izvedeno besprijekorno. SVAKA preporuka!!! 5+',
        'Dečki su i više nego profesionalni, jako pristupačni, ažurni i posvećeni klijentu. Zadovoljstvo je poslovati s njima! Prezadovoljna.',
        'Vrlo lagano i opušteno a sa druge strane vrlo ozbiljno i profesionalno odrađen posao. Od samog početnog dogovora i odabira novog auta, sve je išlo za nas vrlo jednostavno.',
        'Sve od papirologije do predaje vozila prošlo je besprijekorno. Marko je uvijek dostupan i spreman pomoći. Preporučujem svima koji traže premium vozilo!',
        'Fantastična usluga, brza komunikacija i vrhunsko vozilo. Svaka čast ekipi Auto Lidera, tako se radi posao!',
        'Prepustili smo sve njima i nismo požalili ni sekunde. Vozilo je stiglo točno na vrijeme, papiri riješeni, sve perfektno.',
    ];

    private static array $carModels = [
        'BMW X3 M Sport', 'Audi A5 Sportback', 'Volkswagen Tiguan',
        'Volvo XC60', 'Audi Q5 Quattro', 'BMW Serija 5', 'Mercedes GLC',
        'Volkswagen Arteon', 'Volvo V90', 'Audi Q7',
    ];

    public function definition(): array
    {
        $name = fake()->name();
        $parts = explode(' ', $name);
        $initials = strtoupper(substr($parts[0], 0, 1) . (isset($parts[1]) ? substr($parts[1], 0, 1) : ''));

        return [
            'author_name' => $name,
            'author_initials' => $initials,
            'car_model' => fake()->randomElement(self::$carModels),
            'rating' => fake()->numberBetween(4, 5),
            'content' => fake()->randomElement(self::$reviews),
            'is_published' => true,
        ];
    }
}
