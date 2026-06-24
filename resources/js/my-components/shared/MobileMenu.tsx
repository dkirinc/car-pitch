import { Drawer } from '@heroui/react';
import { Link, router, usePage } from '@inertiajs/react';
import { Ticket } from 'lucide-react';

import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { usePageText } from '@/hooks/usePageText';
import { logout } from '@/routes';
import { type User } from '@/types';

import { Paragraph } from '../typography/Paragraph';

const NAV_ITEMS = [
    { name: 'Excursions', href: '/excursions' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

type AuthUser = User & { can_access_admin?: boolean };

type PageProps = {
    auth: { user: AuthUser | null };
};

type Props = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function MobileMenu({ isOpen, onOpenChange }: Props) {
    const { t } = usePageText();
    const { auth } = usePage<PageProps>().props;
    const cleanup = useMobileNavigation();

    const close = () => onOpenChange(false);

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog className="w-full bg-white sm:max-w-sm">
                        <Drawer.Header className="flex items-start justify-between">
                            <Link href="/" onClick={close}>
                                <img
                                    src="/images/krkboat-logo-resized.png"
                                    alt=""
                                    className="size-10"
                                />
                            </Link>
                            <Drawer.CloseTrigger className="text-foreground" />
                        </Drawer.Header>
                        <Drawer.Body className="flex flex-col gap-6">
                            {/* Main nav */}
                            <nav className="flex flex-col">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={close}
                                        className="border-b border-gray-200 py-3 last:border-b-0"
                                    >
                                        <Paragraph
                                            level="p2"
                                            extendClass="font-medium"
                                        >
                                            {item.name}
                                        </Paragraph>
                                    </Link>
                                ))}
                            </nav>

                            {/* Account */}
                            <div className="flex flex-col gap-2">
                                <Paragraph
                                    level="p3"
                                    extendClass="font-semibold text-muted-foreground uppercase tracking-wide"
                                >
                                    {t('static', 'nav.account')}
                                </Paragraph>
                                <nav className="flex flex-col">
                                    {auth.user ? (
                                        <>
                                            <Link
                                                href="/profile"
                                                onClick={close}
                                                className="py-2"
                                            >
                                                <Paragraph level="p2">
                                                    {t('static', 'nav.myProfile')}
                                                </Paragraph>
                                            </Link>
                                            <Link
                                                href="/reservations"
                                                onClick={close}
                                                className="py-2"
                                            >
                                                <Paragraph level="p2">
                                                    {t('static', 'nav.myTrips')}
                                                </Paragraph>
                                            </Link>
                                            {auth.user.can_access_admin && (
                                                <a
                                                    href="/admin"
                                                    className="py-2"
                                                >
                                                    <Paragraph level="p2">
                                                        {t('static', 'nav.adminPanel')}
                                                    </Paragraph>
                                                </a>
                                            )}
                                            <Link
                                                href={logout()}
                                                as="button"
                                                onClick={handleLogout}
                                                className="py-2 text-left"
                                            >
                                                <Paragraph level="p2">
                                                    {t('static', 'nav.logout')}
                                                </Paragraph>
                                            </Link>
                                        </>
                                    ) : (
                                        <Link
                                            href="/login"
                                            onClick={close}
                                            className="py-2"
                                        >
                                            <Paragraph level="p2">
                                                {t('static', 'nav.login')}
                                            </Paragraph>
                                        </Link>
                                    )}
                                </nav>
                            </div>

                            {/* Top CTAs */}
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="/calendar"
                                    onClick={close}
                                    className="bg-primary-blue flex items-center justify-center gap-2 rounded-xl py-3"
                                >
                                    <Ticket className="size-4 text-white" />
                                    <Paragraph
                                        level="p3"
                                        extendClass="text-white font-medium"
                                    >
                                        {t('static', 'nav.bookTrip')}
                                    </Paragraph>
                                </Link>
                            </div>

                            <div className="mt-auto flex flex-col gap-4 pt-6">
                                <div className="h-px w-full bg-gray-200" />
                            </div>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}
