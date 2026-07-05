import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import AboutSection from '@/my-components/homepage/AboutSection';
import BlogSection from '@/my-components/homepage/BlogSection';
import CarSellCarouselSection from '@/my-components/homepage/CarSellCarouselSection';
import HeroSection from '@/my-components/homepage/HeroSection';
import IndexInfoSection from '@/my-components/homepage/IndexInfoSection';
import type { IBlogPost, IBrand, ICar, IStats } from '@/types/models';

type Props = {
    featuredCars: ICar[];
    brands: IBrand[];
    stats: IStats;
    latestPosts: IBlogPost[];
};

function Welcome({ featuredCars, brands, stats, latestPosts }: Props) {
    return (
        <>
            <Head title="Auto Lider — Premium vozila, Otok Krk" />
            <HeroSection />
            <IndexInfoSection stats={stats} brands={brands} />
            <CarSellCarouselSection cars={featuredCars} />
            <AboutSection />
            <BlogSection posts={latestPosts} />
        </>
    );
}

Welcome.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default Welcome;
