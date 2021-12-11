import React from 'react';
import HeroParticles from './HeroParticles';
import HeroLetter from './HeroLetter';

function Hero() {
    return (
        // Hero Text Start
        <section id='hero-section' className='section relative flex justify-center items-center'>
            {/* Particles Start */}

            <HeroParticles />

            {/* Particles End */}
            {/* Text Box Start */}
            <div className='z-10 inline-block px-8 pointer-events-none'>
                <span className='text-html -ml-8'>&lt;body&gt;</span>
                <br />
                <span className='text-html -ml-4'>&lt;h1&gt;</span>
                <h1 className='text-header-lg text-primary-yellow pointer-events-auto'>
                    {'Hi,'.split('').map((letter) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter text={letter} />;
                    })}
                </h1>
                <br />
                <h1 className='text-header-lg bg-primary-yellow text-primary-dark p-2 mt-2 pointer-events-auto'>
                    {"I'm Ole Urfels,".split('').map((letter) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter text={letter} />;
                    })}
                </h1>
                <br />
                <h1 className='text-header-lg text-primary-yellow pointer-events-auto'>
                    {'web developer'.split('').map((letter) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter text={letter} />;
                    })}
                </h1>
                <span className='text-html -ml-4 mt-1'>&lt;/h1&gt;</span>
                <br />
                <span className='text-html -ml-4'>&lt;p&gt;</span>
                <p className='text-primary-purple text-base xs:text-[1.2rem] md:text-[2rem] lg:text-[2.5rem] font-black pointer-events-auto'>
                    {'I build things for the web.'.split('').map((letter) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter text={letter} />;
                    })}
                </p>
                <span className='text-html -ml-4 mt-2'>&lt;/p&gt;</span>
            </div>
            {/* Text Box End */}
        </section>
        //  Hero Text End
    );
}

export default Hero;
