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
        $table->unsignedBigInteger('group_id')->nullable(); // Dodajemo novu kolonu
        $table->foreign('group_id')->references('id')->on('running_groups')->onDelete('cascade'); // Spajamo sa tabelom 'running_groups'
    });
}

public function down()
{
    Schema::table('partner_requests', function (Blueprint $table) {
        $table->dropForeign(['group_id']); // Brisanje stranog ključa
        $table->dropColumn('group_id'); // Brisanje kolone
    });
}

};
