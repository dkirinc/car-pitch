import { usePageText } from '@/hooks/usePageText';
import CarDetailSidebar from '@/my-components/car-detail/CarDetailSidebar';
import { ImageCarousel } from '@/my-components/shared/ImageCarousel';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { ICarDetail } from '@/types/models';

type Props = {
    car: ICarDetail;
};

type SpecPairProps = {
    label: string;
    value: string;
};

function SpecPair({ label, value }: SpecPairProps) {
    return (
        <div>
            <Paragraph
                level="p4"
                extendClass="text-text-muted uppercase tracking-[0.12em] mb-1"
            >
                {label}
            </Paragraph>
            <Paragraph level="p2" extendClass="text-text-primary font-semibold">
                {value}
            </Paragraph>
        </div>
    );
}

export default function CarDetailSection({ car }: Props) {
    const { t } = usePageText();

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
                    {/* Left column */}
                    <div className="flex flex-col gap-16">
                        {/* O vozilu */}
                        <div className="flex flex-col gap-4">
                            <Heading level="h2">
                                {t('static', 'carDetail.aboutTitle')}
                            </Heading>
                            <Paragraph level="p1" extendClass="text-text-secondary">
                                {car.description}
                            </Paragraph>
                        </div>

                        {/* Video pregled (ili Galerija ako video nije dostupan) */}
                        <div className="flex flex-col gap-4">
                            <Heading level="h2">
                                {t(
                                    'static',
                                    !car.video_url && car.gallery.length > 0
                                        ? 'carDetail.galleryTitle'
                                        : 'carDetail.videoTitle',
                                )}
                            </Heading>
                            {car.video_url ? (
                                <div className="aspect-video w-full overflow-hidden bg-bg-surface-raised">
                                    <iframe
                                        src={car.video_url}
                                        title={t('static', 'carDetail.videoTitle')}
                                        className="h-full w-full"
                                        allowFullScreen
                                    />
                                </div>
                            ) : car.gallery.length > 0 ? (
                                <ImageCarousel images={car.gallery} />
                            ) : (
                                <div className="flex aspect-video w-full items-center justify-center bg-bg-surface-raised">
                                    <Paragraph level="p3" extendClass="text-text-muted">
                                        {t('static', 'carDetail.videoPlaceholder')}
                                    </Paragraph>
                                </div>
                            )}
                        </div>

                        {/* Tehnički podaci */}
                        <div className="flex flex-col gap-4">
                            <Heading level="h2">
                                {t('static', 'carDetail.technicalTitle')}
                            </Heading>
                            <div className="grid grid-cols-1 gap-x-10 gap-y-6 border border-border-default bg-bg-surface p-6 sm:grid-cols-2">
                                <SpecPair
                                    label={t('static', 'carDetail.engineLabel')}
                                    value={car.engine}
                                />
                                <SpecPair
                                    label={t('static', 'carDetail.powerLabel')}
                                    value={`${car.power} KS`}
                                />
                                <SpecPair
                                    label={t('static', 'carDetail.colorLabel')}
                                    value={car.exterior_color}
                                />
                                <SpecPair
                                    label={t('static', 'carDetail.interiorLabel')}
                                    value={car.interior_color}
                                />
                                <SpecPair
                                    label={t('static', 'carDetail.doorsLabel')}
                                    value={String(car.doors)}
                                />
                                <SpecPair
                                    label={t('static', 'carDetail.seatsLabel')}
                                    value={String(car.seats)}
                                />
                                <SpecPair
                                    label={t('static', 'carDetail.registrationLabel')}
                                    value={car.registration_date ?? '—'}
                                />
                                <SpecPair
                                    label={t('static', 'carDetail.vinLabel')}
                                    value={car.vin_masked}
                                />
                            </div>
                        </div>

                        {/* Galerija — samo ako je video prikazan gore, inače je već zauzeo njegovo mjesto */}
                        {car.video_url && car.gallery.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <Heading level="h2">
                                    {t('static', 'carDetail.galleryTitle')}
                                </Heading>
                                <ImageCarousel images={car.gallery} />
                            </div>
                        )}

                        {/* Oprema */}
                        {car.equipment.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <Heading level="h2">
                                    {t('static', 'carDetail.equipmentTitle')}
                                </Heading>
                                <div className="grid grid-cols-1 gap-x-10 gap-y-3 border border-border-default bg-bg-surface p-6 sm:grid-cols-2">
                                    {car.equipment.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="size-1.5 flex-none bg-gold" />
                                            <Paragraph
                                                level="p2"
                                                extendClass="text-text-secondary"
                                            >
                                                {item}
                                            </Paragraph>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <CarDetailSidebar car={car} />
                </div>
            </div>
        </section>
    );
}
