<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class CreateWorkprocessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workprocess', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 510);
            $table->integer('type')->default(1);
            $table->text('excerpt_text')->nullable();
            $table->text('excerpt_html')->nullable();
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
        Schema::dropIfExists('workprocess');
    }
}
