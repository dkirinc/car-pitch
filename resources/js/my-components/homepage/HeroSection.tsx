import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/my-components/shared/Button';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

export default function HeroSection() {
    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Background — swap this div for an <img> or CSS background-image once a hero photo is available */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-base via-[#111114] to-bg-base" />
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,12,14,0.97)_45%,rgba(12,12,14,0.3)_100%)]" />

            {/* Decorative gold vertical line */}
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="max-w-2xl">
                    <Paragraph
                        level="p3"
                        extendClass="text-gold uppercase tracking-[0.25em] mb-6 flex items-center gap-3"
                    >
                        <span className="inline-block h-px w-8 bg-gold" />
                        Auto Lider · Otok Krk
                    </Paragraph>

                    <Heading level="h0" extendClass="text-text-primary mb-6 block">
                        Svaka vožnja,<br />savršeno iskustvo.
                    </Heading>

                    <Paragraph
                        level="p1"
                        extendClass="text-text-secondary mb-10 max-w-lg"
                    >
                        Premium vozila s garancijom kvalitete. Pronađite savršen automobil u
                        našoj ponudi — od uvoza do isporuke.
                    </Paragraph>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/cars">
                            <Button
                                label="POGLEDAJ PONUDU"
                                color="orange"
                                onClick={() => {}}
                            />
                        </Link>
                        <Link href="/contact">
                            <Button
                                label="KONTAKTIRAJ NAS"
                                color="blue"
                                onClick={() => {}}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={scrollToContent}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-gold transition-colors duration-200 cursor-pointer"
            >
                <Paragraph level="p4" extendClass="uppercase tracking-[0.2em] text-inherit">
                    Skrolaj
                </Paragraph>
                <ChevronDown className="size-4 animate-bounce" />
            </button>
        </section>
    );
}
