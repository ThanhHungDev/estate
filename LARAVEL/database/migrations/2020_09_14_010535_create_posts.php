<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
            $table->id();
            $table->unsignedInteger('user_id')->unsigned();
            $table->unsignedInteger('contact_id')->unsigned();
            $table->unsignedInteger('category_id')->unsigned();/// phân loại ví dụ : căn hộ chung cư
            $table->string('title', 150)->nullable();
            $table->string('slug', 150)->nullable();
            $table->integer('type')->default(1);// phân biệt loại post/page/custom
            $table->text('stylesheet')->nullable();// custom post
            $table->text('javascript')->nullable();
            $table->integer('sort')->default(0);
            $table->integer('public')->default(0); /// duyệt
            $table->string('description', 255)->nullable();/// seo

            $table->unsignedInteger('land_id')->unsigned()->nullable(); // thổ cư / đất nền dự án / đất công nghiệp / đất nông nghiệp
            $table->integer('direction')->nullable(); /// đông / đông bắc / đông nam / tây / tây bắc / tây nam / nam / bắc
            $table->integer('direction_balcony')->nullable(); /// hướng ban công
            
            $table->string('horizontal')->nullable(); /// chiều ngang
            $table->string('vertical')->nullable(); /// chiều dài 
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
