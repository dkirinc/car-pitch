<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'type' => ['required', 'in:stock,import'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'car_id' => ['nullable', 'exists:cars,id'],
            'brand_preference' => ['nullable', 'string', 'max:255'],
            'body_type' => ['nullable', 'string', 'max:255'],
            'year_from' => ['nullable', 'integer'],
            'year_to' => ['nullable', 'integer'],
            'fuel_types' => ['nullable', 'array'],
            'fuel_types.*' => ['string'],
            'transmission' => ['nullable', 'string', 'max:255'],
            'budget_min' => ['nullable', 'integer'],
            'budget_max' => ['nullable', 'integer'],
            'notes' => ['nullable', 'string', 'max:2000'],
        ];
    }
}
