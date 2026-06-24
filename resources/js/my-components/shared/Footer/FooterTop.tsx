import { router } from '@inertiajs/react';

import { usePageText } from '@/hooks/usePageText';

import footerImage from '../../../../assets/footerVojga.jpg';
import { Heading } from '../../typography/Heading';
import { Paragraph } from '../../typography/Paragraph';
import { Button } from '../Button';

const FooterTop = () => {
    const { t } = usePageText();

    return (
        <div className="relative flex w-full items-center justify-center p-10 py-20">
            <div className="absolute top-0 left-1/2 h-full w-screen -translate-x-1/2">
                <img
                    src={footerImage}
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="to-footer-dark absolute inset-0 bg-linear-to-b from-black/20" />
            </div>
            <div className="relative z-10 flex w-full content-between justify-between gap-4">
                <div className="hidden flex-1 md:block"></div>
                <div className="flex flex-1 flex-col items-center md:items-start">
                    <div
                        className="flex max-w-100 flex-col gap-6 rounded-lg border border-border p-10 md:max-w-120"
                        style={{
                            background:
                                'linear-gradient(285deg, rgba(231, 125, 0, 0.20) 11.96%, rgba(255, 255, 255, 0.20) 84.24%), #FFF',
                        }}
                    >
                        <Heading
                            level="h2"
                            extendClass="hidden md:block !font-semibold max-w-100 !text-[2.5rem] !leading-[2.5rem]"
                        >
                            {t('static', 'footer.contact_H')}
                        </Heading>
                        <Heading
                            level="h4"
                            extendClass="md:hidden !font-semibold max-w-100"
                        >
                            {t('static', 'footer.contact_H')}
                        </Heading>
                        <Paragraph level="p2" extendClass="">
                            {t('static', 'footer.contact_P')}
                        </Paragraph>
                        <div>
                            <Button
                                label={t('static', 'actions.contactUs')}
                                onClick={() => router.visit('/contact')}
                                color="orange"
                                extendClass="grow-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
