<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailCrawler extends Mailable
{
    use Queueable, SerializesModels;

    public $input;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($_input)
    {
        $this->input = $_input;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        
        return $this
        ->view('mail.crawler.view')
        ->text('mail.crawler.plain');
    }
}
