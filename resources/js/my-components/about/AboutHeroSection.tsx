import { Clock, MapPin } from 'lucide-react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

import heroBmw from '../../../assets/heroBmw.png';

export default function AboutHeroSection() {
    const { t } = usePageText();

    return (
        <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16">
            <img
                src={heroBmw}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/70 to-bg-base/30" />
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,12,14,0.9)_35%,rgba(12,12,14,0.2)_100%)]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
                <Paragraph
                    level="p3"
                    extendClass="text-gold uppercase tracking-[0.25em] mb-6 flex items-center gap-3"
                >
                    <span className="inline-block h-px w-8 bg-gold" />
                    {t('static', 'aboutPage.eyebrow')}
                </Paragraph>

                <Heading level="h1" extendClass="text-text-primary mb-6 max-w-2xl">
                    {t('static', 'aboutPage.headingLine1')}
                    <br />
                    {t('static', 'aboutPage.headingLine2')}
                    <br />
                    {t('static', 'aboutPage.headingLine3')}
                </Heading>

                <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-2">
                        <MapPin className="size-4 text-gold" />
                        <Paragraph level="p3" extendClass="text-text-secondary">
                            {t('static', 'aboutPage.locationLabel')}
                        </Paragraph>
                    </span>
                    <span className="h-4 w-px bg-border-default" />
                    <span className="flex items-center gap-2">
                        <Clock className="size-4 text-gold" />
                        <Paragraph level="p3" extendClass="text-text-secondary">
                            {t('static', 'aboutPage.hoursLabel')}
                        </Paragraph>
                    </span>
                </div>
            </div>
        </section>
    );
}
