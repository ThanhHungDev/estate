<?php

namespace App\Jobs;

use App\Mail\MailRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class QueueMailler implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email;
    protected $data;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email, $data)
    {
        $this->email = $email;
        $this->data  = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Log::channel('mail')->info("Đang liên lạc với quản trị viên về vấn đề: " . $this->data['message']);
        // if(Config::get('app.env') != 'local'){
            Mail::to(trim(env('MAIL_TO_ADMIN', 'thanhhung.code@gmail.com')))
            ->send(new MailRequest($this->data));
            if (Mail::failures()) {

                Log::channel('mail')->info("lỗi lớn, không thể liên lạc với quản trị viên.");
            }
        // }
    }
}
