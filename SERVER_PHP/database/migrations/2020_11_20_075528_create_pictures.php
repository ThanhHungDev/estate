<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
            $table->string('src');
            $table->string('alt')->nullable();
            $table->string('key')->unique()->nullable();
            $table->string('title')->nullable();
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
            $table->integer('gallery')->nullable();
            $table->integer('responsive')->default(1);
            $table->integer('foreign')->nullable();
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
