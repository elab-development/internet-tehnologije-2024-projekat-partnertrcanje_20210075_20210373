<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plan_trkes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('trkac_id');
            $table->dateTime('vreme');
            $table->string('mesto');
            $table->date('datum');
            $table->decimal('planirani_km', 5, 2);
            $table->timestamps();
            
            $table->foreign('trkac_id')->references('id')->on('trkacs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_trkes');
    }
};
