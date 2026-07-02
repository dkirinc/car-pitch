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
}
