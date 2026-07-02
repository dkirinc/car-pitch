<?php

namespace App\Enums;

enum BodyType: string
{
    case Sedan = 'sedan';
    case Suv = 'suv';
    case Karavan = 'karavan';
    case Coupe = 'coupe';
    case Hatchback = 'hatchback';
    case Kabriolet = 'kabriolet';
    case Pickup = 'pickup';
    case Kombi = 'kombi';
}
