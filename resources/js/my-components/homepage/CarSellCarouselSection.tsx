import { Link } from '@inertiajs/react';
import { useRef } from 'react';

import { usePageText } from '@/hooks/usePageText';
import CarCard from '@/my-components/shared/CarCard';
import { NavArrows } from '@/my-components/shared/NavArrows';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { ICar } from '@/types/models';

type Props = {
    cars: ICar[];
};

export default function CarSellCarouselSection({ cars }: Props) {
    const { t } = usePageText();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        scrollRef.current?.scrollBy({
            left: direction === 'right' ? 304 : -304,
            behavior: 'smooth',
        });
    };

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-10 flex items-end justify-between">
                    <SectionEyebrow
                        label={t('static', 'carSell.eyebrow')}
                        title={t('static', 'carSell.title')}
                    />
                    <div className="flex items-center gap-4">
                        <NavArrows
                            onPrev={() => scroll('left')}
                            onNext={() => scroll('right')}
                        />
                        <Link
                            href="/cars"
                            className="text-[0.78rem] font-bold tracking-[0.15em] text-gold uppercase underline-offset-4 hover:underline"
                        >
                            {t('static', 'carSell.viewAllCta')}
                        </Link>
                    </div>
                </div>

                {cars.length > 0 ? (
                    <div
                        ref={scrollRef}
                        className="flex [scrollbar-width:none] gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {cars.map((car) => (
                            <div
                                key={car.id}
                                className="w-72 flex-none"
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                <CarCard car={car} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex h-64 items-center justify-center border border-border-default bg-bg-surface">
                        <Paragraph level="p2" extendClass="text-text-muted">
                            {t('static', 'carSell.emptyState')}
                        </Paragraph>
                    </div>
                )}
            </div>
        </section>
    );
}
