<?php
namespace App\Helpers;


class ReadMoney{
    public static $STR_DIGIT = [ " không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín " ];
    public static $TYPE_MONEY = ["", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ"];

    public static function readDigit3Number($number){
        $hundredsDigit   = 0;
        $tensDigit       = 0;
        $charactersDigit = 0;

        $result          = '';

        $hundredsDigit   = intval($number / 100);
        $tensDigit       = intval(($number % 100) / 10);
        $charactersDigit = $number % 10;

        if ($hundredsDigit == 0 && $tensDigit == 0 && $charactersDigit == 0) return "";
        if ($hundredsDigit != 0) {
            $result .= self::$STR_DIGIT[$hundredsDigit] . " trăm ";
            if (($tensDigit == 0) && ($charactersDigit != 0)) $result .= " linh ";
        }
        if (($tensDigit != 0) && ($tensDigit != 1)) {
            $result .= self::$STR_DIGIT[$tensDigit] . " mươi";
            if (($tensDigit == 0) && ($charactersDigit != 0)) $result = $result . " linh ";
        }
        if ($tensDigit == 1) $result .= " mười ";
        switch ($charactersDigit) {
            case 1:
                if (($tensDigit != 0) && ($tensDigit != 1)) {
                    $result .= " mốt ";
                }
                else {
                    $result .= self::$STR_DIGIT[$charactersDigit];
                }
                break;
            case 5:
                if ($tensDigit == 0) {
                    $result .= self::$STR_DIGIT[$charactersDigit];
                }
                else {
                    $result .= " lăm ";
                }
                break;
            default:
                if ($charactersDigit != 0) {
                    $result .= self::$STR_DIGIT[$charactersDigit];
                }
                break;
        }
        return $result;
    }
    public static function readDigit($money){

        $dot = 0;
        $i = 0;
        $number = 0;
        $result = "";
        $tmp = "";
        $points = [];
        if ($money < 0) return "Số tiền âm !";
        if ($money == 0) return "Không đồng !";
        if ($money > 0) {
            $number = $money;
        }
        else {
            $number = -$money;
        }
        if ($money > 8999999999999999) {
            //$money = 0;
            return "Số quá lớn!";
        }
        $points[5] = floor($number / 1000000000000000);
        // if (isNaN($points[5]))
        //     $points[5] = "0";
        $number = $number - floatval($points[5]."") * 1000000000000000;
        $points[4] = floor($number / 1000000000000);
        // if (isNaN($points[4]))
        //     $points[4] = "0";
        $number = $number - floatval($points[4]."") * 1000000000000;
        $points[3] = floor($number / 1000000000);
        // if (isNaN($points[3]))
        //     $points[3] = "0";
        $number = $number - floatval($points[3] . "") * 1000000000;
        $points[2] = intval($number / 1000000);
        // if (isNaN($points[2]))
        //     $points[2] = "0";
        $points[1] = intval(($number % 1000000) / 1000);
        // if (isNaN($points[1]))
        //     $points[1] = "0";
        $points[0] = intval($number % 1000);
        // if (isNaN($points[0]))
        //     $points[0] = "0";
        if ($points[5] > 0) {
            $dot = 5;
        }
        else if ($points[4] > 0) {
            $dot = 4;
        }
        else if ($points[3] > 0) {
            $dot = 3;
        }
        else if ($points[2] > 0) {
            $dot = 2;
        }
        else if ($points[1] > 0) {
            $dot = 1;
        }
        else {
            $dot = 0;
        }
        for ($i = $dot; $i >= 0; $i--) {
            $tmp = self::readDigit3Number($points[$i]);
            $result .= $tmp;
            if ($points[$i] > 0) $result .= self::$TYPE_MONEY[$i];
            if (($i > 0) && $tmp) $result .= ',';//&& (!string.IsNullOrEmpty(tmp))
        }
        if (mb_substr($result, mb_strlen($result) - 1) == ',') {
            $result = mb_substr( $result, 0,mb_strlen($result) - 1);
        }
        // $result = strtoupper( mb_substr($result, 1, 2)) . mb_substr($result, 2);
        return ucfirst(strtolower($result));
    }
}
