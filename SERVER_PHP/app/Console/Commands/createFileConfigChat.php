<?php

namespace App\Console\Commands;

use App\Models\District;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;

class createFileConfigChat extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:chat-config';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        /// convert array to array key => value
        $events = [];
        foreach (Config::get('realtime') as $item) {
            $events[strtoupper($item)] = strtolower($item);
            $events[strtoupper("response__$item")] = strtolower("response__$item");
        }
        $fileContent = "'use strict' \n\n\nmodule.exports = "  . json_encode($events);
        Storage::disk('chat')->delete('event.config.js');
        Storage::disk('chat')->put('event.config.js', $fileContent);
        $this->info( $this->signature . "\n đã chạy tạo file event vào hệ thống");
    }
}
