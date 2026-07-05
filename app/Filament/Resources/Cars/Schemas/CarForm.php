<?php

namespace App\Filament\Resources\Cars\Schemas;

use App\Enums\BodyType;
use App\Enums\CarStatus;
use App\Enums\FuelType;
use App\Enums\Transmission;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class CarForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Osnovni podaci')
                    ->columns(2)
                    ->schema([
                        Select::make('brand_id')
                            ->relationship('brand', 'name')
                            ->required()
                            ->label('Marka'),
                        TextInput::make('model')
                            ->required()
                            ->label('Model')
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (string $state, callable $set, callable $get) {
                                $brand = \App\Models\Brand::find($get('brand_id'));
                                $slug = Str::slug(($brand?->slug ?? '') . '-' . $state) . '-' . Str::lower(Str::random(6));
                                $set('slug', $slug);
                            }),
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->label('Slug'),
                        TextInput::make('vin')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->label('VIN'),
                        TextInput::make('year')
                            ->required()
                            ->numeric()
                            ->minValue(1990)
                            ->maxValue(date('Y') + 1)
                            ->label('Godište'),
                        TextInput::make('mileage')
                            ->required()
                            ->numeric()
                            ->suffix('km')
                            ->label('Kilometraža'),
                        TextInput::make('price')
                            ->numeric()
                            ->prefix('€')
                            ->label('Cijena (prazno = od upita)'),
                        DatePicker::make('registration_date')
                            ->required()
                            ->label('Datum registracije'),
                    ]),

                Section::make('Tehničke specifikacije')
                    ->columns(2)
                    ->schema([
                        Select::make('body_type')
                            ->options(BodyType::class)
                            ->required()
                            ->label('Tip karoserije'),
                        Select::make('fuel_type')
                            ->options(FuelType::class)
                            ->required()
                            ->label('Gorivo'),
                        Select::make('transmission')
                            ->options(Transmission::class)
                            ->required()
                            ->label('Mjenjač'),
                        TextInput::make('engine')
                            ->required()
                            ->label('Motor'),
                        TextInput::make('power')
                            ->required()
                            ->numeric()
                            ->suffix('KS')
                            ->label('Snaga'),
                        TextInput::make('exterior_color')
                            ->required()
                            ->label('Boja karoserije'),
                        TextInput::make('interior_color')
                            ->required()
                            ->label('Unutrašnjost'),
                        TextInput::make('doors')
                            ->required()
                            ->numeric()
                            ->label('Broj vrata'),
                        TextInput::make('seats')
                            ->required()
                            ->numeric()
                            ->label('Broj sjedala'),
                    ]),

                Section::make('Opis i oprema')
                    ->schema([
                        Textarea::make('description')
                            ->required()
                            ->rows(4)
                            ->label('Opis vozila')
                            ->columnSpanFull(),
                        TagsInput::make('equipment')
                            ->label('Oprema')
                            ->placeholder('Dodaj stavku opreme')
                            ->columnSpanFull(),
                        TextInput::make('video_url')
                            ->url()
                            ->label('Video URL (YouTube)'),
                    ]),

                Section::make('Status i vidljivost')
                    ->columns(2)
                    ->schema([
                        Select::make('status')
                            ->options(CarStatus::class)
                            ->default('dostupno')
                            ->required()
                            ->label('Status'),
                        Toggle::make('is_featured')
                            ->label('Istaknuto na naslovnici')
                            ->default(false),
                    ]),

                Section::make('Fotografije')
                    ->schema([
                        SpatieMediaLibraryFileUpload::make('images')
                            ->collection('images')
                            ->multiple()
                            ->reorderable()
                            ->image()
                            ->maxFiles(20)
                            ->label('Fotografije vozila'),
                    ]),
            ]);
    }
}
