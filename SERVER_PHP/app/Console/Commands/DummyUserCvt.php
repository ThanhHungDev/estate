<?php

namespace App\Console\Commands;

use App\Models\District;
use App\Models\Product;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class DummyUserCvt extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dummy:user';

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
        $users = User::select([
            'name',
            'email',
            'crawler_id',
            'crawler_link',
            'avatar',
            'password',
            'role_id',
            'commune_id',
            'street',
            'home_number',
            'phone',
            'active',
            'created_at',
            'updated_at',
        ])
        ->whereNotNull('crawler_link')
                                ->get()->toArray();
        Storage::disk('config')->delete('dummyuser.php');
        $hugn = var_export($users, true) ;
        Storage::disk('config')->put('dummyuser.php', "<?php return $hugn;");
        dd( "chạy data user cvt");
    }
}
