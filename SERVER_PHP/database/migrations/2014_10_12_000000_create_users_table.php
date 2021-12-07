<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('avatar')->default(Config::get("image.AVATAR"));
            $table->string('background')->default(Config::get("image.BACKGROUND"));
            $table->string('password');
            $table->integer('role_id')->default(Config::get("constant.ROLE.USER")); /// xác định là user hay admin
            $table->integer('role')->default(Config::get("constant.USER_TYPE.PERSON"));/// xác định là cá nhân đăng bài hay môi giới đăng bài
            $table->integer('sale_type')->default(Config::get("constant.SALE_TYPE.DEFAULT"));
            $table->string('phone_verify')->nullable();
            $table->timestamp('time_verify')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->string('contact')->nullable(); /// cột này để tài  khoản user chỉ định liên hệ mail đến đâu
            $table->unsignedInteger('commune_id')->unsigned()->nullable();/// cột này là địa chỉ liên hệ theo phường
            $table->string('street')->nullable(); /// địa chỉ đường
            $table->string('home_number')->nullable(); /// địa chỉ số nhà 
            $table->integer('active')->default(Config::get("constant.ACTIVITY.DEACTIVE")); /// khi user đang 
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
