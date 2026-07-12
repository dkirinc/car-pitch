<?php

namespace App\Enums;

enum InquiryType: string
{
    case Stock = 'stock';
    case Import = 'import';

    public function label(): string
    {
        return match ($this) {
            self::Stock => 'Upit za vozilo iz ponude',
            self::Import => 'Upit za uvoz vozila',
        };
    }
}
