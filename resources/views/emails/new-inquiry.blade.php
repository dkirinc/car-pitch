@php
    use App\Enums\FuelType;
    use App\Enums\Transmission;

    $fuelLabels = collect($inquiry->fuel_types ?? [])
        ->map(fn (string $value) => FuelType::tryFrom($value)?->label() ?? $value)
        ->implode(', ');

    $transmissionLabel = Transmission::tryFrom($inquiry->transmission ?? '')?->label();

    $yearRange = $inquiry->year_from || $inquiry->year_to
        ? trim(($inquiry->year_from ?? '') . ' - ' . ($inquiry->year_to ?? ''), ' -')
        : null;

    $budgetRange = $inquiry->budget_min || $inquiry->budget_max
        ? trim(($inquiry->budget_min ? number_format($inquiry->budget_min, 0, ',', '.') . ' €' : '') . ' - ' . ($inquiry->budget_max ? number_format($inquiry->budget_max, 0, ',', '.') . ' €' : ''), ' -')
        : null;
@endphp

<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1a1a1a; max-width: 560px;">
    <h2 style="margin-bottom: 4px;">Novi upit — {{ $inquiry->type->label() }}</h2>
    <p style="color: #666; margin-top: 0;">Zaprimljen putem web stranice Auto Lider.</p>

    <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
            <td style="padding: 6px 0; color: #666; width: 160px;">Ime i prezime</td>
            <td style="padding: 6px 0;">{{ $inquiry->name }}</td>
        </tr>
        <tr>
            <td style="padding: 6px 0; color: #666;">E-mail</td>
            <td style="padding: 6px 0;">{{ $inquiry->email }}</td>
        </tr>
        <tr>
            <td style="padding: 6px 0; color: #666;">Telefon</td>
            <td style="padding: 6px 0;">{{ $inquiry->phone }}</td>
        </tr>
        @if ($inquiry->car)
            <tr>
                <td style="padding: 6px 0; color: #666;">Vozilo</td>
                <td style="padding: 6px 0;">{{ $inquiry->car->brand->name }} {{ $inquiry->car->model }}</td>
            </tr>
        @endif
        @if ($inquiry->brand_preference)
            <tr>
                <td style="padding: 6px 0; color: #666;">Marka</td>
                <td style="padding: 6px 0;">{{ $inquiry->brand_preference }}</td>
            </tr>
        @endif
        @if ($inquiry->body_type)
            <tr>
                <td style="padding: 6px 0; color: #666;">Tip karoserije</td>
                <td style="padding: 6px 0;">{{ $inquiry->body_type }}</td>
            </tr>
        @endif
        @if ($yearRange)
            <tr>
                <td style="padding: 6px 0; color: #666;">Godište</td>
                <td style="padding: 6px 0;">{{ $yearRange }}</td>
            </tr>
        @endif
        @if ($fuelLabels)
            <tr>
                <td style="padding: 6px 0; color: #666;">Gorivo</td>
                <td style="padding: 6px 0;">{{ $fuelLabels }}</td>
            </tr>
        @endif
        @if ($transmissionLabel)
            <tr>
                <td style="padding: 6px 0; color: #666;">Mjenjač</td>
                <td style="padding: 6px 0;">{{ $transmissionLabel }}</td>
            </tr>
        @endif
        @if ($budgetRange)
            <tr>
                <td style="padding: 6px 0; color: #666;">Proračun</td>
                <td style="padding: 6px 0;">{{ $budgetRange }}</td>
            </tr>
        @endif
    </table>

    @if ($inquiry->notes)
        <p style="color: #666; margin-top: 20px; margin-bottom: 4px;">Napomene</p>
        <p style="margin-top: 0; white-space: pre-line;">{{ $inquiry->notes }}</p>
    @endif
</div>
