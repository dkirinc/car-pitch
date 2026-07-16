import { Modal } from '@heroui/react';
import { router } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';


import { usePageText } from '@/hooks/usePageText';

import { Heading } from '../typography/Heading';
import { Paragraph } from '../typography/Paragraph';

import { Button } from './Button';


const VerifyEmailSuccessModal = () => {
    const { t } = usePageText();
    const [isOpen, setIsOpen] = useState(() => {
        if (typeof window === 'undefined') return false;

        return (
            new URLSearchParams(window.location.search).get('verified') === '1'
        );
    });

    // Strip the param only when the modal is dismissed — doing it on mount
    // races StrictMode's effect double-run and Inertia's Layout remounts.
    const close = () => {
        setIsOpen(false);
        const params = new URLSearchParams(window.location.search);

        if (params.get('verified') !== '1') return;

        params.delete('verified');
        const search = params.toString();
        window.history.replaceState(
            {},
            '',
            window.location.pathname +
                (search ? `?${search}` : '') +
                window.location.hash,
        );
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={(open) => !open && close()}>
            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="bg-white p-0 sm:max-w-110">
                        <Modal.CloseTrigger className="z-10" />
                        <Modal.Body className="flex flex-col items-center gap-4 p-8 pt-12 text-center">
                            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                                <CheckCircle2
                                    className="size-9 text-primary"
                                    strokeWidth={1.75}
                                />
                            </div>
                            <Heading level="h4" extendClass="!font-semibold">
                                {t('static', 'verifyEmail.title')}
                            </Heading>
                            <Paragraph level="p2" extendClass="text-secondary">
                                {t('static', 'verifyEmail.message')}
                            </Paragraph>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="flex w-full flex-col gap-2 px-8 pb-8">
                                <Button
                                    label={t('static', 'verifyEmail.bookCta')}
                                    color="orange"
                                    onClick={() => {
                                        close();
                                        router.visit('/booking');
                                    }}
                                />
                                <Button
                                    label={t('static', 'verifyEmail.profileCta')}
                                    color="white"
                                    onClick={() => {
                                        close();
                                        router.visit('/profile');
                                    }}
                                />
                            </div>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default VerifyEmailSuccessModal;
