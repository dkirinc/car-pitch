import { Input, Modal } from '@heroui/react';
import { useForm, usePage } from '@inertiajs/react';
/* import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'; */
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';

import { usePageText } from '@/hooks/usePageText';
import type { SharedProps } from '@/types/page';


import { Heading } from '../../typography/Heading';
import { Paragraph } from '../../typography/Paragraph';
import { Button } from '../Button';

import { itemVariants, sectionVariants } from './variants';

const FooterSubscribe = () => {
    const { t } = usePageText();
    const { turnstileSiteKey, auth } = usePage<SharedProps>().props;
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    /* const turnstileRef = useRef<TurnstileInstance>(null); */

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        cf_turnstile_response: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/newsletter', {
            preserveScroll: true,
            onSuccess: () => {
                setIsSuccessOpen(true);
                reset('email');
            },
            onError: () => {
               /*  turnstileRef.current?.reset(); */
                setData('cf_turnstile_response', '');
            },
        });
    };

    return (
        <>
            <motion.div
                className="flex w-full flex-1 flex-col gap-4"
                variants={sectionVariants}
            >
                <motion.div variants={itemVariants}>
                    <Paragraph level="p1" extendClass="font-bold text-white">
                        {t('static', 'footer.subscribeTitle')}
                    </Paragraph>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Paragraph
                        level="p3"
                        extendClass="text-white/70 !font-light"
                    >
                        {t('static', 'footer.subscribe_P')}
                    </Paragraph>
                </motion.div>
                <motion.form
                    className="flex flex-col gap-2"
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                >
                    <Input
                        type="email"
                        name="email"
                        required
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder={t('static', 'footer.subscribe_Hint')}
                        className="font-primary h-11.5 w-full rounded-md bg-white/10 p-4 text-sm text-white placeholder:text-white/60"
                    />
                    {errors.email && (
                        <Paragraph
                            level="p4"
                            extendClass="text-red-400 !font-light"
                        >
                            {errors.email}
                        </Paragraph>
                    )}
                    {!auth?.user?.email_verified_at && (
                        <>
                            {/* <Turnstile
                                ref={turnstileRef}
                                siteKey={turnstileSiteKey}
                                onSuccess={(token) =>
                                    setData('cf_turnstile_response', token)
                                }
                                className="w-full"
                            /> */}
                            {errors.cf_turnstile_response && (
                                <Paragraph
                                    level="p4"
                                    extendClass="text-red-400 !font-light"
                                >
                                    {errors.cf_turnstile_response}
                                </Paragraph>
                            )}
                        </>
                    )}
                    <Button
                        label={t('static', 'actions.subscribe')}
                        onClick={() => {}}
                        color="blue"
                        extendClass="!h-11"
                        type="submit"
                        disabled={processing}
                    />
                </motion.form>
            </motion.div>

            <Modal
                isOpen={isSuccessOpen}
                onOpenChange={(open) => !open && setIsSuccessOpen(false)}
            >
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
                                <Heading
                                    level="h4"
                                    extendClass="!font-semibold"
                                >
                                    {t(
                                        'static',
                                        'footer.subscribe_SuccessTitle',
                                    )}
                                </Heading>
                                <Paragraph
                                    level="p2"
                                    extendClass="text-secondary"
                                >
                                    {t(
                                        'static',
                                        'footer.subscribe_SuccessMsg',
                                    )}
                                </Paragraph>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="flex w-full flex-col gap-2 px-8 pb-8">
                                    <Button
                                        label={t(
                                            'static',
                                            'footer.subscribe_SuccessCta',
                                        )}
                                        color="orange"
                                        onClick={() => setIsSuccessOpen(false)}
                                    />
                                </div>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
};

export default FooterSubscribe;
