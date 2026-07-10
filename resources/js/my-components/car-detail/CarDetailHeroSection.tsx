import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { ICarDetail } from '@/types/models';

type Props = {
    car: ICarDetail;
};

export default function CarDetailHeroSection({ car }: Props) {
    const { t } = usePageText();

    return (
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-14">
            {car.thumbnail_url ? (
                <img
                    src={car.thumbnail_url}
                    alt={`${car.brand.name} ${car.model}`}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            ) : (
                <div className="absolute inset-0 bg-bg-surface-raised" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/70 to-bg-base/30" />
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,12,14,0.9)_35%,rgba(12,12,14,0.2)_100%)]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
                <Link
                    href="/cars"
                    className="mb-8 inline-flex items-center gap-2 border border-border-default bg-bg-base/40 px-4 py-2 text-[0.78rem] font-bold tracking-[0.1em] text-text-secondary uppercase backdrop-blur-sm transition-colors duration-200 hover:border-gold-border hover:text-gold"
                >
                    <ArrowLeft className="size-3.5" />
                    {t('static', 'carDetail.backCta')}
                </Link>

                <Paragraph
                    level="p3"
                    extendClass="text-gold uppercase tracking-[0.15em] mb-3"
                >
                    {car.brand.name}
                </Paragraph>
                <Heading level="h1" extendClass="text-text-primary mb-4">
                    {car.model}
                </Heading>
                <Paragraph level="p1" extendClass="text-gold font-semibold">
                    {car.price
                        ? `${Number(car.price).toLocaleString('hr-HR')} €`
                        : t('static', 'carSell.priceOnRequest')}
                </Paragraph>
            </div>
        </section>
    );
}
