import { Link } from '@inertiajs/react';
import { Menu as MenuIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { usePageText } from '@/hooks/usePageText';

import logo from '../../../assets/logo.png';
import { Paragraph } from '../typography/Paragraph';

const SCROLL_THRESHOLD = 10;

type Props = {
    onMobileMenuToggle: (open: boolean) => void;
};

const Header = ({ onMobileMenuToggle }: Props) => {
    const { t } = usePageText();

    const NAV_ITEMS = [
        { label: t('static', 'nav.vozila'), href: '/cars' },
        { label: t('static', 'nav.oNama'), href: '/about' },
        { label: t('static', 'nav.blog'), href: '/blogs' },
        { label: t('static', 'nav.kontakt'), href: '/contact' },
    ];

    const [isScrolled, setIsScrolled] = useState(
        () =>
            typeof window !== 'undefined' && window.scrollY > SCROLL_THRESHOLD,
    );
    const [hoveredKey, setHoveredKey] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => {
            const next = window.scrollY > SCROLL_THRESHOLD;
            setIsScrolled((prev) => (prev === next ? prev : next));
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <nav
                aria-label={t('static', 'header.ariaLabel')}
                className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-xl border px-6 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
                    isScrolled
                        ? 'border-white/10 bg-bg-base/80 shadow-lg backdrop-blur-md'
                        : 'border-transparent bg-transparent'
                }`}
            >
                {/* Logo */}
                <div className="flex flex-1 items-center">
                    <Link href="/">
                        <img
                            src={logo}
                            alt={t('static', 'brand.name')}
                            className="h-8 w-auto"
                        ></img>
                    </Link>
                </div>

                {/* Desktop nav */}
                <div
                    className="relative hidden flex-1 justify-center md:flex"
                    onMouseLeave={() => setHoveredKey(null)}
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onMouseEnter={() => setHoveredKey(item.label)}
                            className="relative rounded-lg px-4 py-1.5"
                        >
                            {hoveredKey === item.label && (
                                <motion.span
                                    layoutId="navHoverPill"
                                    aria-hidden="true"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 380,
                                        damping: 32,
                                    }}
                                    className="absolute inset-0 -z-10 rounded-lg border-b-2 border-gold"
                                />
                            )}
                            <Paragraph
                                level="p3"
                                extendClass="text-text-secondary font-semibold uppercase tracking-[0.1em]"
                            >
                                {item.label}
                            </Paragraph>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden flex-1 items-center justify-end md:flex">
                    <Link
                        href="/contact"
                        className="border border-gold-border px-5 py-2 text-[0.75rem] font-bold tracking-[0.15em] text-gold uppercase transition-colors duration-200 hover:border-gold/60 hover:bg-gold-subtle"
                    >
                        {t('static', 'header.ctaLabel')}
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        type="button"
                        onClick={() => onMobileMenuToggle(true)}
                        aria-label={t('static', 'header.openMenuAria')}
                        className="text-text-primary"
                    >
                        <MenuIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
