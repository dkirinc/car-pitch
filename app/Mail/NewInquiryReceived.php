<?php

namespace App\Mail;

use App\Models\Inquiry;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewInquiryReceived extends Mailable implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    public function __construct(public Inquiry $inquiry)
    {
        $this->inquiry->loadMissing('car.brand');
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Autolider web stranica - Novi zahtjev',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.new-inquiry',
        );
    }
}
