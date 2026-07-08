import { Link } from '@inertiajs/react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Paragraph } from '@/my-components/typography/Paragraph';

export default function AboutSection() {
    const { t } = usePageText();

    return (
        <section className="bg-bg-surface py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left — image placeholder */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-surface-raised">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Paragraph level="p3" extendClass="text-text-muted">
                                {t('static', 'about.imagePlaceholder')}
                            </Paragraph>
                        </div>
                        {/* Gold accent corner */}
                        <div className="absolute bottom-0 left-0 h-1 w-24 bg-gold" />
                    </div>

                    {/* Right — content */}
                    <div className="flex flex-col gap-6">
                        <SectionEyebrow
                            label={t('static', 'about.eyebrow')}
                            title={t('static', 'about.title')}
                        />

                        <Paragraph level="p1" extendClass="text-text-secondary">
                            {t('static', 'about.paragraph1')}
                        </Paragraph>

                        <Paragraph level="p2" extendClass="text-text-secondary">
                            {t('static', 'about.paragraph2')}
                        </Paragraph>

                        {/* Badge */}
                        <div className="flex items-center gap-3 border border-gold-border bg-gold-subtle px-5 py-3 w-fit">
                            <span className="font-display text-[1.05rem] font-semibold text-gold">
                                {t('static', 'about.badgeNumber')}
                            </span>
                            <Paragraph level="p3" extendClass="text-gold uppercase tracking-[0.12em]">
                                {t('static', 'about.badgeText')}
                            </Paragraph>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/cars">
                                <Button
                                    label={t('static', 'actions.viewOffer')}
                                    color="orange"
                                    onClick={() => {}}
                                />
                            </Link>
                            <Link href="/contact">
                                <Button
                                    label={t('static', 'actions.contactUs')}
                                    color="blue"
                                    onClick={() => {}}
                                />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
