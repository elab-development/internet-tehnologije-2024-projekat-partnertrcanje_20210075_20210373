<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relacija sa korisnikom
            $table->dateTime('activity_date');
            $table->float('distance'); // U kilometrima
            $table->string('activity_type'); // Tip aktivnosti, npr. trčanje
            $table->integer('calories_burned'); // Sagorele kalorije
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('activity_logs');
    }
};
