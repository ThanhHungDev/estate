<?php

namespace App\Providers;

use Illuminate\Routing\ResponseFactory;
use Illuminate\Support\ServiceProvider;

class ResponseServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(ResponseFactory $factory)
    {
        $factory->macro('success', function ($message = '', $data = null, $status = 200 ) use ($factory) {
            $format = [
                'status' => $status,
                'message' => $message,
                'data' => $data,
            ];

            return $factory->make($format);
        });

        $factory->macro('error', function (string $message = '', $errors = [], $status = 400) use ($factory){
            $format = [
                'status' => $status, 
                'message' => $message,
                'errors' => $errors,
            ];

            return $factory->make($format);
        });
    }
}
