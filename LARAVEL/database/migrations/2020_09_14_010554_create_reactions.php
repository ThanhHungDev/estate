<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
            $table->id();
            $table->unsignedInteger('post_id')->unsigned();
            $table->unsignedInteger('user_id')->unsigned();
            $table->unsignedInteger('react_id')->unsigned();/// nếu muốn recomment 1 comment
            $table->integer('type')->unsigned();/// thích / xạo chó / report / rating / comment
            $table->text('content')->nullable();// 
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
