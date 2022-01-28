<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

class SmsException extends Exception
{
    /**
     * Report or log an exception.
     *
     * @return void
     */
    public function report()
    {
        Log::debug('Error sms exception');
        // dispatch vào hệ thống log để 
        return false;
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        return false;
    }
}
