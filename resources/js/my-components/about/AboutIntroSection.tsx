import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

export default function AboutIntroSection() {
    const { t } = usePageText();

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="flex flex-col gap-4">
                        <span className="inline-block h-px w-6 bg-gold" />
                        <Heading level="h2">
                            {t('static', 'aboutPage.introTitle')}
                        </Heading>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Paragraph level="p1" extendClass="text-text-secondary">
                            {t('static', 'aboutPage.introParagraph1')}
                        </Paragraph>
                        <Paragraph level="p1" extendClass="text-text-secondary">
                            {t('static', 'aboutPage.introParagraph2')}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
}
