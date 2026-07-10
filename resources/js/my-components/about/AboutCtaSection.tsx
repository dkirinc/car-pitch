import { Link } from '@inertiajs/react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

export default function AboutCtaSection() {
    const { t } = usePageText();

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-8 border border-border-default bg-bg-surface p-10 md:flex-row md:p-14">
                    <div className="max-w-xl">
                        <Heading level="h3">
                            {t('static', 'aboutPage.ctaTitle')}
                        </Heading>
                        <Paragraph
                            level="p2"
                            extendClass="mt-3 text-text-secondary"
                        >
                            {t('static', 'aboutPage.ctaDescription')}
                        </Paragraph>
                    </div>
                    <div className="flex flex-none flex-wrap gap-4">
                        <Link href="/cars">
                            <Button
                                label={t('static', 'aboutPage.ctaPrimary')}
                                color="orange"
                                onClick={() => {}}
                            />
                        </Link>
                        <Link href="/contact">
                            <Button
                                label={t('static', 'aboutPage.ctaSecondary')}
                                color="blue"
                                onClick={() => {}}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
