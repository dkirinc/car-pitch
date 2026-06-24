import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

import Layout from '@/my-components/shared/Layout';
import { Heading } from '@/my-components/typography/Heading';

function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <Heading level="h1" extendClass="text-center">
                    Welcome to CarPitch!
                </Heading>
            </div>
        </>
    );
}

Welcome.layout = (page: ReactNode) => (
    <Layout footer="full">
        {page}
    </Layout>
);

export default Welcome;
