<?php

namespace App\Console\Commands;

use App\Helpers\SupportString;
use App\Mail\MailCrawler;
use App\Models\ApartmentProject;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class parserJsonProjectsToRow extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:parser-json-projects';

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

    private function mailAdminPostSuccess(){

        $messageMail = "Cảnh báo hoàn thành parser dữ liệu!";
        /// send mail
        Mail::to(trim(env('MAIL_TO_ADMIN', 'thanhhung.code@gmail.com')))
            ->send(new MailCrawler([ 'message' => $messageMail ]));
        if (Mail::failures()) {

            /// chưa biết làm gì
        }
    }
    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $description = ' Command Run parser json form api cho tot ';

        $stringsQuerys = DB::connection('crawler')->table('fake_apartment_projects')->where('parser', "=", 0)->take(100)->get();
        if( $stringsQuerys->isEmpty() ){
            /// hết rồi
            $this->mailAdminPostSuccess();
            return 0;
        }
        $projects = [];

        foreach( $stringsQuerys as $item ){

            $json = $item->json;
            $json_data = json_decode($json, true);

            if( isset($json_data['projects']) && count($json_data['projects']) ){
                $projects = array_merge($projects, $json_data['projects']);
            }
        }
        //// filter duplicate

        //// loop toàn bộ mảng các phần tử
        foreach( $projects as $project ){
            $isExistProjectName = ApartmentProject::where('project_oid', '=', $project['project_oid'])->first();
            if(!$isExistProjectName){
                /// không tônf tại thì lưu vào db
                $item = [
                    'project_oid' => $project['project_oid'],
                    'name'        => $project['project_name'],
                    'slug'        => SupportString::createSlug($project['project_name']),
                    'public'      => isset($project['is_active']) && $project['is_active'] ? 1 : 0,
                    'images'      => isset($project['project_images']) && $project['project_images'] ? json_encode($project['project_images']) : json_encode([]),
                ];
                if( isset($project['type_name']) ){
                    $item['type'] = $project['type_name'];
                    unset($project['type_name']);
                }
                if( isset($project['type_id']) ){
                    $item['type_id'] = $project['type_id'];
                    unset($project['type_id']);
                }
                if( isset($project['introduction']) ){
                    $item['introduction'] = $project['introduction'];
                    unset($project['introduction']);
                }
                if( isset($project['area_total']) ){
                    $item['area_total'] = $project['area_total'];
                    unset($project['area_total']);
                }
                if( isset($project['geo']) ){
                    $item['geo'] = $project['geo'];
                    unset($project['geo']);
                }
                if( isset($project['process']) ){
                    $item['process'] = $project['process'];
                    unset($project['process']);
                }
                if( isset($project['street_id']) ){
                    $item['street_id'] = $project['street_id'];
                    unset($project['street_id']);
                }
                if( isset($project['short_introduction']) ){
                    $item['short_introduction'] = $project['short_introduction'];
                    unset($project['short_introduction']);
                }
                if( isset($project['address']) ){
                    $item['address'] = $project['address'];
                    unset($project['address']);
                }
                if( isset($project['address2']) ){
                    $item['address2'] = $project['address2'];
                    unset($project['address2']);
                }
                if( isset($project['district_id']) ){
                    $item['district_id'] = $project['district_id'];
                    unset($project['district_id']);
                }
                if( isset($project['region_v2']) ){
                    $item['region_id'] = $project['region_v2'];
                    unset($project['region_v2']);
                }
                if( isset($project['area_v2']) ){
                    $item['area_id'] = $project['area_v2'];
                    unset($project['area_v2']);
                }
                if( isset($project['ward']) ){
                    $item['ward_id'] = $project['ward'];
                    unset($project['ward']);
                }
                $item['bakup'] = json_encode($project);
                
                try {
                    ApartmentProject::insert($item);
                } catch (\Throwable $th) {
                    echo "lỗi ngay chỗ ". $th->getMessage()  .'<br />';
                    print( htmlspecialchars(json_encode($project['project_oid']))); 
                }
            }
        }

        $idUpdate = $stringsQuerys->pluck('id')->toArray();
        DB::connection('crawler')->table('fake_apartment_projects')->whereIn('id', $idUpdate )->update([ 'parser' => 1 ]);
        
        $this->info( $this->signature . "\n". $description . "\n" . count($projects));
    }
}
