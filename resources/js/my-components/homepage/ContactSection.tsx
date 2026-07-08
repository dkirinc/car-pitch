import { FieldError, Input, TextArea, TextField } from '@heroui/react';
import { useForm, usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/my-components/shared/Button';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
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

const fieldClass =
    'w-full bg-bg-surface-raised border border-border-default px-4 py-3 text-[0.9rem] text-text-primary placeholder:text-text-muted outline-none focus:border-gold/55 transition-colors duration-200 rounded-none';

export default function ContactSection() {
    const { flash } = usePage<SharedProps>().props;

    const { data, setData, post, processing, reset } = useForm<FormData>({
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

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left — info */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <SectionEyebrow label="Kontakt" title="Pronađimo zajedno vaš savršeni automobil" />
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
                                    Upit je uspješno poslan. Javit ćemo vam se u roku 24 sata.
                                </Paragraph>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <TextField
                                value={data.name}
                                onChange={(v) => setData('name', v)}
                                className="flex flex-col gap-1"
                            >
                                <Input type="text" placeholder="Ime i prezime *" className={fieldClass} />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <TextField
                                value={data.email}
                                onChange={(v) => setData('email', v)}
                                className="flex flex-col gap-1"
                            >
                                <Input type="email" placeholder="E-mail adresa *" className={fieldClass} />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <TextField
                                value={data.phone}
                                onChange={(v) => setData('phone', v)}
                                className="flex flex-col gap-1"
                            >
                                <Input type="tel" placeholder="Broj telefona *" className={fieldClass} />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <TextField
                                value={data.message}
                                onChange={(v) => setData('message', v)}
                                className="flex flex-col gap-1"
                            >
                                <TextArea
                                    placeholder="Koji automobil vas zanima?"
                                    rows={5}
                                    className={`${fieldClass} resize-none`}
                                />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <Button
                                type="submit"
                                color="orange"
                                label={processing ? 'SLANJE...' : 'POŠALJI UPIT →'}
                                disabled={processing}
                                onClick={() => {}}
                                extendClass="mt-2 uppercase"
                            />
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
