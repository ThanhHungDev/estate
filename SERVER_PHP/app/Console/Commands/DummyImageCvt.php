<?php

namespace App\Console\Commands;

use App\Models\District;
use App\Models\Picture;
use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class DummyImageCvt extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dummy:image';

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
        $images = Picture::select([
            'src',
            'alt',
            'key',
            'title',
            'gallery'
        ])
                                ->get()->toArray();
        Storage::disk('config')->delete('dummyimage.json');
        $json = json_encode($images);
        Storage::disk('config')->put('dummyimage.json', "$json");
        dd( "chạy data image cvt");
    }
}
