import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { usePageText } from '@/hooks/usePageText';

import { Paragraph } from '../../typography/Paragraph';

import { itemVariants, listVariants, sectionVariants } from './variants';

const links = [
    { href: '/excursions', key: 'excursions', label: 'footer.links_1' },
    { href: '/calendar', key: 'calendar', label: 'footer.links_2' },
    { href: '/about', key: 'about', label: 'footer.links_3' },
    { href: '/contact', key: 'contact', label: 'footer.links_4' },
];

const FooterQuickLinks = () => {
    const { t } = usePageText();
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <motion.div
            className="flex flex-1 flex-col gap-4"
            variants={sectionVariants}
        >
            <motion.div variants={itemVariants}>
                <Paragraph level="p1" extendClass="font-bold text-white">
                    {t('static', 'footer.linksTitle')}
                </Paragraph>
            </motion.div>
            <motion.div
                className="-ml-3 flex flex-col gap-1"
                onMouseLeave={() => setHovered(null)}
                variants={listVariants}
            >
                {links.map((linkItem) => (
                    <motion.div
                        key={linkItem.key}
                        variants={itemVariants}
                        className="w-fit"
                    >
                        <Link
                            href={linkItem.href}
                            onMouseEnter={() => setHovered(linkItem.key)}
                            className="relative block w-fit rounded-md px-3 py-1"
                        >
                            {hovered === linkItem.key && (
                                <motion.span
                                    layoutId="footerLinksPill"
                                    aria-hidden="true"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 380,
                                        damping: 32,
                                    }}
                                    className="absolute inset-0 -z-10 rounded-md bg-white/10 ring-1 ring-white/10"
                                />
                            )}
                            {/* <Paragraph
                                level="p2"
                                extendClass="text-white cursor-pointer"
                            >
                                {t('static', linkItem.label)}
                            </Paragraph> */}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default FooterQuickLinks;
