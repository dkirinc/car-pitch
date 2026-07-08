import { Link } from '@inertiajs/react';

import { Button } from '@/my-components/shared/Button';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Paragraph } from '@/my-components/typography/Paragraph';

export default function AboutSection() {
    return (
        <section className="bg-bg-surface py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left — image placeholder */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-surface-raised">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Paragraph level="p3" extendClass="text-text-muted">
                                Slika salona
                            </Paragraph>
                        </div>
                        {/* Gold accent corner */}
                        <div className="absolute bottom-0 left-0 h-1 w-24 bg-gold" />
                    </div>

                    {/* Right — content */}
                    <div className="flex flex-col gap-6">
                        <SectionEyebrow label="O nama" title="Vaš pouzdani partner za premium vozila" />

                        <Paragraph level="p1" extendClass="text-text-secondary">
                            Auto Lider osnovan je s jednim ciljem — pružiti klijentima
                            na Otoku Krku i šire pristup vrhunskim europskim automobilima
                            bez kompromisa u kvaliteti ili usluzi.
                        </Paragraph>

                        <Paragraph level="p2" extendClass="text-text-secondary">
                            Kao ovlašteni uvoznik premium brendova, svako vozilo prolazi
                            kroz rigoroznu provjeru prije isporuke. Naš tim brine o
                            svakom detalju — od prvog upita do predaje ključeva.
                        </Paragraph>

                        {/* Badge */}
                        <div className="flex items-center gap-3 border border-gold-border bg-gold-subtle px-5 py-3 w-fit">
                            <span className="font-display text-[1.05rem] font-semibold text-gold">
                                #1
                            </span>
                            <Paragraph level="p3" extendClass="text-gold uppercase tracking-[0.12em]">
                                Audi uvoznik na Otoku Krku
                            </Paragraph>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-2">
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
            </div>
        </section>
    );
}
