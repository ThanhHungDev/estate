<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
         $this->renderable(function(Exception $e, $request) {
             return $this->handleException($request, $e);
         });
    }
 
    public function handleException($request, Exception $exception)
    {

        /// api 
        if ($request->expectsJson()){
            $this->renderable(function(TokenInvalidException $e, $request){
                return response()
                ->error(
                    'Invalid token', 
                    ['error' => 'invalid_token'],
                    Response::HTTP_UNAUTHORIZED
                )
                ->setStatusCode(Response::HTTP_UNAUTHORIZED);
            });
            $this->renderable(function (TokenExpiredException $e, $request) {
                return response()
                ->error(
                    'Token has Expired', 
                    ['error' => 'expired'],
                    Response::HTTP_UNAUTHORIZED
                )
                ->setStatusCode(Response::HTTP_UNAUTHORIZED);
            });
    
            $this->renderable(function (JWTException $e, $request) {
                return response()
                ->error(
                    'Token not parsed', 
                    ['error' => 'not_parsed'],
                    Response::HTTP_UNAUTHORIZED
                )
                ->setStatusCode(Response::HTTP_UNAUTHORIZED);
            });

            $this->renderable(function (JWTException $e, $request) {
                return response()
                ->error(
                    'Lỗi chưa xác định', 
                    ['error' => 'not_define', 'data' => $request->all()],
                    Response::HTTP_INTERNAL_SERVER_ERROR
                )
                ->setStatusCode(Response::HTTP_INTERNAL_SERVER_ERROR);
            });
        }

        
        
    }
}
