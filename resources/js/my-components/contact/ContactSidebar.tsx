import { Check, Mail, MapPin, Phone } from 'lucide-react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

function ContactInfoRow({
    icon,
    label,
    value,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <span className="flex size-9 flex-none items-center justify-center border border-gold-border text-gold">
                {icon}
            </span>
            <div>
                <Paragraph
                    level="p4"
                    extendClass="text-text-muted uppercase tracking-[0.15em] mb-1"
                >
                    {label}
                </Paragraph>
                <a
                    href={href}
                    className="text-[0.9rem] text-text-primary transition-colors duration-200 hover:text-gold"
                >
                    {value}
                </a>
            </div>
        </div>
    );
}

function HoursRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between">
            <Paragraph level="p3" extendClass="text-text-secondary">
                {label}
            </Paragraph>
            <Paragraph level="p3" extendClass="text-text-primary font-semibold">
                {value}
            </Paragraph>
        </div>
    );
}

export default function ContactSidebar() {
    const { t } = usePageText();

    const whyItems = [
        t('static', 'contactPage.whyItem1'),
        t('static', 'contactPage.whyItem2'),
        t('static', 'contactPage.whyItem3'),
        t('static', 'contactPage.whyItem4'),
        t('static', 'contactPage.whyItem5'),
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 border border-border-default bg-bg-surface p-6">
                <Heading level="h6" extendClass="text-text-muted uppercase tracking-[0.2em]">
                    {t('static', 'contactPage.sidebarDirectContactTitle')}
                </Heading>
                <ContactInfoRow
                    icon={<Phone className="size-4" />}
                    label={t('static', 'contactPage.sidebarPhoneLabel')}
                    value={t('static', 'contactInfo.phone')}
                    href={t('static', 'contactInfo.phoneHref')}
                />
                <ContactInfoRow
                    icon={<Mail className="size-4" />}
                    label={t('static', 'contactPage.sidebarEmailLabel')}
                    value={t('static', 'contactInfo.email')}
                    href={t('static', 'contactInfo.emailHref')}
                />
                <ContactInfoRow
                    icon={<MapPin className="size-4" />}
                    label={t('static', 'contactPage.sidebarAddressLabel')}
                    value={t('static', 'contactInfo.address')}
                    href="#"
                />
            </div>

            <div className="flex flex-col gap-4 border border-border-default bg-bg-surface p-6">
                <Heading level="h6" extendClass="text-text-muted uppercase tracking-[0.2em]">
                    {t('static', 'contactPage.sidebarHoursTitle')}
                </Heading>
                <div className="flex flex-col gap-3">
                    <HoursRow
                        label={t('static', 'contactPage.sidebarHoursWeekdays')}
                        value={t('static', 'contactPage.sidebarHoursWeekdaysValue')}
                    />
                    <HoursRow
                        label={t('static', 'contactPage.sidebarHoursSaturday')}
                        value={t('static', 'contactPage.sidebarHoursSaturdayValue')}
                    />
                    <HoursRow
                        label={t('static', 'contactPage.sidebarHoursSunday')}
                        value={t('static', 'contactPage.sidebarHoursSundayValue')}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4 border border-border-default bg-bg-surface p-6">
                <Heading level="h6" extendClass="text-text-muted uppercase tracking-[0.2em]">
                    {t('static', 'contactPage.sidebarWhyTitle')}
                </Heading>
                <ul className="flex flex-col gap-3">
                    {whyItems.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <span className="flex size-4 flex-none items-center justify-center bg-gold-subtle text-gold">
                                <Check className="size-3" />
                            </span>
                            <Paragraph level="p3" extendClass="text-text-secondary">
                                {item}
                            </Paragraph>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
