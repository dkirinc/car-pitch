import { ListBox, ListBoxItem, Select } from '@heroui/react';
import { usePage } from '@inertiajs/react';
import { useMemo, useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import CarCard from '@/my-components/shared/CarCard';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBrand, ICar } from '@/types/models';

type Props = {
    cars: ICar[];
    brands: IBrand[];
};

type FilterChipProps = {
    label: string;
    active: boolean;
    onClick: () => void;
};

function FilterChip({ label, active, onClick }: FilterChipProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`border px-4 py-[7px] text-[0.78rem] tracking-[0.05em] uppercase transition-colors duration-200 ${
                active
                    ? 'border-gold bg-gold text-bg-base'
                    : 'border-border-default text-text-secondary hover:border-gold-border'
            }`}
        >
            {label}
        </button>
    );
}

type SortOption =
    | 'newest'
    | 'price_asc'
    | 'price_desc'
    | 'year_desc'
    | 'year_asc';

const sortComparators: Record<SortOption, (a: ICar, b: ICar) => number> = {
    newest: (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    price_asc: (a, b) => comparePrice(a, b, 'asc'),
    price_desc: (a, b) => comparePrice(a, b, 'desc'),
    year_desc: (a, b) => b.year - a.year,
    year_asc: (a, b) => a.year - b.year,
};

function comparePrice(a: ICar, b: ICar, direction: 'asc' | 'desc'): number {
    if (a.price === null && b.price === null) return 0;
    if (a.price === null) return 1;
    if (b.price === null) return -1;

    return direction === 'asc'
        ? Number(a.price) - Number(b.price)
        : Number(b.price) - Number(a.price);
}

type SortSelectProps = {
    value: SortOption;
    onChange: (value: SortOption) => void;
};

const sortItemClass =
    'cursor-pointer rounded-none px-4 py-2 text-[0.78rem] text-text-secondary outline-none data-[hovered=true]:bg-gold/10 data-[hovered=true]:text-gold data-[selected=true]:text-gold data-[focus-visible=true]:bg-gold/10';

function SortSelect({ value, onChange }: SortSelectProps) {
    const { t } = usePageText();

    const options: { id: SortOption; label: string }[] = [
        { id: 'newest', label: t('static', 'carsPage.sortNewest') },
        { id: 'price_asc', label: t('static', 'carsPage.sortPriceAsc') },
        { id: 'price_desc', label: t('static', 'carsPage.sortPriceDesc') },
        { id: 'year_desc', label: t('static', 'carsPage.sortYearDesc') },
        { id: 'year_asc', label: t('static', 'carsPage.sortYearAsc') },
    ];

    return (
        <Select
            selectedKey={value}
            onSelectionChange={(key) => onChange(key as SortOption)}
            aria-label={t('static', 'carsPage.sortLabel')}
        >
            <Select.Trigger className="rounded-none border border-border-default bg-bg-surface-raised px-3 py-[7px] text-[0.78rem] text-text-secondary shadow-none outline-none max-sm:!pr-3 max-sm:justify-center data-[focus-visible=true]:border-gold/55 data-[hovered=true]:border-gold-border data-[hovered=true]:bg-bg-surface-raised sm:px-4">
                <Select.Value className="hidden text-text-secondary sm:block" />
                <Select.Indicator className="text-text-muted max-sm:!static" />
            </Select.Trigger>
            <Select.Popover className="rounded-none border border-border-default bg-bg-surface shadow-none">
                <ListBox className="rounded-none p-1">
                    {options.map((option) => (
                        <ListBoxItem
                            key={option.id}
                            id={option.id}
                            textValue={option.label}
                            className={sortItemClass}
                        >
                            {option.label}
                        </ListBoxItem>
                    ))}
                </ListBox>
            </Select.Popover>
        </Select>
    );
}

export default function CarsListSection({ cars, brands }: Props) {
    const { t } = usePageText();
    const { url } = usePage();
    const [selectedBrandSlug, setSelectedBrandSlug] = useState<string | null>(
        () => {
            const brandSlug = new URLSearchParams(
                url.split('?')[1],
            ).get('brand');

            return brands.some((brand) => brand.slug === brandSlug)
                ? brandSlug
                : null;
        },
    );

    const [sortOption, setSortOption] = useState<SortOption>('newest');

    const filteredCars = useMemo(
        () =>
            selectedBrandSlug
                ? cars.filter((car) => car.brand.slug === selectedBrandSlug)
                : cars,
        [cars, selectedBrandSlug],
    );

    const sortedCars = useMemo(
        () => [...filteredCars].sort(sortComparators[sortOption]),
        [filteredCars, sortOption],
    );

    return (
        <section className="bg-bg-base pt-36 pb-20 md:pt-44">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <SectionEyebrow label={t('static', 'carsPage.eyebrow')} />
                <Heading level="h1" extendClass="mt-4">
                    {t('static', 'carsPage.title')}
                </Heading>
                <Paragraph
                    level="p1"
                    extendClass="mt-4 max-w-2xl text-text-secondary"
                >
                    {t('static', 'carsPage.subtitle')}
                </Paragraph>

                <div className="mt-12">
                    <Paragraph
                        level="p4"
                        extendClass="mb-4 text-text-muted uppercase tracking-[0.25em]"
                    >
                        {t('static', 'carsPage.filterLabel')}
                    </Paragraph>
                    <div className="flex flex-wrap gap-3">
                        <FilterChip
                            label={t('static', 'carsPage.allBrands')}
                            active={selectedBrandSlug === null}
                            onClick={() => setSelectedBrandSlug(null)}
                        />
                        {brands.map((brand) => (
                            <FilterChip
                                key={brand.id}
                                label={brand.name}
                                active={selectedBrandSlug === brand.slug}
                                onClick={() => setSelectedBrandSlug(brand.slug)}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-border-default pt-6 pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <Paragraph level="p3" extendClass="text-text-muted">
                        {t('static', 'carsPage.countPrefix')}{' '}
                        {filteredCars.length}{' '}
                        {t('static', 'carsPage.countSuffix')}
                    </Paragraph>
                    <div className="flex items-center gap-3 sm:ml-auto">
                        <Paragraph
                            level="p4"
                            extendClass="text-text-muted uppercase tracking-[0.25em]"
                        >
                            {t('static', 'carsPage.sortLabel')}
                        </Paragraph>
                        <SortSelect value={sortOption} onChange={setSortOption} />
                    </div>
                </div>

                {sortedCars.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {sortedCars.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                ) : (
                    <div className="flex h-64 items-center justify-center border border-border-default bg-bg-surface">
                        <Paragraph level="p2" extendClass="text-text-muted">
                            {t('static', 'carsPage.emptyState')}
                        </Paragraph>
                    </div>
                )}
            </div>
        </section>
    );
}
