<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Root namespace za kontrolere.
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Mapirovanje ruta.
     */
    public function map()
    {
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

    /**
     * Web rute.
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }

    /**
     * API rute.
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api') // Ovaj prefiks će se primeniti na sve rute iz api.php
            ->middleware('api')
            ->namespace($this->namespace . '\API') // Dodato API namespace
            ->group(base_path('routes/api.php'));
    }
}
