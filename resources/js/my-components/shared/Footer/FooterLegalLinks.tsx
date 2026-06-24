import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { usePageText } from '@/hooks/usePageText';

import { Paragraph } from '../../typography/Paragraph';

import { itemVariants, listVariants, sectionVariants } from './variants';

const legalLinks = [
    {
        href: '/legal#acceptance-of-terms',
        key: 'terms',
        label: 'footer.legal_1',
    },
    { href: '/privacy', key: 'privacy', label: 'footer.legal_2' },
    { href: '/gdpr', key: 'gdpr', label: 'footer.legal_3' },
    {
        href: '/legal#cancellation-refunds',
        key: 'cancellation',
        label: 'footer.legal_4',
    },
];

const resetCookieConsent = () => {
    document
        .querySelectorAll('#cookies-policy, [data-cookie-consent]')
        .forEach((el) => el.remove());
    (
        window as unknown as {
            LaravelCookieConsent?: { reset: () => void };
        }
    ).LaravelCookieConsent?.reset();
};

const FooterLegalLinks = () => {
    const { t } = usePageText();
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <motion.div
            className="flex flex-1 flex-col gap-4"
            variants={sectionVariants}
        >
            <motion.div variants={itemVariants}>
                <Paragraph level="p1" extendClass="font-bold text-white">
                    {t('static', 'footer.legalTitle')}
                </Paragraph>
            </motion.div>
            <motion.div
                className="-ml-3 flex flex-col gap-1"
                onMouseLeave={() => setHovered(null)}
                variants={listVariants}
            >
                {legalLinks.map((legalItem) => (
                    <motion.div
                        key={legalItem.key}
                        variants={itemVariants}
                        className="w-fit"
                    >
                        <Link
                            href={legalItem.href}
                            onMouseEnter={() => setHovered(legalItem.key)}
                            className="relative block w-fit rounded-md px-3 py-1"
                        >
                            {hovered === legalItem.key && (
                                <motion.span
                                    layoutId="footerLegalPill"
                                    aria-hidden="true"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 380,
                                        damping: 32,
                                    }}
                                    className="absolute inset-0 -z-10 rounded-md bg-white/10 ring-1 ring-white/10"
                                />
                            )}
                            <Paragraph
                                level="p2"
                                extendClass="text-white cursor-pointer"
                            >
                                {t('static', legalItem.label)}
                            </Paragraph>
                        </Link>
                    </motion.div>
                ))}
                <motion.button
                    type="button"
                    variants={itemVariants}
                    onMouseEnter={() => setHovered('cookies')}
                    onClick={resetCookieConsent}
                    className="relative w-fit rounded-md px-3 py-1 text-left"
                >
                    {hovered === 'cookies' && (
                        <motion.span
                            layoutId="footerLegalPill"
                            aria-hidden="true"
                            transition={{
                                type: 'spring',
                                stiffness: 380,
                                damping: 32,
                            }}
                            className="absolute inset-0 -z-10 rounded-md bg-white/10 ring-1 ring-white/10"
                        />
                    )}
                    <Paragraph
                        level="p2"
                        extendClass="text-white cursor-pointer"
                    >
                        {t('static', 'footer.cookies')}
                    </Paragraph>
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default FooterLegalLinks;
