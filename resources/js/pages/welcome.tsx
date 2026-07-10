import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import AboutSection from '@/my-components/homepage/AboutSection';
import BlogSection from '@/my-components/homepage/BlogSection';
import CarSellCarouselSection from '@/my-components/homepage/CarSellCarouselSection';
import ContactSection from '@/my-components/homepage/ContactSection';
import HeroSection from '@/my-components/homepage/HeroSection';
import IndexInfoSection from '@/my-components/homepage/IndexInfoSection';
import ReviewsSection from '@/my-components/homepage/ReviewsSection';
import type { IBlogPost, IBrand, ICar, IReview, IStats } from '@/types/models';

type Props = {
    featuredCars: ICar[];
    brands: IBrand[];
    stats: IStats;
    latestPosts: IBlogPost[];
    reviews: IReview[];
};

function Welcome({ featuredCars, brands, stats, latestPosts, reviews }: Props) {
    console.log('Welcome page props:', {
        featuredCars,
        brands,
        stats,
        latestPosts,
        reviews,
    });
    return (
        <>
            <Head title="Auto Lider — Premium vozila, Otok Krk" />
            <HeroSection />
            <IndexInfoSection stats={stats} brands={brands} />
            <CarSellCarouselSection cars={featuredCars} />
            <AboutSection />
            <BlogSection posts={latestPosts} />
            <ReviewsSection reviews={reviews} />
            <ContactSection />
        </>
    );
}

Welcome.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default Welcome;
