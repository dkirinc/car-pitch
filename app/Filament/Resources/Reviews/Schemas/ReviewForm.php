<?php

namespace App\Filament\Resources\Reviews\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ReviewForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                TextInput::make('author_name')
                    ->required()
                    ->label('Ime i prezime'),
                TextInput::make('author_initials')
                    ->required()
                    ->maxLength(3)
                    ->label('Inicijali (npr. NM)'),
                TextInput::make('car_model')
                    ->required()
                    ->label('Model automobila')
                    ->columnSpanFull(),
                Select::make('rating')
                    ->options([1 => '1', 2 => '2', 3 => '3', 4 => '4', 5 => '5'])
                    ->required()
                    ->default(5)
                    ->label('Ocjena'),
                Toggle::make('is_published')
                    ->label('Objavljeno')
                    ->default(true),
                Textarea::make('content')
                    ->required()
                    ->rows(4)
                    ->label('Tekst recenzije')
                    ->columnSpanFull(),
            ]);
    }
}
