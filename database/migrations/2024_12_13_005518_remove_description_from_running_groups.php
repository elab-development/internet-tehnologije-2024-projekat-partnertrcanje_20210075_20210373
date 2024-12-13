<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   // database/migrations/xxxx_xx_xx_xxxxxx_remove_description_from_running_groups.php

public function up()
{
    Schema::table('running_groups', function (Blueprint $table) {
        $table->dropColumn('description'); // Uklanjanje kolone description
    });
}

public function down()
{
    Schema::table('running_groups', function (Blueprint $table) {
        $table->text('description')->nullable(); // Ponovno dodavanje kolone description
    });
}

};
