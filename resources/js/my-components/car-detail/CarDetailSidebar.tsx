import { CalendarDays, Fuel, Gauge, Mail, Phone, SlidersHorizontal } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { CarInquiryModal } from '@/my-components/shared/CarInquiryModal';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { ICarDetail } from '@/types/models';

type Props = {
    car: ICarDetail;
};

type SpecRowProps = {
    icon: ReactNode;
    label: string;
    value: string;
};

function SpecRow({ icon, label, value }: SpecRowProps) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-gold/60">{icon}</span>
            <div>
                <Paragraph
                    level="p4"
                    extendClass="text-text-muted uppercase tracking-[0.12em]"
                >
                    {label}
                </Paragraph>
                <Paragraph level="p2" extendClass="text-text-primary font-semibold">
                    {value}
                </Paragraph>
            </div>
        </div>
    );
}

export default function CarDetailSidebar({ car }: Props) {
    const { t } = usePageText();
    const [inquiryOpen, setInquiryOpen] = useState(false);

    return (
        <aside className="flex h-fit flex-col gap-6 border border-border-default bg-bg-surface p-6 lg:sticky lg:top-28">
            <Heading level="h4">{t('static', 'carDetail.basicInfoTitle')}</Heading>

            <div className="flex flex-col gap-4">
                <SpecRow
                    icon={<CalendarDays className="size-4" />}
                    label={t('static', 'carDetail.yearLabel')}
                    value={String(car.year)}
                />
                <SpecRow
                    icon={<Gauge className="size-4" />}
                    label={t('static', 'carDetail.mileageLabel')}
                    value={`${car.mileage.toLocaleString('hr-HR')} km`}
                />
                <SpecRow
                    icon={<Fuel className="size-4" />}
                    label={t('static', 'carDetail.fuelLabel')}
                    value={car.fuel_type}
                />
                <SpecRow
                    icon={<SlidersHorizontal className="size-4" />}
                    label={t('static', 'carDetail.transmissionLabel')}
                    value={car.transmission}
                />
            </div>

            <div className="border-t border-border-default pt-5">
                <Paragraph
                    level="p4"
                    extendClass="text-text-muted uppercase tracking-[0.15em] mb-1"
                >
                    {t('static', 'carDetail.priceLabel')}
                </Paragraph>
                <Heading level="h3" extendClass="text-gold">
                    {car.price
                        ? `${Number(car.price).toLocaleString('hr-HR')} €`
                        : t('static', 'carSell.priceOnRequest')}
                </Heading>
            </div>

            <Button
                label={t('static', 'forms.submitCta')}
                color="orange"
                onClick={() => setInquiryOpen(true)}
                extendClass="w-full justify-center"
            />

            <div className="flex flex-col gap-3 border-t border-border-default pt-5">
                <Paragraph
                    level="p4"
                    extendClass="text-text-muted uppercase tracking-[0.15em]"
                >
                    {t('static', 'carDetail.contactTitle')}
                </Paragraph>
                <a
                    href={t('static', 'contactInfo.phoneHref')}
                    className="flex items-center gap-2 text-text-secondary transition-colors duration-200 hover:text-gold"
                >
                    <Phone className="size-4" />
                    <Paragraph level="p2" extendClass="text-inherit">
                        {t('static', 'contactInfo.phone')}
                    </Paragraph>
                </a>
                <a
                    href={t('static', 'contactInfo.emailHref')}
                    className="flex items-center gap-2 text-text-secondary transition-colors duration-200 hover:text-gold"
                >
                    <Mail className="size-4" />
                    <Paragraph level="p2" extendClass="text-inherit">
                        {t('static', 'contactInfo.email')}
                    </Paragraph>
                </a>
            </div>

            <CarInquiryModal
                car={car}
                isOpen={inquiryOpen}
                onOpenChange={setInquiryOpen}
            />
        </aside>
    );
}
