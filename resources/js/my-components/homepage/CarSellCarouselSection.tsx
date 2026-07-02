import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, CalendarDays, Fuel, Gauge, SlidersHorizontal } from 'lucide-react';
import { type ReactNode, useRef } from 'react';

import { Button } from '@/my-components/shared/Button';
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

    return (
        <div className="flex w-72 flex-none flex-col border border-border-default bg-bg-surface transition-colors duration-200 hover:border-gold-border">
            {/* Image area */}
            <div className="relative h-48 overflow-hidden bg-bg-surface-raised">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Paragraph level="p3" extendClass="text-text-muted">
                        Slika vozila
                    </Paragraph>
                </div>
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

            {/* Content */}
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
                        : 'Od upita'}
                </Paragraph>

                <Link href={`/cars/${car.slug}`} className="mt-auto block">
                    <Button
                        label="POŠALJI UPIT →"
                        color="blue"
                        onClick={() => {}}
                        extendClass="w-full justify-center"
                    />
                </Link>
            </div>
        </div>
    );
}

export default function CarSellCarouselSection({ cars }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction === 'right' ? 304 : -304, behavior: 'smooth' });
    };

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section header */}
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <Paragraph
                            level="p4"
                            extendClass="text-gold uppercase tracking-[0.25em] mb-3 flex items-center gap-3"
                        >
                            <span className="inline-block h-px w-6 bg-gold" />
                            Prodaja vozila
                        </Paragraph>
                        <Heading level="h2">Vozila u ponudi</Heading>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => scroll('left')}
                                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
                                aria-label="Prethodno"
                            >
                                <ArrowLeft className="size-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => scroll('right')}
                                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
                                aria-label="Sljedeće"
                            >
                                <ArrowRight className="size-4" />
                            </button>
                        </div>
                        <Link
                            href="/cars"
                            className="text-[0.78rem] font-bold uppercase tracking-[0.15em] text-gold underline-offset-4 hover:underline"
                        >
                            Pogledaj sva vozila →
                        </Link>
                    </div>
                </div>

                {/* Carousel */}
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
