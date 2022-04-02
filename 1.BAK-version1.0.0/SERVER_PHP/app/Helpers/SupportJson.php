<?php 
namespace App\Helpers;

use App\Libraries\Catalogue;
use Illuminate\Support\Facades\Config;

class SupportJson{
    
    
    public static function encodeJsonPrettyHowTo($jsonHowTo){
        $jsonHowTo = json_encode($jsonHowTo);
        $jsonHowTo = json_decode($jsonHowTo);
        return json_encode($jsonHowTo, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    }
    /**
     * createJsonHowTo render json string cho bài viết
     *
     * @param  string $router url của request
     * @param  string $title  title của bài post
     * @param  string $description
     * @param  text $context
     * @param  array|string $image have key url, width, height
     * @param  array $supplys is array(string, string, ... ) là điều kiện làm được là nguyên vật liệu, khác với công cụ tool
     * @param  mixed $tools is array(string, string, ... ) là công cụ, nó sẽ không tiêu tốn như nguyên liệu
     * @param  mixed $totalTime Tổng thời gian cần thiết để thực hiện tất cả các hướng dẫn hoặc chỉ dẫn (bao gồm cả thời gian chuẩn bị vật tư), ở định dạng thời gian ISO 8601.
     * @return json
     */
    public static function createJsonHowTo($router, $title, $description, $context, $image, $supplys = array(), $tools = array(), $totalTime = 'PT2M'){
        
        $STEP_BEGIN_HEADING = 2;

        if( !$context ){
            return null;
        }

        $howTo = [
            "@context"    => "http://schema.org",
            "@type"       => "HowTo",
            "name"        => $title,
            "description" => $description,
        ];
        if( !empty($image) ){

            if(is_string($image)){

                $howTo['image'] = $image;
            }else if(is_array($image)){

                $howTo['image'] = [
                    "@type"  => "ImageObject",
                    "url"    => $image['url'],
                    "height" => $image['height'],
                    "width"  => $image['width']
                ];
            }
        }
        $howTo['supply'] = [];
        if(!empty($supplys)){

            foreach( $supplys as $supply){
                array_push($howTo['supply'], array("@type" => "HowToSupply", "name" => $supply));
            }
        }
        
        $howTo['tool'] = [];
        if(!empty($tools)){

            foreach( $tools as $tool){
                array_push($howTo['tool'], array("@type" => "HowToTool", "name" => $tool));
            }
        }
        if($totalTime){

            $howTo['totalTime'] = $totalTime;
        }
        
        if($context){

            $howTo['step'] = [];
            $steps = self::createStepHowToFromHtml($context, $STEP_BEGIN_HEADING, $howTo['image']);
            foreach($steps as $key => $step ){

                $heading = Catalogue::cleanTextSupport($step->heading);
                $id    	 = '#' . SupportString::createLinkSlug($heading);
                if(strpos($step->image, asset('/')) === false){
                    $image   = Route('IMAGE_RESIZE', 
                        [   
                            'size' => 'thumbnail', 
                            'type' => 'fit', 
                            'imagePath' => trim($step->image, '/')
                        ]);
                }else{
                    $image = $step->image;
                }

                $stepItem = array(
                    "@type" => "HowToStep",
                    "url"   => $router . $id,
                    "name"  => html_entity_decode($heading),
                    "image" => $image,
                );
                          $stepText = Catalogue::cleanTextSupport($step->context);
                $stepItem['text']   = SupportString::limitText($stepText, 160, '...');
                array_push($howTo['step'] , $stepItem);
            }
        }
        return $howTo;
    }

    public static function createStepHowToFromHtml($text, $headingNumber = 2, $imgErr = '/images/failed.jpg' ) {
        $htmlContexts    = array();
        $removeBreakLine = str_replace(["\n", "\r", "&nbsp;"], "", $text);
        $addSpaceTag     = str_replace('<', ' <', $removeBreakLine );
        $text            = str_replace('  ', ' ', $addSpaceTag );
        /// explode </h2
        $eheadings = explode("</h$headingNumber", $text);
        if( count( $eheadings ) > 2 ){
            /// có ít nhất 2 thẻ h2
            $xpathH2 = [];
            for ($index = 0; $index  < count( $eheadings ); $index ++) { 
                if( $index == 0 ){
                    $xpathH2[] = $eheadings[$index];
                }else{
                    $listOpenH2 = explode("<h$headingNumber", $eheadings[$index]);
                    $xpathH2[] = implode("<h$headingNumber<h$headingNumber", $listOpenH2);
                }
            }
            $text = implode( "</h$headingNumber", $xpathH2);
        }
        $text .= "<h$headingNumber";

        preg_match_all("/h$headingNumber([^>]*)>(.*?)<\/h$headingNumber>(.*?)<h$headingNumber/", $text, $matches);

        
        for ($index = 0; $index < count($matches[0]) ; $index ++) { 
            
            $content = $matches[3][$index];
            $srcImages = self::extractImageURLfromHTML($content);
            if(!$srcImages || !count($srcImages)){
                /// not have img
                $stepImage = $imgErr;
            }else{
                $stepImage = $srcImages[0];
            }

            $itemListContent = array();
            if($content){
                $headingChildNumber = $headingNumber --;
                $itemListContent = self::createStepHowToFromHtml($content, $headingChildNumber );
            }
            
            $heading = $matches[1][$index];
            $context = (string)$content;
            $items   = $itemListContent;
            $image   = $stepImage;

            $object = (object)compact('heading', 'context', 'items' , 'image');
            array_push($htmlContexts, $object);
        }
        return $htmlContexts;
    }
    
    private static function extractImageURLfromHTML($html = ''){

        preg_match_all('/<img.*?src=[\'"](.*?)[\'"].*?>/i', $html, $matchesSrc );
        if($matchesSrc){
            return $matchesSrc[1];
        }
        return null;
    }

    public static function cleanText(string $text) {

		$removeBreakLine = str_replace(["\n", "\r", "&nbsp;"], "", $text);
		$addSpaceTag     = str_replace('<', ' <', $removeBreakLine );
		$removeHtml      = strip_tags( $addSpaceTag );
		$removeDupSpace  = str_replace('  ', ' ', $removeHtml );

		return trim($removeDupSpace);
	}
}


