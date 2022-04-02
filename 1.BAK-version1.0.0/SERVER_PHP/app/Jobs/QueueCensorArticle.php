<?php

namespace App\Jobs;

use App\Mail\MailCensorArticle;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class QueueCensorArticle implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $production;
    /**
     * Create a new job instance.
     *
     * @param Array $data array data of production
     * @return void
     */
    public function __construct( $data)
    {
        $this->production  = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Log::channel('mail')->info("Mail đến quản trị viên để duyệt bài viết: " . $this->production['title']);
        // if(Config::get('app.env') != 'local'){
            Mail::to(trim(env('MAIL_TO_ADMIN', 'thanhhung.code@gmail.com')))
            ->send(new MailCensorArticle($this->production));
            if (Mail::failures()) {

                Log::channel('mail')->info("lỗi lớn, không thể liên lạc với quản trị viên.");
            }
        // }
    }
}
