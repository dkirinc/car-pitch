import { usePageText } from '@/hooks/usePageText';
import { StarRating } from '@/my-components/shared/StarRating';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

export default function AboutQuoteSection() {
    const { t } = usePageText();

    return (
        <section className="bg-bg-surface pb-24">
            <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
                <div className="flex justify-center">
                    <StarRating rating={5} extendClass="size-5" />
                </div>
                <Heading level="h2" extendClass="mt-8 text-text-primary italic">
                    “{t('static', 'aboutPage.quote')}”
                </Heading>
                <Paragraph
                    level="p3"
                    extendClass="mt-6 text-text-muted uppercase tracking-[0.15em]"
                >
                    — {t('static', 'aboutPage.quoteAttribution')}
                </Paragraph>
            </div>
        </section>
    );
}
