import { Modal } from '@heroui/react';
import { CheckCircle2 } from 'lucide-react';

import { usePageText } from '@/hooks/usePageText';
import { Button } from '@/my-components/shared/Button';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

type Props = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    message: string;
};

export default function InquirySuccessModal({
    isOpen,
    onOpenChange,
    message,
}: Props) {
    const { t } = usePageText();

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-md bg-bg-surface p-0">
                        <Modal.CloseTrigger className="text-text-secondary hover:text-text-primary" />
                        <Modal.Body className="flex flex-col items-center gap-4 p-8 pt-12 text-center">
                            <div className="flex size-16 items-center justify-center rounded-full bg-gold-subtle">
                                <CheckCircle2
                                    className="size-9 text-gold"
                                    strokeWidth={1.75}
                                />
                            </div>
                            <Heading level="h4">
                                {t('static', 'forms.successModalTitle')}
                            </Heading>
                            <Paragraph
                                level="p2"
                                extendClass="text-text-secondary"
                            >
                                {message}
                            </Paragraph>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="w-full px-8 pb-8">
                                <Button
                                    color="orange"
                                    label={t('static', 'forms.successModalClose')}
                                    onClick={() => onOpenChange(false)}
                                    extendClass="w-full justify-center uppercase"
                                />
                            </div>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
