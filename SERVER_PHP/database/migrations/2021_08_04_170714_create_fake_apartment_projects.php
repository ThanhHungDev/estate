<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class CreateFakeApartmentProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('crawler')->create('fake_apartment_projects', function (Blueprint $table) {
            $table->id();
            $table->string('string');
            $table->integer('request')->default(0);
            $table->integer('parser')->default(0);
            $table->text('json')->nullable();
            $table->integer('limit_100')->default(0);
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
        Schema::connection('crawler')->dropIfExists('fake_apartment_projects');
    }
}