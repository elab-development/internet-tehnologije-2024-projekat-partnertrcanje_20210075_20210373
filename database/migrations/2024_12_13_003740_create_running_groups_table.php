<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // database/migrations/xxxx_xx_xx_xxxxxx_create_running_groups_table.php

public function up()
{
    Schema::create('running_groups', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->unsignedBigInteger('creator_id');
        $table->text('description')->nullable();
        $table->timestamps();

        $table->foreign('creator_id')->references('id')->on('users')->onDelete('cascade');
    });
}

public function down()
{
    Schema::dropIfExists('running_groups');
}

};
