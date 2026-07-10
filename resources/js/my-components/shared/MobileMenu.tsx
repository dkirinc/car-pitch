import { Drawer } from '@heroui/react';
import { Link } from '@inertiajs/react';

import { usePageText } from '@/hooks/usePageText';

import logo from '../../../assets/logo.png';
import { Paragraph } from '../typography/Paragraph';

type Props = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function MobileMenu({ isOpen, onOpenChange }: Props) {
    const { t } = usePageText();

    const NAV_ITEMS = [
        { label: t('static', 'nav.pocetna'), href: '/' },
        { label: t('static', 'nav.vozila'), href: '/cars' },
        { label: t('static', 'nav.oNama'), href: '/about' },
        { label: t('static', 'nav.blog'), href: '/blogs' },
        { label: t('static', 'nav.kontakt'), href: '/contact' },
    ];

    const close = () => onOpenChange(false);

    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog className="w-full bg-bg-surface sm:max-w-sm">
                        <Drawer.Header className="flex items-center justify-between border-b border-border-default px-6 py-4">
                            <Link href="/" onClick={close}>
                                <img src={logo} alt={t('static', 'brand.name')} className="h-8 w-auto" />
                            </Link>
                            <Drawer.CloseTrigger className="text-text-secondary transition-colors hover:text-text-primary" />
                        </Drawer.Header>

                        <Drawer.Body className="flex flex-col px-6 py-6">
                            <nav className="flex flex-col">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={close}
                                        className="border-b border-border-default py-4 last:border-b-0"
                                    >
                                        <Paragraph
                                            level="p2"
                                            extendClass="font-semibold text-text-secondary uppercase tracking-[0.12em] transition-colors hover:text-gold"
                                        >
                                            {item.label}
                                        </Paragraph>
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    onClick={close}
                                    className="block w-full bg-gold py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.15em] text-bg-base transition-colors hover:bg-gold-dark"
                                >
                                    {t('static', 'header.ctaLabel')}
                                </Link>
                            </div>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}
