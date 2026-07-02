<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->foreignId('brand_id')->constrained()->cascadeOnDelete();
            $table->string('model');
            $table->string('slug')->unique();
            $table->unsignedSmallInteger('year');
            $table->string('body_type');
            $table->string('fuel_type');
            $table->string('transmission');
            $table->unsignedInteger('mileage');
            $table->decimal('price', 10, 2)->nullable();
            $table->text('description');
            $table->string('video_url')->nullable();
            $table->string('engine');
            $table->unsignedSmallInteger('power');
            $table->string('exterior_color');
            $table->string('interior_color');
            $table->unsignedTinyInteger('doors');
            $table->unsignedTinyInteger('seats');
            $table->date('registration_date');
            $table->string('vin')->unique();
            $table->json('equipment');
            $table->string('status')->default('dostupno');
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
