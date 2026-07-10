import { usePageText } from '@/hooks/usePageText';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

const TIMELINE_INDICES = [0, 1, 2, 3] as const;
const LAST_INDEX = TIMELINE_INDICES.length - 1;

export default function AboutTimelineSection() {
    const { t } = usePageText();

    return (
        <section className="bg-bg-base pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <SectionEyebrow
                    label={t('static', 'aboutPage.timelineEyebrow')}
                    extendClass="mb-14"
                />

                <div className="relative flex flex-col gap-12">
                    <div className="absolute top-2 bottom-2 left-[7px] w-px bg-white/15" />
                    {TIMELINE_INDICES.map((index) => {
                        const isLast = index === LAST_INDEX;

                        return (
                            <div
                                key={index}
                                className="relative grid grid-cols-[16px_100px_1fr] items-start gap-6 md:gap-10"
                            >
                                <span
                                    className={`relative top-1.5 ml-[3.5px] size-[8px] flex-none rounded-full ${
                                        isLast ? 'bg-gold' : 'bg-white/25'
                                    }`}
                                />
                                <Paragraph
                                    level="p1"
                                    extendClass={`font-display font-semibold ${
                                        isLast ? 'text-gold' : 'text-text-muted'
                                    }`}
                                >
                                    {t('static', `aboutPage.timeline.${index}.year`)}
                                </Paragraph>
                                <div className="flex flex-col gap-2">
                                    <Heading level="h4">
                                        {t(
                                            'static',
                                            `aboutPage.timeline.${index}.title`,
                                        )}
                                    </Heading>
                                    <Paragraph
                                        level="p2"
                                        extendClass="text-text-secondary max-w-xl"
                                    >
                                        {t(
                                            'static',
                                            `aboutPage.timeline.${index}.description`,
                                        )}
                                    </Paragraph>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
