<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // if(!$this->app->runningInConsole()){
        //     $baseModel  = new BaseModel();
        //     $topicModel = $baseModel->createTopicModel();
        //     $tagModel   = $baseModel->createTagModel();
    
        //     $allTopic = $topicModel->get(['id', 'slug', 'name']);
        //     $allTag   = $tagModel->get(['id', 'slug', 'name']);
            
        //     View::share('allTopic', $allTopic);
        //     View::share('allTag', $allTag);
        // }
    }
}
