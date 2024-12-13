<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // database/migrations/xxxx_xx_xx_xxxxxx_add_location_to_running_groups.php

public function up()
{
    Schema::table('running_groups', function (Blueprint $table) {
        $table->string('location')->nullable(); // Dodavanje kolone location
    });
}

public function down()
{
    Schema::table('running_groups', function (Blueprint $table) {
        $table->dropColumn('location'); // Uklanjanje kolone location
    });
}

};
