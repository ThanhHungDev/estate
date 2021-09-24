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
            $table->integer('role_id')->default(Config::get("constant.ROLE.USER"));
            $table->integer('sale_type')->default(Config::get("constant.SALE_TYPE.DEFAULT"));
            $table->string('phone_verify')->nullable();
            $table->timestamp('time_verify')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->string('contact')->nullable();
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
