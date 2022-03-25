<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class CreatePictures extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pictures', function (Blueprint $table) {
            
            $table->increments('id');
            $table->text('src'); /// đường dẫn đến hình ảnh
            $table->string('alt')->nullable(); /// alt là cái tham số cho seo nên có thể null
            $table->string('key')->nullable(); /// là id của cái bảng mà nó nắm
            $table->string('title')->nullable(); /// title là cái tham số cho seo nên có thể null
            $table->integer('width')->nullable(); /// tham số chiều rộng để đỡ load img js mới biết
            $table->integer('height')->nullable();/// tham số chiều cao để đỡ load img js mới biết
            $table->integer('gallery')->default(Config::get("constant.GALARIES.DEFAULT")); /// nằm trong config constant 
            $table->integer('publish')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pictures');
    }
}
