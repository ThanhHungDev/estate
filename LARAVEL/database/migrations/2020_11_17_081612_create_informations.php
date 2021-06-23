<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('informations', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('post_id')->unsigned();
            $table->integer('bedroom')->nullable(); /// số phòng ngủ
            $table->integer('toilet')->nullable(); /// số tolet 
            $table->integer('legal')->nullable(); /// giấy tờ pháp lý: có sổ/ chờ xổ/ giấy tờ khác
            $table->float('rate_value')->nullable();/// 
            $table->string('price')->nullable(); /// giá
            $table->string('deposit')->nullable(); /// giá cọc
            
            $table->string('furniture')->nullable(); /// đồ nội thất: cao cấp/ đầy đủ/ cơ bản/ bàn giao thô
            $table->string('floor')->nullable(); /// vị trí tầng

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
        Schema::dropIfExists('informations');
    }
}
