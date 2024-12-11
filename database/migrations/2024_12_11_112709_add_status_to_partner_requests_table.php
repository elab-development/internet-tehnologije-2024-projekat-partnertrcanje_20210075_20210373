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
        Schema::table('partner_requests', function (Blueprint $table) {
            $table->string('status')->default('cekanje'); // Dodajemo status kolonu sa default vrednošću
        });
    }
    
    public function down()
    {
        Schema::table('partner_requests', function (Blueprint $table) {
            $table->dropColumn('status'); // Brisanje status kolone
        });
    }
    
};
