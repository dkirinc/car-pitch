import { usePage } from '@inertiajs/react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';

import MobileMenu from '../shared/MobileMenu';
import VerifyEmailSuccessModal from '../shared/VerifyEmailSuccessModal';

import Header from './Header';

export default function Welcome({
    children,
    extendClass,
}: {
    children: ReactNode;
    extendClass?: string;
    footer?: 'full' | 'top' | 'main' | 'none';
}) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State u Layoutu

    const handleMobileMenuToggle = (open: boolean) => {
        setMobileMenuOpen(open);
    };

    return (
        <div
            className={`flex min-h-screen flex-col content-center items-center justify-start overflow-x-clip bg-background ${extendClass}`}
        >
            <div className="flex w-full max-w-7xl flex-col">
                <Header onMobileMenuToggle={handleMobileMenuToggle} />
                <motion.div
                    key={url}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="relative flex w-full flex-col content-center items-center justify-center gap-30 px-4 pt-32 sm:px-6 lg:px-8"
                >
                    {children}
                </motion.div>
                <MobileMenu
                    isOpen={mobileMenuOpen}
                    onOpenChange={handleMobileMenuToggle}
                />
            </div>
            <VerifyEmailSuccessModal />
        </div>
    );
}
