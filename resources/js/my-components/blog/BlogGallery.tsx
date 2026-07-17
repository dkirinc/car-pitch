import { usePageText } from '@/hooks/usePageText';
import { ImageCarousel } from '@/my-components/shared/ImageCarousel';
import { Heading } from '@/my-components/typography/Heading';

type Props = {
    images: string[];
};

export default function BlogGallery({ images }: Props) {
    const { t } = usePageText();

    if (images.length === 0) return null;

    return (
        <section className="bg-bg-base pb-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-12">
                <div className="border border-border-default bg-bg-surface p-8 md:p-12">
                    <Heading level="h4" extendClass="mb-6">
                        {t('static', 'blogDetail.galleryTitle')}
                    </Heading>

                    <ImageCarousel images={images} />
                </div>
            </div>
        </section>
    );
}
