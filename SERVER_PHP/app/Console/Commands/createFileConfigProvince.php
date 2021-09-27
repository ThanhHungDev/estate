<?php

namespace App\Console\Commands;

use App\Models\Province;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class createFileConfigProvince extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:province-config';

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
        $provinces = Province::select([ 'id', 'name'])->all()->toArray();
        Storage::disk('config')->delete('province.php');
        $hugn = var_export($provinces, true) ;
        Storage::disk('config')->put('province.php', "<?php return $hugn ;");
        dd( "chạy");
    }
}
