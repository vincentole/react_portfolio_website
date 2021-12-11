import React from 'react';
import HeroParticles from './HeroParticles';

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
                    <span className='hover-jello-horizontal'>H</span>
                    <span className='hover-jello-horizontal'>i</span>
                    <span className='hover-jello-horizontal'>,</span>
                </h1>
                <br />
                <h1 className='text-header-lg bg-primary-yellow text-primary-dark p-2 mt-2 pointer-events-auto'>
                    <span className='hover-jello-horizontal'>I</span>
                    <span className='hover-jello-horizontal'>'</span>
                    <span className='hover-jello-horizontal'>m</span>&nbsp;
                    <span className='hover-jello-horizontal'>O</span>
                    <span className='hover-jello-horizontal'>l</span>
                    <span className='hover-jello-horizontal'>e</span>&nbsp;
                    <span className='hover-jello-horizontal'>U</span>
                    <span className='hover-jello-horizontal'>r</span>
                    <span className='hover-jello-horizontal'>f</span>
                    <span className='hover-jello-horizontal'>e</span>
                    <span className='hover-jello-horizontal'>l</span>
                    <span className='hover-jello-horizontal'>s</span>
                    <span className='hover-jello-horizontal'>,</span>
                </h1>
                <br />
                <h1 className='text-header-lg text-primary-yellow pointer-events-auto'>
                    <span className='hover-jello-horizontal'>w</span>
                    <span className='hover-jello-horizontal'>e</span>
                    <span className='hover-jello-horizontal'>b</span>&nbsp;
                    <span className='hover-jello-horizontal'>d</span>
                    <span className='hover-jello-horizontal'>e</span>
                    <span className='hover-jello-horizontal'>v</span>
                    <span className='hover-jello-horizontal'>e</span>
                    <span className='hover-jello-horizontal'>l</span>
                    <span className='hover-jello-horizontal'>o</span>
                    <span className='hover-jello-horizontal'>p</span>
                    <span className='hover-jello-horizontal'>e</span>
                    <span className='hover-jello-horizontal'>r</span>
                </h1>
                <span className='text-html -ml-4 mt-1'>&lt;/h1&gt;</span>
                <br />
                <span className='text-html -ml-4'>&lt;p&gt;</span>
                <p className='text-primary-purple text-base xs:text-[1.2rem] md:text-[2rem] lg:text-[2.5rem] font-black pointer-events-auto'>
                    <span className='hover-jello-horizontal'>I</span>&nbsp;
                    <span className='hover-jello-horizontal'>b</span>
                    <span className='hover-jello-horizontal'>u</span>
                    <span className='hover-jello-horizontal'>i</span>
                    <span className='hover-jello-horizontal'>l</span>
                    <span className='hover-jello-horizontal'>d</span>&nbsp;
                    <span className='hover-jello-horizontal'>t</span>
                    <span className='hover-jello-horizontal'>h</span>
                    <span className='hover-jello-horizontal'>i</span>
                    <span className='hover-jello-horizontal'>n</span>
                    <span className='hover-jello-horizontal'>g</span>
                    <span className='hover-jello-horizontal'>s</span>&nbsp;
                    <span className='hover-jello-horizontal'>f</span>
                    <span className='hover-jello-horizontal'>o</span>
                    <span className='hover-jello-horizontal'>r</span>&nbsp;
                    <span className='hover-jello-horizontal'>t</span>
                    <span className='hover-jello-horizontal'>h</span>
                    <span className='hover-jello-horizontal'>e</span>&nbsp;
                    <span className='hover-jello-horizontal'>w</span>
                    <span className='hover-jello-horizontal'>e</span>
                    <span className='hover-jello-horizontal'>b</span>
                    <span className='hover-jello-horizontal'>.</span>
                </p>
                <span className='text-html -ml-4 mt-2'>&lt;/p&gt;</span>
            </div>
            {/* Text Box End */}
        </section>
        //  Hero Text End
    );
}

export default Hero;
