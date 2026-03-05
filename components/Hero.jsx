'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import AnimatedText from './AnimatedText';
import Cube from './cube';
import GithubActivity from './github-contribution';
import Technologies from './Technologies';

const TimeLine = dynamic(() => import('./timeline'), { ssr: false });

const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-start md:justify-between mx-auto max-w-7xl w-full md:min-h-[calc(100vh-75px)] px-6 sm:px-12 md:px-20 gap-8 md:gap-0 py-10 md:py-0">
                <div className="flex flex-col gap-2 sm:gap-4 text-center md:text-left z-10 w-full md:w-1/2 pt-10 md:pt-0">
                    <AnimatedText text="Heyyy, 👋" />
                    <AnimatedText text="Taufeeq Here." />
                    <span>
                        I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on creating responsive web applications and exploring new technologies in the NextJs ecosystem.
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 pl-0 md:pl-20 outline-none z-10 scale-75 lg:scale-100 order-last md:order-none h-[280px] md:h-auto">
                    <Cube />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full py-12 px-6">
                <Technologies />
            </div>
            <div className="flex flex-col items-center justify-center w-full py-12 px-6">
                <GithubActivity />
            </div>
            <div className="flex flex-col items-center justify-center w-full py-12 px-6">
                <TimeLine />
            </div>
        </div>
    );
};

export default Hero;
