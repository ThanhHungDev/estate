<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class CreateApartmentProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apartment_projects', function (Blueprint $table) {
            $table->id();
            $table->string('name', 500);
            $table->string('slug', 500)->nullable();
            $table->integer('public')->default(0); /// duyệt : is_active
            $table->integer('type_id')->nullable(); /// type ví dụ 1 ... 4 ... 
            $table->string('type', 255)->nullable();/// type ví dụ Khu phức hợp / Khu căn hộ / 
            $table->text('introduction')->nullable();/// nội dung
            $table->double('area_total')->nullable();/// tổng diện tích
            $table->string('geo', 255)->nullable(); /// vị trí bản đồ map
            $table->text('short_introduction')->nullable();/// nội dung
            $table->string('process')->nullable();/// đang thi công / đã hoàn thành / ...
            
            $table->string('address')->nullable(); /// Đường số 1
            $table->string('address2')->nullable(); /// Quận Thủ Đức - Thành phố Thủ Đức, Tp Hồ Chí Minh
            // $table->integer('province_id');
            $table->integer('district_id')->nullable();

            $table->integer('region_id')->nullable();
            $table->integer('area_id')->nullable();
            $table->integer('ward_id')->nullable();
            $table->integer('street_id')->nullable();
            $table->text('images')->nullable();
            $table->jsonb('galleries')->nullable(); /// do mình parser từ text qua sau khi download về local
            $table->text('bakup')->nullable();/// nội dung json
            $table->string("project_oid");
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
        Schema::dropIfExists('apartment_projects');
    }
}
