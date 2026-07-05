<?php

namespace App\Http\Controllers;

use App\Actions\StoreContactInquiry;
use App\Http\Requests\StoreContactRequest;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request, StoreContactInquiry $action): RedirectResponse
    {
        $action->handle($request->validated());

        return back()->with('contact_success', true);
    }
}
