import { motion } from 'motion/react';

import { usePageText } from '@/hooks/usePageText';

import { Paragraph } from '../../typography/Paragraph';
import FacebookIcon from '../Footer/icons/FacebookIcon';
import InstagramIcon from '../Footer/icons/InstagramIcon';
import LinkedinIcon from '../Footer/icons/LinkedinIcon';
import YoutubeIcon from '../Footer/icons/YoutubeIcon';

import { itemVariants, listVariants } from './variants';

const socials = [
    { Icon: FacebookIcon, label: 'Facebook' },
    { Icon: InstagramIcon, label: 'Instagram' },
    { Icon: LinkedinIcon, label: 'LinkedIn' },
    { Icon: YoutubeIcon, label: 'YouTube' },
];

const FooterSocials = () => {
    const { t } = usePageText();

    return (
        <motion.div
            className="z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.div variants={itemVariants}>
                <Paragraph level="p4" extendClass="text-white z-10">
                    {t('static', 'footer.copyright')}
                </Paragraph>
            </motion.div>
            <motion.div className="flex gap-3" variants={listVariants}>
                {socials.map(({ Icon, label }) => (
                    <motion.a
                        key={label}
                        variants={itemVariants}
                        href="#"
                        className="flex size-5 items-center justify-center text-white transition-colors hover:text-primary/80"
                        aria-label={label}
                    >
                        <Icon className="size-5" />
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default FooterSocials;
