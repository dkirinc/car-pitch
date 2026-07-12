import { usePageText } from '@/hooks/usePageText';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBrand } from '@/types/models';

import ContactSidebar from './ContactSidebar';
import InquiryForm from './InquiryForm';

type Props = {
    brands: IBrand[];
};

export default function ContactPageSection({ brands }: Props) {
    const { t } = usePageText();

    return (
        <section className="bg-bg-base pt-36 pb-20 md:pt-44">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-end lg:gap-12">
                    <div className="lg:col-span-2">
                        <SectionEyebrow label={t('static', 'contact.eyebrow')} />
                        <Heading level="h1" extendClass="mt-4 max-w-xl">
                            {t('static', 'contact.title')}
                        </Heading>
                    </div>
                    <Paragraph level="p2" extendClass="text-text-secondary">
                        {t('static', 'contactPage.subtitle')}
                    </Paragraph>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <InquiryForm brands={brands} />
                    </div>
                    <div>
                        <div className="lg:sticky lg:top-[calc(var(--header-height,88px)+10px)]">
                            <ContactSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
