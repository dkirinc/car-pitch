<?php

namespace App\Filament\Resources\BlogPosts\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class BlogPostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Sadržaj')
                    ->schema([
                        Select::make('car_id')
                            ->relationship('car', 'model')
                            ->searchable()
                            ->label('Povezano vozilo')
                            ->nullable(),
                        TextInput::make('title')
                            ->required()
                            ->label('Naslov')
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $state, callable $set) => $set('slug', Str::slug($state) . '-' . Str::lower(Str::random(6)))),
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->label('Slug'),
                        Textarea::make('excerpt')
                            ->required()
                            ->rows(2)
                            ->label('Kratki opis'),
                        Textarea::make('content')
                            ->required()
                            ->rows(8)
                            ->label('Sadržaj')
                            ->columnSpanFull(),
                    ]),

                Section::make('Objava')
                    ->columns(2)
                    ->schema([
                        Toggle::make('is_published')
                            ->label('Objavljeno')
                            ->default(false)
                            ->live(),
                        DateTimePicker::make('published_at')
                            ->label('Datum objave')
                            ->nullable(),
                    ]),

                Section::make('Naslovna fotografija')
                    ->schema([
                        SpatieMediaLibraryFileUpload::make('cover')
                            ->collection('cover')
                            ->image()
                            ->maxFiles(1)
                            ->label('Naslovna slika'),
                    ]),
            ]);
    }
}
