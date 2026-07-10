import { Award, CreditCard, Ship, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

const SERVICE_ICONS: ReactNode[] = [
    <Ship className="size-5" />,
    <CreditCard className="size-5" />,
    <ShieldCheck className="size-5" />,
    <Award className="size-5" />,
];

export default function AboutServicesSection() {
    const { t } = usePageText();

    return (
        <section className="bg-bg-surface py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-14 max-w-2xl">
                    <SectionEyebrow
                        label={t('static', 'aboutPage.servicesEyebrow')}
                    />
                    <Heading level="h2" extendClass="mt-4">
                        {t('static', 'aboutPage.servicesTitle')}
                    </Heading>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICE_ICONS.map((icon, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 border border-border-default bg-bg-base p-6"
                        >
                            <div className="flex size-11 items-center justify-center border border-gold-border bg-gold-subtle text-gold">
                                {icon}
                            </div>
                            <Heading level="h4">
                                {t('static', `aboutPage.services.${index}.title`)}
                            </Heading>
                            <Paragraph level="p2" extendClass="text-text-secondary">
                                {t(
                                    'static',
                                    `aboutPage.services.${index}.description`,
                                )}
                            </Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
