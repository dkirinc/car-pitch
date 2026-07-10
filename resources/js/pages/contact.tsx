import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import ContactPageSection from '@/my-components/contact/ContactPageSection';
import type { IBrand } from '@/types/models';

type Props = {
    brands: IBrand[];
};

function Contact({ brands }: Props) {
    return (
        <>
            <Head title="Kontakt — Auto Lider" />
            <ContactPageSection brands={brands} />
        </>
    );
}

Contact.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default Contact;
