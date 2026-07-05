<?php

namespace App\Filament\Resources\Inquiries\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class InquiriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('type')
                    ->label('Vrsta')
                    ->badge()
                    ->sortable(),
                TextColumn::make('name')
                    ->label('Ime')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('E-mail')
                    ->searchable(),
                TextColumn::make('phone')
                    ->label('Telefon')
                    ->searchable(),
                TextColumn::make('car.model')
                    ->label('Vozilo')
                    ->default('—'),
                TextColumn::make('notes')
                    ->label('Poruka')
                    ->limit(60)
                    ->toggleable(),
                IconColumn::make('is_read')
                    ->label('Pročitano')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->label('Primljeno')
                    ->dateTime('d.m.Y H:i')
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('type')
                    ->label('Vrsta upita'),
                TernaryFilter::make('is_read')
                    ->label('Pročitano'),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
}
