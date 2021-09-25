<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class CreateSlidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sliders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('src', 510); /// đường dẫn đến hình ảnh
            $table->string('alt', 510)->nullable(); /// alt là cái tham số cho seo nên có thể null
            $table->string('topic', 510)->nullable();
            $table->string('title', 510)->nullable(); /// title là cái tham số cho seo nên có thể null
            $table->text('excerpt')->nullable();
            $table->text('content')->nullable();
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
        Schema::dropIfExists('sliders');
    }
}
