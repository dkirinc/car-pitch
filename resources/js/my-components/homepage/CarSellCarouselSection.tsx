import { Link } from '@inertiajs/react';
import { CalendarDays, Fuel, Gauge, SlidersHorizontal } from 'lucide-react';
import { type ReactNode, useRef, useState } from 'react';

import { Button } from '@/my-components/shared/Button';
import { CarInquiryModal } from '@/my-components/shared/CarInquiryModal';
import { NavArrows } from '@/my-components/shared/NavArrows';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { ICar } from '@/types/models';

type Props = {
    cars: ICar[];
};

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

function CarCard({ car }: { car: ICar }) {
    const isNew = car.status === 'novo';
    const [inquiryOpen, setInquiryOpen] = useState(false);

    return (
        <div className="group flex w-72 flex-none flex-col border border-border-default bg-bg-surface transition-colors duration-200 hover:border-gold-border">
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
                            Slika vozila
                        </Paragraph>
                    </div>
                )}
                <span
                    className={`absolute left-3 top-3 px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] ${
                        isNew
                            ? 'bg-gold text-bg-base'
                            : 'border border-border-default bg-bg-surface-raised text-text-secondary'
                    }`}
                >
                    {isNew ? 'Novo' : 'Dostupno'}
                </span>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                    <Paragraph level="p4" extendClass="text-gold uppercase tracking-[0.15em] mb-1">
                        {car.brand.name}
                    </Paragraph>
                    <Heading level="h3">{car.model}</Heading>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <SpecItem icon={<CalendarDays className="size-3.5" />} label={String(car.year)} />
                    <SpecItem icon={<Fuel className="size-3.5" />} label={car.fuel_type} />
                    <SpecItem icon={<SlidersHorizontal className="size-3.5" />} label={car.transmission} />
                    <SpecItem icon={<Gauge className="size-3.5" />} label={`${car.mileage.toLocaleString('hr-HR')} km`} />
                </div>

                <Paragraph level="p2" extendClass="text-gold font-semibold">
                    {car.price ? `${Number(car.price).toLocaleString('hr-HR')} €` : 'Od upita'}
                </Paragraph>

                <Button
                    label="POŠALJI UPIT →"
                    color="blue"
                    onClick={() => setInquiryOpen(true)}
                    extendClass="mt-auto w-full justify-center"
                />
            </div>

            <CarInquiryModal car={car} isOpen={inquiryOpen} onOpenChange={setInquiryOpen} />
        </div>
    );
}

export default function CarSellCarouselSection({ cars }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        scrollRef.current?.scrollBy({ left: direction === 'right' ? 304 : -304, behavior: 'smooth' });
    };

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-10 flex items-end justify-between">
                    <SectionEyebrow label="Ponuda" title="Vozila u ponudi" />
                    <div className="flex items-center gap-4">
                        <NavArrows onPrev={() => scroll('left')} onNext={() => scroll('right')} />
                        <Link
                            href="/cars"
                            className="text-[0.78rem] font-bold uppercase tracking-[0.15em] text-gold underline-offset-4 hover:underline"
                        >
                            Pogledaj sva vozila →
                        </Link>
                    </div>
                </div>

                {cars.length > 0 ? (
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {cars.map((car) => (
                            <div key={car.id} style={{ scrollSnapAlign: 'start' }}>
                                <CarCard car={car} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex h-64 items-center justify-center border border-border-default bg-bg-surface">
                        <Paragraph level="p2" extendClass="text-text-muted">
                            Trenutno nema istaknutih vozila u ponudi.
                        </Paragraph>
                    </div>
                )}
            </div>
        </section>
    );
}
