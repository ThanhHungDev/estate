<?php
namespace App\Helpers;

/**
 * The distance latitude and longitude
 */
class DistanceMap{

        
    /**
     * getDistTwoPlace The distance between two places using latitude and longitude in PHP
     *
     * @param  mixed $placeOne exa: StdClass( lat: 19.017656, long: 72.856178)
     * @param  mixed $placeTwo exa: StdClass( lat: 40.7127, long: -74.0059)
     * @return StringNumber kilometers
     */
    public static function getValueDistTwoPlace( $placeOne, $placeTwo ){
    
        //Converting to radians
        $latRadianOne  = deg2rad($placeOne->lat);
        $longRadianOne = deg2rad($placeOne->long);
        
        $latRadianTwo  = deg2rad($placeTwo->lat);
        $longRadianTwo = deg2rad($placeTwo->long);
    
        //Haversine Formula 
        $difflong = $longRadianTwo - $longRadianOne;
        $difflat  = $latRadianTwo - $latRadianOne;
    
        return pow(sin($difflat/2),2)+cos($latRadianOne)*cos($latRadianTwo)*pow(sin($difflong/2),2); 
    }

    /**
     * getKilometersDistTwoPlace The distance between two places using latitude and longitude in PHP
     *
     * @param  mixed $placeOne exa: StdClass( lat: 19.017656, long: 72.856178)
     * @param  mixed $placeTwo exa: StdClass( lat: 40.7127, long: -74.0059)
     * @return StringNumber kilometers
     */
    public static function getKilometersDistTwoPlace($placeOne, $placeTwo ){
    
        $value = self::getValueDistTwoPlace( $placeOne, $placeTwo );
        return 6378.8 * (2 * asin(sqrt($value)));
    }
    /**
     * getKilometersDistTwoPlace The distance between two places using latitude and longitude in PHP
     *
     * @param  mixed $placeOne exa: StdClass( lat: 19.017656, long: 72.856178)
     * @param  mixed $placeTwo exa: StdClass( lat: 40.7127, long: -74.0059)
     * @return StringNumber miles
     */
    public static function getMilesDistTwoPlace($placeOne, $placeTwo ){

        $value = self::getValueDistTwoPlace( $placeOne, $placeTwo );
        return 3936 * (2 * asin(sqrt($value))); //for miles
    }
}
