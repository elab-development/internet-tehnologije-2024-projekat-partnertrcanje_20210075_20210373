<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   // database/migrations/xxxx_xx_xx_xxxxxx_change_activity_level_in_users.php

public function up()
{
    Schema::table('users', function (Blueprint $table) {
        $table->enum('activity_level', ['beginner', 'intermediate', 'advanced'])->change(); // Promena tipa kolone na enum
    });
}

public function down()
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('activity_level')->change(); // Vraćanje na originalni tip string
    });
}

};
