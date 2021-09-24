<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;

class createFontFromBladeViews extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:render-font';

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
        $fas = [];
        $files = Storage::disk('views')->allFiles('client');
        
        foreach ($files as $file) {
            $content = Storage::disk('views')->get($file);

            if( preg_match_all('/ fa-([^" ]+)/', $content, $matches) ){
                
                $fas = array_merge($matches[1], $fas );
            }
        }
        $text = '';
        $fas = array_flip( $fas );
        
        $awes = Config::get("awe");
        foreach( $awes as $key => $awe ){
            if( isset($fas[$key]) ){
                $text .= ",\n ";
                $text .=  $key .' : "'. utf8_decode($awe) .'"';
            }
        }
        $text = substr($text, 2 );
        
        /// tạo file list font sẽ dùng
        Storage::disk('sass')->put('library/awesome/_font_config.scss', "\$awe-icons: (
            $text
            )!default;");
        dd( $text );
    }
}
