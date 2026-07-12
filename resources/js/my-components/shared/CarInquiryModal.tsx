import { FieldError, Input, Modal, TextArea, TextField } from '@heroui/react';
import { useForm } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { ICar } from '@/types/models';

type Props = {
    car: ICar;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
};

type FormData = {
    type: 'stock';
    car_id: number;
    name: string;
    email: string;
    phone: string;
    notes: string;
};

const fieldClass =
    'w-full bg-bg-surface-raised border border-border-default px-4 py-3 text-[0.9rem] text-text-primary placeholder:text-text-muted outline-none focus:border-gold/55 transition-colors duration-200 rounded-none';

export function CarInquiryModal({ car, isOpen, onOpenChange }: Props) {
    const { t } = usePageText();
    const [phase, setPhase] = useState<'form' | 'success'>('form');
    const { data, setData, post, processing, reset } = useForm<FormData>({
        type: 'stock',
        car_id: car.id,
        name: '',
        email: '',
        phone: '',
        notes: `Zanima me vozilo: ${car.brand.name} ${car.model} (${car.year})`,
    });

    const handleOpenChange = (open: boolean) => {
        onOpenChange(open);
        if (!open) {
            setPhase('form');
            reset();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => setPhase('success'),
        });
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={handleOpenChange}>
            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-lg bg-bg-surface p-0">
                        <Modal.CloseTrigger className="text-text-secondary hover:text-text-primary" />

                        {phase === 'success' ? (
                            <Modal.Body className="flex flex-col items-center gap-4 p-8 pt-12 text-center">
                                <div className="flex size-16 items-center justify-center rounded-full bg-gold-subtle">
                                    <CheckCircle2 className="size-9 text-gold" strokeWidth={1.75} />
                                </div>
                                <Heading level="h4">
                                    {t('static', 'forms.successModalTitle')}
                                </Heading>
                                <Paragraph level="p2" extendClass="text-text-secondary">
                                    {t('static', 'carInquiry.successMessage')}
                                </Paragraph>
                                <Button
                                    color="orange"
                                    label={t('static', 'forms.successModalClose')}
                                    onClick={() => handleOpenChange(false)}
                                    extendClass="mt-2 w-full justify-center uppercase"
                                />
                            </Modal.Body>
                        ) : (
                            <>
                                <Modal.Header className="border-b border-border-default px-6 py-5">
                                    <div>
                                        <Paragraph level="p4" extendClass="text-gold uppercase tracking-[0.15em] mb-1">
                                            {car.brand.name}
                                        </Paragraph>
                                        <Heading level="h3">{car.model} · {car.year}</Heading>
                                    </div>
                                </Modal.Header>

                                <Modal.Body className="px-6 py-6">
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
                                            isRequired
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
                                                placeholder={t('static', 'carInquiry.messagePlaceholder')}
                                                rows={4}
                                                className={`${fieldClass} resize-none`}
                                            />
                                            <FieldError className="text-[0.72rem] text-destructive" />
                                        </TextField>

                                        <div className="border-t border-border-default pt-5">
                                            <Button
                                                type="submit"
                                                color="orange"
                                                label={processing ? t('static', 'forms.sendingCta') : t('static', 'forms.submitCta')}
                                                disabled={processing}
                                                onClick={() => {}}
                                                extendClass="w-full justify-center uppercase"
                                            />
                                        </div>
                                    </form>
                                </Modal.Body>
                            </>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
