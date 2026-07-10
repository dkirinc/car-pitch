import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import CarsListSection from '@/my-components/cars/CarsListSection';
import type { IBrand, ICar } from '@/types/models';

type Props = {
    cars: ICar[];
    brands: IBrand[];
};

function Cars({ cars, brands }: Props) {
    return (
        <>
            <Head title="Prodaja vozila — Auto Lider" />
            <CarsListSection cars={cars} brands={brands} />
        </>
    );
}

Cars.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default Cars;
