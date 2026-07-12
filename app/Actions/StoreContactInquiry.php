<?php

namespace App\Actions;

use App\Mail\NewInquiryReceived;
use App\Models\Inquiry;
use Illuminate\Support\Facades\Mail;

class StoreContactInquiry
{
    public function handle(array $data): Inquiry
    {
        $inquiry = Inquiry::create($data);

        Mail::to(config('mail.admin_address'))->send(new NewInquiryReceived($inquiry));

        return $inquiry;
    }
}
