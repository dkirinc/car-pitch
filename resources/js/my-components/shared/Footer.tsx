import { Link } from '@inertiajs/react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

import logo from '../../../assets/logo.png';

function FacebookIcon() {
    return (
        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
        </svg>
    );
}

export default function Footer() {
    const { t } = usePageText();
    const year = new Date().getFullYear();

    const NAV_LINKS = [
        { label: t('static', 'footer.navProdajaVozila'), href: '/cars' },
        { label: t('static', 'nav.oNama'), href: '/about' },
        { label: t('static', 'nav.blog'), href: '/blog' },
        { label: t('static', 'nav.kontakt'), href: '/contact' },
    ];

    return (
        <footer className="border-t border-border-default bg-bg-surface">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Main grid */}
                <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3 md:gap-16">
                    {/* Col 1 — Brand */}
                    <div className="flex flex-col gap-5">
                        <Link href="/">
                            <img src={logo} alt={t('static', 'brand.name')} className="h-10 w-auto" />
                        </Link>
                        <Paragraph level="p2" extendClass="text-text-secondary max-w-xs">
                            {t('static', 'footer.tagline')}
                        </Paragraph>
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t('static', 'footer.facebookAria')}
                                className="flex size-9 items-center justify-center border border-border-default text-text-muted transition-colors duration-200 hover:border-gold-border hover:text-gold"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t('static', 'footer.youtubeAria')}
                                className="flex size-9 items-center justify-center border border-border-default text-text-muted transition-colors duration-200 hover:border-gold-border hover:text-gold"
                            >
                                <YouTubeIcon />
                            </a>
                        </div>
                    </div>

                    {/* Col 2 — Navigation */}
                    <div className="flex flex-col gap-4">
                        <Heading level="h6" extendClass="text-text-muted uppercase tracking-[0.2em]">
                            {t('static', 'footer.navTitle')}
                        </Heading>
                        <nav className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="w-fit text-[0.9rem] text-text-secondary transition-colors duration-200 hover:text-gold"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 3 — Contact */}
                    <div className="flex flex-col gap-4">
                        <Heading level="h6" extendClass="text-text-muted uppercase tracking-[0.2em]">
                            {t('static', 'footer.contactTitle')}
                        </Heading>
                        <div className="flex flex-col gap-3">
                            <a
                                href={t('static', 'contactInfo.phoneHref')}
                                className="w-fit text-[0.9rem] text-text-secondary transition-colors duration-200 hover:text-gold"
                            >
                                {t('static', 'contactInfo.phone')}
                            </a>
                            <a
                                href={t('static', 'contactInfo.emailHref')}
                                className="w-fit text-[0.9rem] text-text-secondary transition-colors duration-200 hover:text-gold"
                            >
                                {t('static', 'contactInfo.email')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-3 border-t border-border-default py-6 md:flex-row">
                    <Paragraph level="p3" extendClass="text-text-muted">
                        © {year} {t('static', 'footer.copyrightSuffix')}
                    </Paragraph>
                    <Paragraph level="p3" extendClass="text-text-muted">
                        {t('static', 'footer.location')}
                    </Paragraph>
                </div>
            </div>
        </footer>
    );
}
