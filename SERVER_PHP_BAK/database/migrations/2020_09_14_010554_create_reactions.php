<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class CreateReactions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /// lưu cái thông tin người dùng tương tác post
        Schema::create('reactions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('post_id')->unsigned();
            $table->unsignedInteger('user_id')->unsigned();
            $table->integer('type')->default(Config::get('react.LIKE'));/// thích / không thích / report
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
        Schema::dropIfExists('reactions');
    }
}
