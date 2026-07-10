<?php

namespace App\Http\Controllers;

use App\Actions\StoreContactInquiry;
use App\Http\Requests\StoreContactRequest;
use App\Models\Brand;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        $brands = Brand::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'slug']);

        return Inertia::render('contact', [
            'brands' => $brands,
        ]);
    }

    public function store(StoreContactRequest $request, StoreContactInquiry $action): RedirectResponse
    {
        $action->handle($request->validated());

        return back()->with('contact_success', true);
    }
}
