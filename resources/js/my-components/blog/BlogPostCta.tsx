import { Link } from '@inertiajs/react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

export default function BlogPostCta() {
    const { t } = usePageText();

    return (
        <section className="bg-bg-surface py-20">
            <div className="mx-auto max-w-2xl px-6 text-center lg:px-12">
                <Heading level="h2">
                    {t('static', 'blogDetail.ctaTitle')}
                </Heading>
                <Paragraph level="p2" extendClass="mt-4 text-text-secondary">
                    {t('static', 'blogDetail.ctaSubtitle')}
                </Paragraph>
                <div className="mt-8 flex justify-center">
                    <Link href="/contact">
                        <Button
                            label={t('static', 'blogDetail.ctaButton')}
                            color="orange"
                            onClick={() => {}}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
