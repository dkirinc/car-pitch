<?php

namespace App\Enums;

enum FuelType: string
{
    case Benzin = 'benzin';
    case Diesel = 'diesel';
    case Hibrid = 'hibrid';
    case PlugInHibrid = 'plug_in_hibrid';
    case Elektricni = 'elektricni';
    case Plin = 'plin';

    public function label(): string
    {
        return match ($this) {
            self::Benzin => 'Benzin',
            self::Diesel => 'Diesel',
            self::Hibrid => 'Hibrid',
            self::PlugInHibrid => 'Plug-in hibrid',
            self::Elektricni => 'Električni',
            self::Plin => 'Plin',
        };
    }
}
