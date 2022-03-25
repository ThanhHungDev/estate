<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        
        if(!$this->app->runningInConsole()){
            Gate::define('is_supper_admin', function ($user) {
                return ($user->role)->type == 'admin';
            });
            Gate::define('is_admin', function ($user) {
                return ($user->role)->type == 'user' ;
            });
        }
    }
}
