<?php 
namespace App\Helpers;

use Jenssegers\Agent\Agent;

class SupportAgent{

    public static function getQuanlityByDevice() {

		$agent = new Agent();
        if( $agent->isMobile() ){
            return 'mobile';
        }
        return 50;
	}
    
}


