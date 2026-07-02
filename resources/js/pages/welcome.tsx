import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import CarSellCarouselSection from '@/my-components/homepage/CarSellCarouselSection';
import HeroSection from '@/my-components/homepage/HeroSection';
import IndexInfoSection from '@/my-components/homepage/IndexInfoSection';
import HomepageLayout from '@/layouts/homepage-layout';
import type { IBrand, ICar, IStats } from '@/types/models';

type Props = {
    featuredCars: ICar[];
    brands: IBrand[];
    stats: IStats;
};

function Welcome({ featuredCars, brands, stats }: Props) {
    return (
        <>
            <Head title="Auto Lider — Premium vozila, Otok Krk" />
            <HeroSection />
            <IndexInfoSection stats={stats} brands={brands} />
            <CarSellCarouselSection cars={featuredCars} />
        </>
    );
}

Welcome.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default Welcome;
