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

export default function CarsListSection({ cars, brands }: Props) {
    const { t } = usePageText();
    const [selectedBrandSlug, setSelectedBrandSlug] = useState<string | null>(
        null,
    );

    const filteredCars = useMemo(
        () =>
            selectedBrandSlug
                ? cars.filter((car) => car.brand.slug === selectedBrandSlug)
                : cars,
        [cars, selectedBrandSlug],
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

                <div className="mt-8 border-t border-border-default pt-6 pb-6">
                    <Paragraph level="p3" extendClass="text-text-muted">
                        {t('static', 'carsPage.countPrefix')}{' '}
                        {filteredCars.length}{' '}
                        {t('static', 'carsPage.countSuffix')}
                    </Paragraph>
                </div>

                {filteredCars.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredCars.map((car) => (
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
