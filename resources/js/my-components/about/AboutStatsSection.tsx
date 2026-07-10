import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

const STAT_INDICES = [0, 1, 2, 3] as const;

export default function AboutStatsSection() {
    const { t } = usePageText();

    return (
        <section className="border-b border-border-default bg-bg-base">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {STAT_INDICES.map((index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 px-4 py-12 text-center"
                        >
                            <Heading level="h0" extendClass="text-gold">
                                {t('static', `aboutPage.stats.${index}.value`)}
                            </Heading>
                            <Paragraph
                                level="p3"
                                extendClass="text-text-secondary uppercase tracking-[0.15em]"
                            >
                                {t('static', `aboutPage.stats.${index}.label`)}
                            </Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
