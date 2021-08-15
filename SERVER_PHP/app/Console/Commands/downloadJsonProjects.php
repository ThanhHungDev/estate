<?php

namespace App\Console\Commands;

use App\Helpers\SupportString;
use App\Models\ApartmentProject;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class downloadJsonProjects extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:download-projects';

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
        $description = ' Command Run Download json form api cho tot ';


        $stringsQuerys = DB::connection('crawler')->table('fake_apartment_projects')->where('request', "=", 0)->take(50)->get();
        foreach( $stringsQuerys as $item ){

            $string = $item->string;

            $url = "https://gateway.chotot.com/v1/public/xproperty/projects/_search?project_name=$string&status=active&limit=100";
            $json = file_get_contents($url);
            $json_data = json_decode($json, true);
            // if( $json_data['total'] < 100 ){
            //     /// update tất cả đứa nào dạng like '%$string%
            //     DB::connection('crawler')->table('fake_apartment_projects')
            //     ->where('string', 'like', "%$string%")
            //     ->update([ 'request' => 1, 'json' => $json, 'limit_100' => 0 ]);
            //     echo "có update $string";
            // }
            
            //// update id
            DB::connection('crawler')->table('fake_apartment_projects')
                ->where('id', '=', $item->id )
                ->update([ 'request' => 1, 'json' => $json, 'limit_100' => ($json_data['total'] >= 100 ? 1 : 0)  ]);
        }

        $this->info( $this->signature . "\n". $description );
    }

}
