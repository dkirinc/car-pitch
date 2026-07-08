import { FieldError, Input, Modal, TextArea, TextField } from '@heroui/react';
import { useForm } from '@inertiajs/react';

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
    name: string;
    email: string;
    phone: string;
    message: string;
};

const fieldClass =
    'w-full bg-bg-surface-raised border border-border-default px-4 py-3 text-[0.9rem] text-text-primary placeholder:text-text-muted outline-none focus:border-gold/55 transition-colors duration-200 rounded-none';

export function CarInquiryModal({ car, isOpen, onOpenChange }: Props) {
    const { data, setData, post, processing, reset } = useForm<FormData>({
        name: '',
        email: '',
        phone: '',
        message: `Zanima me vozilo: ${car.brand.name} ${car.model} (${car.year})`,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => {
                reset();
                onOpenChange(false);
            },
        });
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-lg bg-bg-surface p-0">
                        <Modal.CloseTrigger className="text-text-secondary hover:text-text-primary" />

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
                                        placeholder="Poruka"
                                        rows={4}
                                        className={`${fieldClass} resize-none`}
                                    />
                                    <FieldError className="text-[0.72rem] text-destructive" />
                                </TextField>

                                <div className="border-t border-border-default pt-5">
                                    <Button
                                        type="submit"
                                        color="orange"
                                        label={processing ? 'SLANJE...' : 'POŠALJI UPIT →'}
                                        disabled={processing}
                                        onClick={() => {}}
                                        extendClass="w-full justify-center uppercase"
                                    />
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
