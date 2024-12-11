<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('running_groups', function (Blueprint $table) {
            $table->id();
            $table->string('ime');
            $table->unsignedBigInteger('creator_id');
            $table->text('opis')->nullable();
            $table->timestamps();
    
            $table->foreign('creator_id')->references('id')->on('users')->onDelete('cascade');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('running_groups');
    }
    
};
