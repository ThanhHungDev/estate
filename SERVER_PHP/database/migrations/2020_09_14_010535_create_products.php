<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class CreateProducts extends Migration
{
    /**
     * Run the migrations.
     * ALTER TABLE posts ADD COLUMN sort integer default 1;
     * ALTER TABLE posts ADD COLUMN ldjson json;
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('category_id')->unsigned();
            $table->unsignedInteger('user_id')->unsigned()->nullable();
            $table->unsignedInteger('rating_id')->unsigned()->nullable();
            $table->unsignedInteger('commune_id')->unsigned();
            $table->string('title', 150)->nullable();
            $table->string('slug', 150)->nullable();
            $table->string('excerpt')->nullable();
            $table->text('catalogue')->nullable();
            $table->text('text_catalogue')->nullable();
            $table->text('content')->nullable();
            $table->text('text_content')->nullable();
            $table->string('background', 510)->nullable();
            $table->string('thumbnail', 510)->nullable();
            $table->integer('like')->default(1);
            $table->integer('view')->default(1);
            $table->float('rate_value')->default(3.5);
            $table->text('rate_review_body')->nullable();
            $table->text('stylesheet')->nullable();
            $table->text('javascript')->nullable();

            $table->integer('direction')->default(Config::get("constant.DIRECTION.DEFAULT.VALUE")); /// đông / đông bắc / đông nam / tây / tây bắc / tây nam / nam / bắc
            $table->integer('direction_balcony')->default(Config::get("constant.BALCONY.DEFAULT.VALUE")); /// hướng ban công
            $table->float('horizontal', 8, 5)->nullable();/// chiều ngang tính theo mét
            $table->string('square')->nullable(); /// chiều dài tính theo mét
            $table->string('price')->nullable();
            $table->integer('unit_price')->default(Config::get("unit.PRICE.DEFAULT.VALUE")); /// triệu / m2 hay bao nhiêu trên sào hay tổng giá làm default nè
            $table->integer('negotiate')->default(Config::get("constant.NEGOTIATE.YES.VALUE")); // có thương lượng hay không

            $table->json('extensions')->default("[]"); /// là tiện ích mở rộng mà bạn muốn mở rộng ví dụ nhà thì có số phòng ngủ số tolet nhưng đất thì không
            
            $table->json('ldjson')->nullable();
            $table->integer('type')->default(1);
            $table->integer('sort')->default(-1);
            $table->integer('public')->default(1);
            $table->string('site_name', 150)->nullable();
            $table->string('image_seo', 510)->nullable();
            $table->string('description_seo', 255)->nullable();
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
        Schema::dropIfExists('products');
    }
}
