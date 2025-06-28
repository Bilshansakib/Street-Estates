import Navbar from '@/components/Navbar';
import { NAVBAR_HEIGHT } from '@/lib/constants';
import React from 'react';
import HeroSection from './landing/HeroSection';
function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar/>
            <HeroSection />
             <main
        className={`h-full flex w-full flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
        </div>
    );
}

export default layout;