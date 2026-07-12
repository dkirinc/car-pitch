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

    $rows = array_filter([
        'Ime i prezime' => $inquiry->name,
        'E-mail' => $inquiry->email,
        'Telefon' => $inquiry->phone,
        'Vozilo' => $inquiry->car ? "{$inquiry->car->brand->name} {$inquiry->car->model}" : null,
        'Marka' => $inquiry->brand_preference,
        'Tip karoserije' => $inquiry->body_type,
        'Godište' => $yearRange,
        'Gorivo' => $fuelLabels ?: null,
        'Mjenjač' => $transmissionLabel,
        'Proračun' => $budgetRange,
    ]);
@endphp

<div style="background-color: #f2efe9; padding: 32px 16px; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e1d8;">
        <tr>
            <td style="background-color: #0c0c0e; padding: 28px 40px;">
                <div style="color: #c9a96e; font-size: 20px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
                    Auto Lider
                </div>
                <div style="color: #f0ede8; font-size: 14px; margin-top: 6px;">
                    Novi upit s web stranice
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 32px 40px;">
                <div style="display: inline-block; background-color: #f5efe3; color: #8a6c2e; font-size: 12px; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase; padding: 6px 12px; margin-bottom: 20px;">
                    {{ $inquiry->type->label() }}
                </div>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                    @foreach ($rows as $label => $value)
                        <tr>
                            <td style="padding: 10px 0; width: 150px; color: #8a857c; vertical-align: top; border-bottom: 1px solid #f0eee8;">
                                {{ $label }}
                            </td>
                            <td style="padding: 10px 0; color: #1a1a1a; vertical-align: top; border-bottom: 1px solid #f0eee8;">
                                {{ $value }}
                            </td>
                        </tr>
                    @endforeach
                </table>

                @if ($inquiry->notes)
                    <div style="margin-top: 24px;">
                        <div style="color: #8a857c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            Napomene
                        </div>
                        <div style="font-size: 14px; color: #1a1a1a; white-space: pre-line;">
                            {{ $inquiry->notes }}
                        </div>
                    </div>
                @endif
            </td>
        </tr>
        <tr>
            <td style="background-color: #f7f5f0; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e1d8;">
                <div style="color: #9a958c; font-size: 12px;">
                    Auto Lider &middot; Otok Krk, Hrvatska
                </div>
            </td>
        </tr>
    </table>
</div>
