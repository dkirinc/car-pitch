import { usePage } from '@inertiajs/react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';

import Header from '@/my-components/shared/Header';
import MobileMenu from '@/my-components/shared/MobileMenu';

export default function HomepageLayout({ children }: { children: ReactNode }) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen overflow-x-hidden bg-bg-base">
            <Header onMobileMenuToggle={setMobileMenuOpen} />
            <motion.main
                key={url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                {children}
            </motion.main>
            <MobileMenu isOpen={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
        </div>
    );
}
