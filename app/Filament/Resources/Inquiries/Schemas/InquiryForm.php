<?php

namespace App\Filament\Resources\Inquiries\Schemas;

use App\Enums\InquiryType;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class InquiryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Kontakt podaci')
                    ->columns(2)
                    ->schema([
                        Select::make('type')
                            ->options(InquiryType::class)
                            ->required()
                            ->label('Vrsta upita'),
                        Select::make('car_id')
                            ->relationship('car', 'model')
                            ->searchable()
                            ->nullable()
                            ->label('Vozilo iz ponude'),
                        TextInput::make('name')
                            ->required()
                            ->label('Ime i prezime'),
                        TextInput::make('email')
                            ->email()
                            ->required()
                            ->label('E-mail'),
                        TextInput::make('phone')
                            ->tel()
                            ->required()
                            ->label('Telefon'),
                        Toggle::make('is_read')
                            ->label('Pročitano'),
                    ]),

                Section::make('Napomene')
                    ->schema([
                        Textarea::make('notes')
                            ->rows(4)
                            ->label('Poruka / napomene')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
