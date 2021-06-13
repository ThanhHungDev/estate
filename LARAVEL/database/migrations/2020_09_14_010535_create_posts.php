<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class CreatePosts extends Migration
{
    /**
     * Run the migrations.
     * ALTER TABLE posts ADD COLUMN sort integer default 1;
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->unsigned(); /// do user nào post lên
            $table->unsignedInteger('category_id')->unsigned();/// phân loại ví dụ : căn hộ chung cư

            $table->string('title', 150)->nullable();
            $table->string('slug', 150)->nullable();
            $table->integer('public')->default(0); /// duyệt
            $table->text('content')->nullable();/// nội dung
            $table->string('description', 255)->nullable();/// seo

            $table->integer('direction')->default(Config::get("constant.DIRECTION.DEFAULT.VALUE")); /// đông / đông bắc / đông nam / tây / tây bắc / tây nam / nam / bắc
            $table->integer('direction_balcony')->default(Config::get("constant.BALCONY.DEFAULT.VALUE")); /// hướng ban công

            $table->float('horizontal', 8, 5)->nullable();/// chiều ngang tính theo mét
            $table->float('vertical', 8, 5)->nullable(); /// chiều dài tính theo mét

            $table->integer('price');
            $table->integer('unit_price')->default(Config::get("constant.UNIT.PRICE.MILLION"));

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
        Schema::dropIfExists('posts');
    }
}
