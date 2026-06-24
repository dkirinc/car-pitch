import { Link, router } from '@inertiajs/react';
import { CalendarSearch, Menu as MenuIcon, Ticket } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

import { usePageText } from '@/hooks/usePageText';

import logo from '../../../assets/logo.png';

import { Paragraph } from '../typography/Paragraph';

const SCROLL_THRESHOLD = 10;

const NAV_ITEMS = [
    { name: 'Prodaja Vozila', href: '/excursions' },
    { name: 'Blog', href: '/calendar' },
    { name: 'O Nama', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
];

type Props = {
    onMobileMenuToggle: (open: boolean) => void;
};

const Header = ({ onMobileMenuToggle }: Props) => {
    const { t } = usePageText();
    const prefersReducedMotion = useReducedMotion();

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
                aria-label="Global"
                className={`max-w-8xl mx-auto flex items-center justify-between rounded-xl border px-6 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
                    isScrolled
                        ? 'border-white/50 bg-white/60 shadow-lg backdrop-blur-md'
                        : 'border-transparent bg-transparent'
                }`}
            >
                <div className="flex w-fit flex-1 content-center items-center gap-2 md:flex-1 md:justify-center">
                    <Link href="/">
                        <motion.img
                            src={logo}
                            alt=""
                            initial={false}
                            animate={{
                                width: isScrolled ? 40 : 150,
                                height: isScrolled ? 40 : 72,
                            }}
                            whileHover={
                                prefersReducedMotion
                                    ? undefined
                                    : { rotate: [0, -8, 7, -4, 3, -1, 0] }
                            }
                            transition={
                                prefersReducedMotion
                                    ? { duration: 0 }
                                    : {
                                          width: {
                                              type: 'spring',
                                              stiffness: 350,
                                              damping: 90,
                                          },
                                          height: {
                                              type: 'spring',
                                              stiffness: 350,
                                              damping: 90,
                                          },
                                          rotate: {
                                              duration: 0.45,
                                              ease: 'easeInOut',
                                          },
                                      }
                            }
                        />
                    </Link>
                </div>

                <div
                    className="relative hidden md:flex md:flex-1"
                    onMouseLeave={() => setHoveredKey(null)}
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onMouseEnter={() => setHoveredKey(item.name)}
                            className="relative rounded-xl px-4 py-1.5"
                        >
                            {hoveredKey === item.name && (
                                <motion.span
                                    layoutId="navHoverPill"
                                    aria-hidden="true"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 380,
                                        damping: 32,
                                    }}
                                    className="absolute inset-0 -z-10 rounded-xl border-b-2 border-gold shadow-sm"
                                />
                            )}
                            <Paragraph level="p1">
                                {item.name.toUpperCase()}
                            </Paragraph>
                        </Link>
                    ))}
                </div>

                <div className="flex gap-2 md:hidden">
                    <button
                        type="button"
                        onClick={() => router.visit('/calendar')}
                        aria-label={t('static', 'nav.bookTrip')}
                        className="flex items-center rounded-md bg-primary p-2"
                    >
                        <CalendarSearch
                            aria-hidden="true"
                            size={14}
                            color="white"
                        />
                    </button>
                    <button
                        type="button"
                        onClick={() => onMobileMenuToggle(true)}
                        aria-label={t('static', 'nav.openMenu')}
                    >
                        <MenuIcon
                            aria-hidden="true"
                            className="size-6 text-foreground"
                        />
                    </button>
                </div>

                <div className="hidden content-center items-center justify-center gap-4 md:flex md:flex-1 md:justify-end">
                    <Link
                        href="/calendar"
                        className="hidden items-center gap-2 rounded-sm bg-primary p-2 text-sm text-white lg:flex"
                    >
                        <Ticket className="size-4" />
                        {t('static', 'nav.bookTrip')}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
