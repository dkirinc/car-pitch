import { motion } from 'motion/react';

import FooterContactInfo from './FooterContactInfo';
import FooterLegalLinks from './FooterLegalLinks';
import FooterQuickLinks from './FooterQuickLinks';
import FooterSocials from './FooterSocials';
import FooterSubscribe from './FooterSubscribe';
import { sectionContainerVariants } from './variants';

const FooterMain = () => (
    <div className="bg-footer-dark relative flex w-full flex-col content-center items-center gap-10 px-4 pt-12 pb-10 md:px-10">
        <div className="bg-footer-dark absolute top-0 h-full w-screen"></div>
        <motion.div
            className="z-10 flex w-full flex-col content-start items-start justify-between gap-4 md:flex-row"
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
        >
            <FooterContactInfo />
            <FooterQuickLinks />
            {/* <FooterLegalLinks />
            <FooterSubscribe /> */}
        </motion.div>
        <motion.div
            className="z-10 h-px w-full origin-left bg-white/15"
            initial={{ opacity: 0, scaleX: 0.4 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <FooterSocials />
    </div>
);

export default FooterMain;
