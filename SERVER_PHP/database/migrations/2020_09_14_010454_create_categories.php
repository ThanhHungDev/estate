<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
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
            $table->unsignedInteger('user_id')->unsigned()->nullable();
            $table->string('name')->nullable();
            $table->integer('parent')->default(Config::get('constant.CATEGORY__PARENT'));
            $table->integer('verify')->default(Config::get('constant.CATEGORY__VERIFY.REQUIRED')); /// thuộc tính này xác định có cần login mới được đăng bài không
            $table->string('slug')->nullable();
            $table->string('excerpt')->nullable();
            $table->text('content')->nullable();
            $table->integer('view')->default(1);
            $table->text('catalogue')->nullable();
            $table->string('background')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('site_name')->nullable();
            $table->string('image_seo')->nullable();
            $table->string('description_seo')->nullable();
            $table->json('extensions')->default("[]");
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
