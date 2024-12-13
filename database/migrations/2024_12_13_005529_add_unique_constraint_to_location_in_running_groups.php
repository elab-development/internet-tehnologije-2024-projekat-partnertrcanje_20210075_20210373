<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // database/migrations/xxxx_xx_xx_xxxxxx_add_unique_constraint_to_location_in_running_groups.php

public function up()
{
    Schema::table('running_groups', function (Blueprint $table) {
        $table->string('location')->unique()->change(); // Dodavanje unique ograničenja
    });
}

public function down()
{
    Schema::table('running_groups', function (Blueprint $table) {
        $table->dropUnique(['location']); // Uklanjanje unique ograničenja
    });
}

};
