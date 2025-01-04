<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('partner_requests', function (Blueprint $table) {
            $table->unsignedBigInteger('partner_id')->nullable()->after('user_id'); // Dodavanje kolone partner_id
            $table->foreign('partner_id')->references('id')->on('partners')->onDelete('cascade'); // Spoljni ključ ka tabeli partners
        });
    }

    public function down()
    {
        Schema::table('partner_requests', function (Blueprint $table) {
            $table->dropForeign(['partner_id']); // Uklanjanje spoljnog ključa
            $table->dropColumn('partner_id'); // Uklanjanje kolone partner_id
        });
    }
};

