<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // database/migrations/<timestamp>_create_group_user_table.php

public function up()
{
    Schema::create('group_user', function (Blueprint $table) {
        $table->id(); // automatski generiše 'id' kao primarni ključ
        $table->unsignedBigInteger('group_id'); // id od grupe za trčanje
        $table->unsignedBigInteger('user_id');  // id od korisnika
        $table->timestamps(); // vremenska oznaka kada je veza kreirana i ažurirana

        // Postavljanje spoljnog ključa za 'group_id' prema 'running_groups'
        $table->foreign('group_id')->references('id')->on('running_groups')->onDelete('cascade');

        // Postavljanje spoljnog ključa za 'user_id' prema 'users'
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });
}

public function down()
{
    Schema::dropIfExists('group_user'); // briše tabelu ako migracija bude vraćena
}

};
