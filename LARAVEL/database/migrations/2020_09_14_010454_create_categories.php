<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 150);
            $table->string('slug', 150);
            $table->text('content')->nullable();
            $table->string('background')->nullable();
            $table->string('description')->nullable();// seo 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}