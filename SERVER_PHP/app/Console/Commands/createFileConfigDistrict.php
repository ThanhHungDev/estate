<?php

namespace App\Console\Commands;

use App\Models\District;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class createFileConfigDistrict extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:district-config';

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
        $districts = District::select([ 'id', 'name as text', 'province_id as province'])->get()->toArray();
        Storage::disk('config')->delete('district.php');
        $hugn = var_export($districts, true) ;
        Storage::disk('config')->put('district.php', "<?php return $hugn;");
        dd( "chạy");
    }
}
