<?php

namespace App\Enums;

enum Transmission: string
{
    case Automatski = 'automatski';
    case Rucni = 'rucni';
    case Poluautomatski = 'poluautomatski';
}
