import { useEffect, useRef, useState } from 'react';

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
                        const progress = Math.min((timestamp - start) / duration, 1);
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
        <div ref={ref} className="flex flex-col items-center gap-3 py-12 px-8">
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
    return (
        <div>
            {/* Stats bar */}
            <section className="border-y border-border-default bg-bg-surface">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="grid grid-cols-1 divide-y divide-border-default md:grid-cols-3 md:divide-x md:divide-y-0">
                        <StatCounter
                            value={stats.cars_sold}
                            label="Prodanih automobila"
                            suffix="+"
                        />
                        <StatCounter
                            value={stats.brands_count}
                            label="Premium brendova"
                        />
                        <StatCounter
                            value={stats.avg_delivery_days}
                            label="Prosječna isporuka (dana)"
                        />
                    </div>
                </div>
            </section>

            {/* Brands strip */}
            <section className="border-b border-border-default bg-bg-base py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <Paragraph
                        level="p4"
                        extendClass="text-text-muted uppercase tracking-[0.25em] text-center mb-8"
                    >
                        Brendovi u ponudi
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
