<?php

namespace App\Actions;

use App\Enums\InquiryType;
use App\Models\Inquiry;

class StoreContactInquiry
{
    public function handle(array $data): Inquiry
    {
        return Inquiry::create([
            'type' => InquiryType::Import,
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'notes' => $data['message'],
        ]);
    }
}
