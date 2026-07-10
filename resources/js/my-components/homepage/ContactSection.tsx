import { FieldError, Input, TextArea, TextField } from '@heroui/react';
import { useForm, usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Paragraph } from '@/my-components/typography/Paragraph';

type FormData = {
    type: 'import';
    name: string;
    email: string;
    phone: string;
    notes: string;
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
    const { t } = usePageText();
    const { flash } = usePage<SharedProps>().props;

    const { data, setData, post, processing, reset } = useForm<FormData>({
        type: 'import',
        name: '',
        email: '',
        phone: '',
        notes: '',
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
                            <SectionEyebrow
                                label={t('static', 'contact.eyebrow')}
                                title={t('static', 'contact.title')}
                            />
                            <Paragraph level="p2" extendClass="text-text-secondary">
                                {t('static', 'contact.description')}
                            </Paragraph>
                        </div>

                        <div className="flex flex-col gap-5">
                            <ContactInfoItem
                                icon={<Phone className="size-4" />}
                                value={t('static', 'contactInfo.phone')}
                            />
                            <ContactInfoItem
                                icon={<Mail className="size-4" />}
                                value={t('static', 'contactInfo.email')}
                            />
                            <ContactInfoItem
                                icon={<MapPin className="size-4" />}
                                value={t('static', 'contactInfo.address')}
                            />
                        </div>
                    </div>

                    {/* Right — form */}
                    <div>
                        {flash?.contact_success && (
                            <div className="mb-6 border border-gold-border bg-gold-subtle px-5 py-4">
                                <Paragraph level="p2" extendClass="text-gold">
                                    {t('static', 'contact.successMessage')}
                                </Paragraph>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <TextField
                                value={data.name}
                                onChange={(v) => setData('name', v)}
                                className="flex flex-col gap-1"
                            >
                                <Input type="text" placeholder={t('static', 'forms.namePlaceholder')} className={fieldClass} />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <TextField
                                value={data.email}
                                onChange={(v) => setData('email', v)}
                                className="flex flex-col gap-1"
                            >
                                <Input type="email" placeholder={t('static', 'forms.emailPlaceholder')} className={fieldClass} />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <TextField
                                value={data.phone}
                                onChange={(v) => setData('phone', v)}
                                className="flex flex-col gap-1"
                            >
                                <Input type="tel" placeholder={t('static', 'forms.phonePlaceholder')} className={fieldClass} />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <TextField
                                value={data.notes}
                                onChange={(v) => setData('notes', v)}
                                className="flex flex-col gap-1"
                            >
                                <TextArea
                                    placeholder={t('static', 'contact.messagePlaceholder')}
                                    rows={5}
                                    className={`${fieldClass} resize-none`}
                                />
                                <FieldError className="text-[0.72rem] text-destructive" />
                            </TextField>

                            <Button
                                type="submit"
                                color="orange"
                                label={processing ? t('static', 'forms.sendingCta') : t('static', 'forms.submitCta')}
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
