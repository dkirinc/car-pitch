import { useForm, usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';

import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

type SharedProps = {
    flash: { contact_success?: boolean };
};

function ContactInfoItem({ icon, value }: { icon: React.ReactNode; value: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex size-10 flex-none items-center justify-center border border-gold-border text-gold">
                {icon}
            </div>
            <Paragraph level="p2" extendClass="text-text-secondary pt-1.5">
                {value}
            </Paragraph>
        </div>
    );
}

export default function ContactSection() {
    const { flash } = usePage<SharedProps>().props;

    const { data, setData, post, processing, errors, reset } = useForm<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        if (flash?.contact_success) {
            reset();
        }
    }, [flash?.contact_success]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact');
    };

    const inputClass =
        'w-full bg-bg-surface-raised border border-border-default px-4 py-3 text-[0.9rem] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/55 transition-colors duration-200';

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left — info */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <Paragraph
                                level="p4"
                                extendClass="text-gold uppercase tracking-[0.25em] mb-3 flex items-center gap-3"
                            >
                                <span className="inline-block h-px w-6 bg-gold" />
                                Kontakt
                            </Paragraph>
                            <Heading level="h2" extendClass="mb-4">
                                Pronađimo zajedno vaš savršeni automobil
                            </Heading>
                            <Paragraph level="p2" extendClass="text-text-secondary">
                                Kontaktirajte nas za upit o dobavljivosti željenog modela,
                                cijeni ili uvjetima financiranja. Odgovaramo u roku 24 sata.
                            </Paragraph>
                        </div>

                        <div className="flex flex-col gap-5">
                            <ContactInfoItem
                                icon={<Phone className="size-4" />}
                                value="+385 98 932 2969"
                            />
                            <ContactInfoItem
                                icon={<Mail className="size-4" />}
                                value="info@autolider.com.hr"
                            />
                            <ContactInfoItem
                                icon={<MapPin className="size-4" />}
                                value="Otok Krk, Hrvatska"
                            />
                        </div>
                    </div>

                    {/* Right — form */}
                    <div>
                        {flash?.contact_success && (
                            <div className="mb-6 border border-gold-border bg-gold-subtle px-5 py-4">
                                <Paragraph level="p2" extendClass="text-gold">
                                    Upit je uspješno poslan. Javit cemo vam se u roku 24 sata.
                                </Paragraph>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Ime i prezime"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className={inputClass}
                                />
                                {errors.name && (
                                    <Paragraph level="p4" extendClass="text-destructive mt-1">
                                        {errors.name}
                                    </Paragraph>
                                )}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="E-mail adresa"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className={inputClass}
                                />
                                {errors.email && (
                                    <Paragraph level="p4" extendClass="text-destructive mt-1">
                                        {errors.email}
                                    </Paragraph>
                                )}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Broj telefona"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className={inputClass}
                                />
                                {errors.phone && (
                                    <Paragraph level="p4" extendClass="text-destructive mt-1">
                                        {errors.phone}
                                    </Paragraph>
                                )}
                            </div>

                            <div>
                                <textarea
                                    placeholder="Koji automobil vas zanima?"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    rows={5}
                                    className={`${inputClass} resize-none`}
                                />
                                {errors.message && (
                                    <Paragraph level="p4" extendClass="text-destructive mt-1">
                                        {errors.message}
                                    </Paragraph>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="mt-2 inline-flex items-center justify-center bg-gold px-8 py-[14px] text-[0.78rem] font-bold uppercase tracking-[0.15em] text-bg-base transition-colors duration-200 hover:bg-gold-dark disabled:opacity-50"
                            >
                                {processing ? 'Slanje...' : 'Pošalji upit →'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
