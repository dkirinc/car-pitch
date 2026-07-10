<?php

namespace App\Enums;

enum Transmission: string
{
    case Automatski = 'automatski';
    case Rucni = 'rucni';
    case Poluautomatski = 'poluautomatski';

    public function label(): string
    {
        return match ($this) {
            self::Automatski => 'Automatski',
            self::Rucni => 'Ručni',
            self::Poluautomatski => 'Poluautomatski',
        };
    }
}
