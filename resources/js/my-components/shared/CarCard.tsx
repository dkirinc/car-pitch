import { Link } from '@inertiajs/react';
import { CalendarDays, Fuel, Gauge, SlidersHorizontal } from 'lucide-react';
import React, { ReactNode } from 'react';
import { useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { CarInquiryModal } from '@/my-components/shared/CarInquiryModal';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { ICar } from '@/types/models';

type SpecItemProps = {
    icon: ReactNode;
    label: string;
};

function SpecItem({ icon, label }: SpecItemProps) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-gold/60">{icon}</span>
            <Paragraph level="p3" extendClass="text-text-muted capitalize">
                {label}
            </Paragraph>
        </div>
    );
}
export default function CarCard({ car }: { car: ICar }) {
    const { t } = usePageText();
    const isNew = car.status === 'novo';
    const [inquiryOpen, setInquiryOpen] = useState(false);

    return (
        <div className="group flex w-full flex-col border border-border-default bg-bg-surface transition-colors duration-200 hover:border-gold-border">
            <Link href={`/cars/${car.slug}`} className="flex flex-1 flex-col">
                <div className="relative h-48 overflow-hidden bg-bg-surface-raised">
                    {car.thumbnail_url ? (
                        <img
                            src={car.thumbnail_url}
                            alt={`${car.brand.name} ${car.model}`}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Paragraph level="p3" extendClass="text-text-muted">
                                {t('static', 'carSell.imagePlaceholder')}
                            </Paragraph>
                        </div>
                    )}
                    <span
                        className={`absolute top-3 left-3 px-2 py-0.5 text-[0.68rem] font-bold tracking-[0.1em] uppercase ${
                            isNew
                                ? 'bg-gold text-bg-base'
                                : 'border border-border-default bg-bg-surface-raised text-text-secondary'
                        }`}
                    >
                        {isNew
                            ? t('static', 'carSell.badgeNew')
                            : t('static', 'carSell.badgeAvailable')}
                    </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                    <div>
                        <Paragraph
                            level="p4"
                            extendClass="text-gold uppercase tracking-[0.15em] mb-1"
                        >
                            {car.brand.name}
                        </Paragraph>
                        <Heading level="h3">{car.model}</Heading>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <SpecItem
                            icon={<CalendarDays className="size-3.5" />}
                            label={String(car.year)}
                        />
                        <SpecItem
                            icon={<Fuel className="size-3.5" />}
                            label={car.fuel_type}
                        />
                        <SpecItem
                            icon={<SlidersHorizontal className="size-3.5" />}
                            label={car.transmission}
                        />
                        <SpecItem
                            icon={<Gauge className="size-3.5" />}
                            label={`${car.mileage.toLocaleString('hr-HR')} km`}
                        />
                    </div>

                    <Paragraph level="p2" extendClass="text-gold font-semibold">
                        {car.price
                            ? `${Number(car.price).toLocaleString('hr-HR')} €`
                            : t('static', 'carSell.priceOnRequest')}
                    </Paragraph>
                </div>
            </Link>

            <div className="px-5 pb-5">
                <Button
                    label={t('static', 'forms.submitCta')}
                    color="blue"
                    onClick={() => setInquiryOpen(true)}
                    extendClass="w-full justify-center"
                />
            </div>

            <CarInquiryModal
                car={car}
                isOpen={inquiryOpen}
                onOpenChange={setInquiryOpen}
            />
        </div>
    );
}
