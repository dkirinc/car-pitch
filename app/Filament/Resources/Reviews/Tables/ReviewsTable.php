<?php

namespace App\Filament\Resources\Reviews\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class ReviewsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('author_name')
                    ->label('Autor')
                    ->searchable(),
                TextColumn::make('car_model')
                    ->label('Vozilo')
                    ->searchable(),
                TextColumn::make('rating')
                    ->label('Ocjena')
                    ->sortable(),
                TextColumn::make('content')
                    ->label('Recenzija')
                    ->limit(60),
                IconColumn::make('is_published')
                    ->label('Objavljeno')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->label('Dodano')
                    ->dateTime('d.m.Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                TernaryFilter::make('is_published')
                    ->label('Objavljeno'),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
