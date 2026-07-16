import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

import heroBmw from '../../../assets/heroBmw.png';

const SLIDE_DURATION_MS = 6000;

const SLIDES = [
    { image: heroBmw, ctaHref: '/cars' },
    { image: heroBmw, ctaHref: '/contact' },
    { image: heroBmw, ctaHref: '/cars' },
];

export default function HeroSection() {
    const { t } = usePageText();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SLIDES.length);
        }, SLIDE_DURATION_MS);

        return () => clearInterval(id);
    }, [activeIndex]);

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Background images (crossfade) */}
            {SLIDES.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-br from-bg-base/80 via-[#111114]/70 to-bg-base/80" />
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,12,14,0.97)_45%,rgba(12,12,14,0.3)_100%)]" />

            {/* Decorative gold vertical line */}
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="max-w-2xl"
                    >
                        <Paragraph
                            level="p3"
                            extendClass="text-gold uppercase tracking-[0.25em] mb-6 flex items-center gap-3"
                        >
                            <span className="inline-block h-px w-8 bg-gold" />
                            {t('static', `hero.slides.${activeIndex}.eyebrow`)}
                        </Paragraph>

                        <Heading
                            level="h0"
                            extendClass="text-text-primary mb-6 block"
                        >
                            {t(
                                'static',
                                `hero.slides.${activeIndex}.headingLine1`,
                            )}
                            <br />
                            {t(
                                'static',
                                `hero.slides.${activeIndex}.headingLine2`,
                            )}
                        </Heading>

                        <Paragraph
                            level="p1"
                            extendClass="text-text-secondary mb-10 max-w-lg"
                        >
                            {t(
                                'static',
                                `hero.slides.${activeIndex}.description`,
                            )}
                        </Paragraph>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link href={SLIDES[activeIndex].ctaHref}>
                                <Button
                                    label={t(
                                        'static',
                                        `hero.slides.${activeIndex}.ctaLabel`,
                                    )}
                                    color="orange"
                                    onClick={() => {}}
                                />
                            </Link>

                            <div className="flex items-center gap-1.5">
                                {SLIDES.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`${t('static', 'hero.slideAriaLabel')} ${index + 1}`}
                                        className={`h-px transition-all duration-500 ${
                                            index === activeIndex
                                                ? 'w-8 bg-gold'
                                                : 'w-4 bg-text-muted/40'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
