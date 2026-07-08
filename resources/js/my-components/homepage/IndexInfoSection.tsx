import { useEffect, useRef, useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBrand, IStats } from '@/types/models';

type Props = {
    stats: IStats;
    brands: IBrand[];
};

type StatCounterProps = {
    value: number;
    label: string;
    suffix?: string;
};

function StatCounter({ value, label, suffix = '' }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    observer.disconnect();

                    const duration = 1800;
                    let start: number | null = null;

                    const step = (timestamp: number) => {
                        if (!start) start = timestamp;
                        const progress = Math.min(
                            (timestamp - start) / duration,
                            1,
                        );
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(step);
                    };

                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-3 px-8 py-12">
            <Heading level="h0" extendClass="text-gold tabular-nums">
                {count}
                {suffix}
            </Heading>
            <Paragraph level="p2" extendClass="text-text-secondary text-center">
                {label}
            </Paragraph>
        </div>
    );
}

export default function IndexInfoSection({ stats, brands }: Props) {
    const { t } = usePageText();

    return (
        <div className="flex flex-col gap-30 bg-bg-surface">
            {/* Stats bar */}
            <section className="border-t border-border-default">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <StatCounter
                            value={stats.cars_sold}
                            label={t('static', 'stats.carsSold')}
                            suffix="+"
                        />
                        <StatCounter
                            value={stats.brands_count}
                            label={t('static', 'stats.brandsCount')}
                        />
                        <StatCounter
                            value={stats.avg_delivery_days}
                            label={t('static', 'stats.avgDelivery')}
                        />
                    </div>
                </div>
            </section>

            {/* Brands strip */}
            <section className="border-b border-border-default py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <Paragraph
                        level="p4"
                        extendClass="text-text-muted uppercase tracking-[0.25em] text-center mb-8"
                    >
                        {t('static', 'stats.brandsStripLabel')}
                    </Paragraph>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
                        {brands.map((brand) => (
                            <span
                                key={brand.id}
                                className="cursor-default font-display text-[1.15rem] font-semibold text-text-secondary transition-colors duration-200 hover:text-gold"
                            >
                                {brand.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
