import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import AboutCtaSection from '@/my-components/about/AboutCtaSection';
import AboutHeroSection from '@/my-components/about/AboutHeroSection';
import AboutIntroSection from '@/my-components/about/AboutIntroSection';
import AboutQuoteSection from '@/my-components/about/AboutQuoteSection';
import AboutServicesSection from '@/my-components/about/AboutServicesSection';
import AboutStatsSection from '@/my-components/about/AboutStatsSection';
import AboutTimelineSection from '@/my-components/about/AboutTimelineSection';

function About() {
    return (
        <>
            <Head title="O nama — Auto Lider" />
            <AboutHeroSection />
            <AboutStatsSection />
            <AboutIntroSection />
            <AboutTimelineSection />
            <AboutServicesSection />
            <AboutQuoteSection />
            <AboutCtaSection />
        </>
    );
}

About.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default About;
