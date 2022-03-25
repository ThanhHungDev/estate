<?php

namespace App\Console\Commands;

use App\Models\Commune;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class createFileConfigCommunes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:communes-config';

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
        // 1: {id: 1, text: 'Quận Ba Đình', province: 1}
        $communes = Commune::select(['id', 'name as text', 'district_id as district'])
                                ->get()->toArray();
        Storage::disk('config')->delete('communes.php');
        $hugn = var_export($communes, true) ;
        Storage::disk('config')->put('communes.php', "<?php return $hugn;");
        dd( "chạy");
    }
}
