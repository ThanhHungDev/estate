<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailCensorArticle extends Mailable
{
    use Queueable, SerializesModels;

    public $input; // array product record
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
        ->view('mail.article.view')
        ->text('mail.article.plain');
    }
}
