import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DiscoverSection from './DiscoverSection';
import CallToActionSection from './CallToActionSection';

const page = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <DiscoverSection />
            <CallToActionSection />
        </div>
    );
};

export default page;