<?php

namespace App\Providers;

use App\Models\Permission;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('is_supper_admin', function ($user) {
            return ($user->role)->type == 'admin';
        });
        Gate::define('is_admin', function ($user) {
            return ($user->role)->type == 'user' ;
        });
        if(!$this->app->runningInConsole()){
            foreach (Permission::all() as $permission ){
                Gate::define($permission->name, function ($user) use ($permission) {
                    
                    return $user->checkPermission($permission->name);
                });
            }
        }
    }
}
