import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

type Props = {
    images: string[];
};

export default function BlogGallery({ images }: Props) {
    const { t } = usePageText();
    const [activeIndex, setActiveIndex] = useState(0);

    if (images.length === 0) return null;

    const goTo = (index: number) => {
        setActiveIndex((index + images.length) % images.length);
    };

    return (
        <section className="bg-bg-base pb-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-12">
                <div className="border border-border-default bg-bg-surface p-8 md:p-12">
                    <Heading level="h4" extendClass="mb-6">
                        {t('static', 'blogDetail.galleryTitle')}
                    </Heading>

                    <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface-raised">
                        <img
                            src={images[activeIndex]}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <button
                            type="button"
                            onClick={() => goTo(activeIndex - 1)}
                            aria-label={t('static', 'navArrows.prevAria')}
                            className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center bg-bg-base/60 text-text-primary backdrop-blur-sm transition-colors duration-200 hover:text-gold"
                        >
                            <ChevronLeft className="size-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => goTo(activeIndex + 1)}
                            aria-label={t('static', 'navArrows.nextAria')}
                            className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center bg-bg-base/60 text-text-primary backdrop-blur-sm transition-colors duration-200 hover:text-gold"
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-1.5">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goTo(index)}
                                aria-label={`${t('static', 'hero.slideAriaLabel')} ${index + 1}`}
                                className={`h-px transition-all duration-300 ${
                                    index === activeIndex
                                        ? 'w-8 bg-gold'
                                        : 'w-4 bg-text-muted/40'
                                }`}
                            />
                        ))}
                    </div>
                    <Paragraph
                        level="p3"
                        extendClass="mt-2 text-center text-text-muted"
                    >
                        {activeIndex + 1} / {images.length}
                    </Paragraph>
                </div>
            </div>
        </section>
    );
}
