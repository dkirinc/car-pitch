import { FieldError, Input, TextArea, TextField } from '@heroui/react';
import { useForm, usePage } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { type ReactNode, useEffect } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBrand } from '@/types/models';

type Props = {
    brands: IBrand[];
};

type InquiryTypeValue = 'stock' | 'import';

type FormData = {
    type: InquiryTypeValue;
    name: string;
    phone: string;
    email: string;
    brand_preference: string;
    body_type: string;
    year_from: number | null;
    year_to: number | null;
    fuel_types: string[];
    transmission: string;
    budget_min: number | null;
    budget_max: number | null;
    notes: string;
};

type SharedProps = {
    flash: { contact_success?: boolean };
};

const YEAR_RANGES = [
    { id: '2020-2025', label: '2020 – 2025', from: 2020, to: 2025 },
    { id: '2017-2019', label: '2017 – 2019', from: 2017, to: 2019 },
    { id: '2014-2016', label: '2014 – 2016', from: 2014, to: 2016 },
    { id: '2010-2013', label: '2010 – 2013', from: 2010, to: 2013 },
    { id: 'pre-2010', label: 'Starije od 2010', from: null, to: 2009 },
];

const FUEL_TYPES = [
    { value: 'benzin', label: 'Benzin' },
    { value: 'diesel', label: 'Diesel' },
    { value: 'hibrid', label: 'Hibrid' },
    { value: 'plug_in_hibrid', label: 'Plug-in hibrid' },
    { value: 'elektricni', label: 'Električni' },
    { value: 'plin', label: 'Plin' },
];

const TRANSMISSIONS = [
    { value: 'automatski', label: 'Automatski' },
    { value: 'rucni', label: 'Ručni' },
    { value: 'poluautomatski', label: 'Poluautomatski' },
];

const BUDGET_RANGES = [
    { id: 'lt-10k', label: 'Do 10.000 €', min: null, max: 10000 },
    { id: '10-20k', label: '10.000 – 20.000 €', min: 10000, max: 20000 },
    { id: '20-35k', label: '20.000 – 35.000 €', min: 20000, max: 35000 },
    { id: '35-55k', label: '35.000 – 55.000 €', min: 35000, max: 55000 },
    { id: '55-80k', label: '55.000 – 80.000 €', min: 55000, max: 80000 },
    { id: 'gt-80k', label: 'Iznad 80.000 €', min: 80000, max: null },
];

const BODY_TYPES = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'karavan', label: 'Karavan' },
    { value: 'coupe', label: 'Coupe' },
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'kabriolet', label: 'Kabriolet' },
    { value: 'pickup', label: 'Pickup' },
    { value: 'kombi', label: 'Kombi' },
];

const fieldClass =
    'w-full bg-bg-surface-raised border border-border-default px-4 py-3 text-[0.9rem] text-text-primary placeholder:text-text-muted outline-none focus:border-gold/55 transition-colors duration-200 rounded-none';

function FieldLabel({ children }: { children: ReactNode }) {
    return (
        <Paragraph
            level="p4"
            extendClass="text-text-muted uppercase tracking-[0.15em] mb-2"
        >
            {children}
        </Paragraph>
    );
}

function Chip({
    label,
    active,
    onClick,
}: {
    label: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`border px-4 py-[7px] text-[0.78rem] transition-colors duration-200 ${
                active
                    ? 'border-gold bg-gold text-bg-base'
                    : 'border-border-default text-text-secondary hover:border-gold-border'
            }`}
        >
            {label}
        </button>
    );
}

function SelectField({
    value,
    onChange,
    placeholder,
    options,
}: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    options: { value: string; label: string }[];
}) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`${fieldClass} appearance-none pr-10 ${value === '' ? 'text-text-muted' : ''}`}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
        </div>
    );
}

export default function InquiryForm({ brands }: Props) {
    const { t } = usePageText();
    const { flash } = usePage<SharedProps>().props;

    const { data, setData, post, processing, reset } = useForm<FormData>({
        type: 'stock',
        name: '',
        phone: '',
        email: '',
        brand_preference: '',
        body_type: '',
        year_from: null,
        year_to: null,
        fuel_types: [],
        transmission: '',
        budget_min: null,
        budget_max: null,
        notes: '',
    });

    useEffect(() => {
        if (flash?.contact_success) reset();
    }, [flash?.contact_success]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact');
    };

    const toggleFuelType = (value: string) => {
        setData(
            'fuel_types',
            data.fuel_types.includes(value)
                ? data.fuel_types.filter((v) => v !== value)
                : [...data.fuel_types, value],
        );
    };

    return (
        <div>
            {flash?.contact_success && (
                <div className="mb-6 border border-gold-border bg-gold-subtle px-5 py-4">
                    <Paragraph level="p2" extendClass="text-gold">
                        {t('static', 'contactPage.successMessage')}
                    </Paragraph>
                </div>
            )}

            {/* Inquiry type tabs */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                    type="button"
                    onClick={() => setData('type', 'stock')}
                    className={`flex flex-col gap-1 border px-5 py-4 text-left transition-colors duration-200 ${
                        data.type === 'stock'
                            ? 'border-gold-border bg-gold-subtle'
                            : 'border-border-default hover:border-gold-border'
                    }`}
                >
                    <Paragraph
                        level="p3"
                        extendClass={`font-bold uppercase tracking-[0.1em] ${data.type === 'stock' ? 'text-gold' : 'text-text-primary'}`}
                    >
                        {t('static', 'contactPage.tabStockLabel')}
                    </Paragraph>
                    <Paragraph level="p4" extendClass="text-text-muted">
                        {t('static', 'contactPage.tabStockDescription')}
                    </Paragraph>
                </button>
                <button
                    type="button"
                    onClick={() => setData('type', 'import')}
                    className={`flex flex-col gap-1 border px-5 py-4 text-left transition-colors duration-200 ${
                        data.type === 'import'
                            ? 'border-gold-border bg-gold-subtle'
                            : 'border-border-default hover:border-gold-border'
                    }`}
                >
                    <Paragraph
                        level="p3"
                        extendClass={`font-bold uppercase tracking-[0.1em] ${data.type === 'import' ? 'text-gold' : 'text-text-primary'}`}
                    >
                        {t('static', 'contactPage.tabImportLabel')}
                    </Paragraph>
                    <Paragraph level="p4" extendClass="text-text-muted">
                        {t('static', 'contactPage.tabImportDescription')}
                    </Paragraph>
                </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Personal info */}
                <div className="flex flex-col gap-4">
                    <Heading level="h4">
                        {t('static', 'contactPage.personalInfoTitle')}
                    </Heading>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <FieldLabel>
                                {t('static', 'forms.namePlaceholder')}
                            </FieldLabel>
                            <TextField
                                value={data.name}
                                onChange={(v) => setData('name', v)}
                            >
                                <Input
                                    type="text"
                                    placeholder={t('static', 'contactPage.namePlaceholder')}
                                    className={fieldClass}
                                />
                                <FieldError className="mt-1 text-[0.72rem] text-destructive" />
                            </TextField>
                        </div>

                        <div>
                            <FieldLabel>
                                {t('static', 'forms.phonePlaceholder')}
                            </FieldLabel>
                            <TextField
                                value={data.phone}
                                onChange={(v) => setData('phone', v)}
                            >
                                <Input
                                    type="tel"
                                    placeholder={t('static', 'contactPage.phonePlaceholder')}
                                    className={fieldClass}
                                />
                                <FieldError className="mt-1 text-[0.72rem] text-destructive" />
                            </TextField>
                        </div>
                    </div>

                    <div>
                        <FieldLabel>
                            {t('static', 'forms.emailPlaceholder')}
                        </FieldLabel>
                        <TextField
                            value={data.email}
                            onChange={(v) => setData('email', v)}
                            isRequired
                        >
                            <Input
                                type="email"
                                placeholder={t('static', 'contactPage.emailPlaceholder')}
                                className={fieldClass}
                            />
                            <FieldError className="mt-1 text-[0.72rem] text-destructive" />
                        </TextField>
                    </div>
                </div>

                {/* Vehicle preferences */}
                <div className="flex flex-col gap-5">
                    <Heading level="h4">
                        {t('static', 'contactPage.vehiclePrefsTitle')}
                    </Heading>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <FieldLabel>
                                {t('static', 'contactPage.brandLabel')}
                            </FieldLabel>
                            <SelectField
                                value={data.brand_preference}
                                onChange={(v) => setData('brand_preference', v)}
                                placeholder="—"
                                options={brands.map((brand) => ({
                                    value: brand.name,
                                    label: brand.name,
                                }))}
                            />
                        </div>

                        <div>
                            <FieldLabel>
                                {t('static', 'contactPage.bodyTypeLabel')}
                            </FieldLabel>
                            <SelectField
                                value={data.body_type}
                                onChange={(v) => setData('body_type', v)}
                                placeholder="—"
                                options={BODY_TYPES}
                            />
                        </div>
                    </div>

                    <div>
                        <FieldLabel>
                            {t('static', 'contactPage.yearLabel')}
                        </FieldLabel>
                        <div className="flex flex-wrap gap-2">
                            {YEAR_RANGES.map((range) => (
                                <Chip
                                    key={range.id}
                                    label={range.label}
                                    active={
                                        data.year_from === range.from &&
                                        data.year_to === range.to
                                    }
                                    onClick={() =>
                                        setData({
                                            ...data,
                                            year_from: range.from,
                                            year_to: range.to,
                                        })
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <FieldLabel>
                            {t('static', 'contactPage.fuelLabel')}
                        </FieldLabel>
                        <div className="flex flex-wrap gap-2">
                            {FUEL_TYPES.map((fuel) => (
                                <Chip
                                    key={fuel.value}
                                    label={fuel.label}
                                    active={data.fuel_types.includes(fuel.value)}
                                    onClick={() => toggleFuelType(fuel.value)}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <FieldLabel>
                            {t('static', 'contactPage.transmissionLabel')}
                        </FieldLabel>
                        <div className="flex flex-wrap gap-2">
                            {TRANSMISSIONS.map((option) => (
                                <Chip
                                    key={option.value}
                                    label={option.label}
                                    active={data.transmission === option.value}
                                    onClick={() =>
                                        setData('transmission', option.value)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <FieldLabel>
                            {t('static', 'contactPage.budgetLabel')}
                        </FieldLabel>
                        <div className="flex flex-wrap gap-2">
                            {BUDGET_RANGES.map((range) => (
                                <Chip
                                    key={range.id}
                                    label={range.label}
                                    active={
                                        data.budget_min === range.min &&
                                        data.budget_max === range.max
                                    }
                                    onClick={() =>
                                        setData({
                                            ...data,
                                            budget_min: range.min,
                                            budget_max: range.max,
                                        })
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <FieldLabel>
                            {t('static', 'contactPage.notesLabel')}
                        </FieldLabel>
                        <TextField
                            value={data.notes}
                            onChange={(v) => setData('notes', v)}
                        >
                            <TextArea
                                placeholder={t('static', 'contactPage.notesPlaceholder')}
                                rows={4}
                                className={`${fieldClass} resize-none`}
                            />
                            <FieldError className="mt-1 text-[0.72rem] text-destructive" />
                        </TextField>
                    </div>
                </div>

                <div>
                    <Button
                        type="submit"
                        color="orange"
                        label={
                            processing
                                ? t('static', 'forms.sendingCta')
                                : t('static', 'forms.submitCta')
                        }
                        disabled={processing}
                        onClick={() => {}}
                        extendClass="uppercase"
                    />
                </div>
            </form>
        </div>
    );
}
