import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import CarDetailHeroSection from '@/my-components/car-detail/CarDetailHeroSection';
import CarDetailSection from '@/my-components/car-detail/CarDetailSection';
import type { ICarDetail } from '@/types/models';

type Props = {
    car: ICarDetail;
};

function CarDetail({ car }: Props) {
    return (
        <>
            <Head title={`${car.brand.name} ${car.model} — Auto Lider`} />
            <CarDetailHeroSection car={car} />
            <CarDetailSection car={car} />
        </>
    );
}

CarDetail.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default CarDetail;
