<?php

namespace App\Actions;

use App\Models\Inquiry;

class StoreContactInquiry
{
    public function handle(array $data): Inquiry
    {
        return Inquiry::create($data);
    }
}
