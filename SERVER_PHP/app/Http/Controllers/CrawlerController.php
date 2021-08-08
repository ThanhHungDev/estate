<?php

namespace App\Http\Controllers;

use App\Helpers\SupportString;
use App\Models\ApartmentProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CrawlerController extends Controller
{

    public function projects()
    {
        
        ini_set('max_execution_time', 60 * 60 ); //60 minutes

        $stringsQuerys = DB::table('fake_apartment_projects')->where('parser', "=", 0)->take(100)->get();
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
                    'bakup'       => json_encode($project),
                ];
                if( isset($project['type_name']) ){
                    $item['type'] = $project['type_name'];
                }
                if( isset($project['type_id']) ){
                    $item['type_id'] = $project['type_id'];
                }
                if( isset($project['introduction']) ){
                    $item['introduction'] = $project['introduction'];
                }
                if( isset($project['area_total']) ){
                    $item['area_total'] = $project['area_total'];
                }
                if( isset($project['geo']) ){
                    $item['geo'] = $project['geo'];
                }
                if( isset($project['process']) ){
                    $item['process'] = $project['process'];
                }
                if( isset($project['street_id']) ){
                    $item['street_id'] = $project['street_id'];
                }
                if( isset($project['short_introduction']) ){
                    $item['short_introduction'] = $project['short_introduction'];
                }
                if( isset($project['address']) ){
                    $item['address'] = $project['address'];
                }
                if( isset($project['address2']) ){
                    $item['address2'] = $project['address2'];
                }
                if( isset($project['district_id']) ){
                    $item['district_id'] = $project['district_id'];
                }
                if( isset($project['region_v2']) ){
                    $item['region_id'] = $project['region_v2'];
                }
                if( isset($project['area_v2']) ){
                    $item['area_id'] = $project['area_v2'];
                }
                if( isset($project['ward']) ){
                    $item['ward_id'] = $project['ward'];
                }
                
                try {
                    ApartmentProject::insert($item);
                } catch (\Throwable $th) {
                    echo "lỗi ngay chỗ ". $th->getMessage()  .'<br />';
                    print( htmlspecialchars(json_encode($project['project_oid']))); 
                }
            }
        }

        $idUpdate = $stringsQuerys->pluck('id')->toArray();
        DB::table('fake_apartment_projects')->whereIn('id', $idUpdate )->update([ 'parser' => 1 ]);


        // // https://gateway.chotot.com/v1/public/xproperty/projects/_search?project_name=g&status=active&limit=20
        // $url = "https://gateway.chotot.com/v1/public/xproperty/projects/_search?status=active&limit=5000";
        // $json = file_get_contents($url);
        // $json_data = json_decode($json, true);
        // Storage::disk('public')->put('projects.json', json_encode($json_data));
        // /// 
        // $projects = $json_data['projects'];

        
        // for ($i=0; $i < count($projects); $i++) { 
        //     // sleep(100);
        //     // $area = $projects[$i]['area_v2'];
        //     //// call get 
        //     // $urlArea = "https://gateway.chotot.com/v2/public/chapy-pro/wards?area=$area";
        //     // $jsonArea = file_get_contents($urlArea);
        //     // Storage::disk('public')->put("area$area.json", $jsonArea);


        //     $item = [
        //         'name'               => $projects[$i]['project_name'],
        //         'slug'               => SupportString::createSlug($projects[$i]['project_name']),
        //         'public'             => $projects[$i]['is_active'] ? 1 : 0,
        //         'images'             => json_encode($projects[$i]['project_images']),
        //         'bakup'              => json_encode($projects[$i]),
        //     ];
        //     if( isset($projects[$i]['type_name']) ){
        //         $item['type'] = $projects[$i]['type_name'];
        //     }
        //     if( isset($projects[$i]['type_id']) ){
        //         $item['type_id'] = $projects[$i]['type_id'];
        //     }
        //     if( isset($projects[$i]['introduction']) ){
        //         $item['introduction'] = $projects[$i]['introduction'];
        //     }
        //     if( isset($projects[$i]['area_total']) ){
        //         $item['area_total'] = $projects[$i]['area_total'];
        //     }
        //     if( isset($projects[$i]['geo']) ){
        //         $item['geo'] = $projects[$i]['geo'];
        //     }
        //     if( isset($projects[$i]['process']) ){
        //         $item['process'] = $projects[$i]['process'];
        //     }
        //     if( isset($projects[$i]['street_id']) ){
        //         $item['street_id'] = $projects[$i]['street_id'];
        //     }
        //     if( isset($projects[$i]['short_introduction']) ){
        //         $item['short_introduction'] = $projects[$i]['short_introduction'];
        //     }
        //     if( isset($projects[$i]['address']) ){
        //         $item['address'] = $projects[$i]['address'];
        //     }
        //     if( isset($projects[$i]['address2']) ){
        //         $item['address2'] = $projects[$i]['address2'];
        //     }
        //     if( isset($projects[$i]['district_id']) ){
        //         $item['district_id'] = $projects[$i]['district_id'];
        //     }
        //     if( isset($projects[$i]['region_v2']) ){
        //         $item['region_id'] = $projects[$i]['region_v2'];
        //     }
        //     if( isset($projects[$i]['area_v2']) ){
        //         $item['area_id'] = $projects[$i]['area_v2'];
        //     }
        //     if( isset($projects[$i]['ward']) ){
        //         $item['ward_id'] = $projects[$i]['ward'];
        //     }
            
        //     try {
        //         ApartmentProject::insert($item);
        //     } catch (\Throwable $th) {
        //         echo "lỗi ngay chỗ ". $th->getMessage()  .'<br />';
        //         print( htmlspecialchars(json_encode($projects[$i]['project_oid']))); 
        //     }
        // }
        
        
        return "xong " . count($projects);
    }



    function updateData(){

        $stringsQuerys = DB::table('fake_apartment_projects')->where('request', "=", 0)->take(100)->get();
        foreach( $stringsQuerys as $item ){

            $string = $item->string;

            $url = "https://gateway.chotot.com/v1/public/xproperty/projects/_search?project_name=$string&status=active&limit=100";
            $json = file_get_contents($url);
            $json_data = json_decode($json, true);
            if( $json_data['total'] < 100 ){
                /// update tất cả đứa nào dạng like '%$string%
                DB::table('fake_apartment_projects')
                ->where('string', 'like', "%$string%")
                ->update([ 'request' => 1 ]);
                echo "có update $string";
            }
            //// update id
            DB::table('fake_apartment_projects')
                ->where('id', '=', $item->id )
                ->update([ 'request' => 1, 'json' => $json ]);
        }
        return "xong ";
    }
}
