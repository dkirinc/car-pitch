import { motion } from 'motion/react';

import { Paragraph } from '../../typography/Paragraph';

import { itemVariants, sectionVariants } from './variants';

const FooterContactInfo = () => (
    <motion.div
        className="flex flex-1 flex-col gap-3"
        variants={sectionVariants}
    >
        <motion.div
            className="flex content-center items-center gap-2 lg:flex-1"
            variants={itemVariants}
        >
            <img
                src="/images/krkboat-logo-resized.png"
                alt="Logo"
                className="h-auto w-10"
            />
        </motion.div>
        <motion.div className="flex flex-col gap-1" variants={itemVariants}>
            <Paragraph level="p2" extendClass=" text-white">
                Krk Harbor, Krk
            </Paragraph>
            <Paragraph level="p2" extendClass=" text-white">
                51500, Croatia
            </Paragraph>
        </motion.div>
        <motion.div variants={itemVariants}>
            <Paragraph level="p2" extendClass=" text-white">
                +385 51 XXX XXX
            </Paragraph>
        </motion.div>
        <motion.div variants={itemVariants}>
            <Paragraph level="p2" extendClass=" text-white">
                info@krkboat.com
            </Paragraph>
        </motion.div>
    </motion.div>
);

export default FooterContactInfo;
