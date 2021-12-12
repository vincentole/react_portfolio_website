import React, { useState } from 'react';
import HeroParticles from './HeroParticles';
import HeroLetter from './HeroLetter';

function Hero() {
    const [particlesSwitch, setParticlesSwitch] = useState(false);

    function handleParticleBtn() {
        setParticlesSwitch((prev) => !prev);
    }

    return (
        // Hero Text Start
        <section
            id='hero-section'
            className='section relative flex justify-center items-center bg-primary-darkblack'
        >
            {/* Particles Start */}
            <button
                onClick={handleParticleBtn}
                className='absolute top-4 right-6 w-8 h-4 flex items-center bg-primary-darklight py-[2px] rounded-full z-10 group'
            >
                <div
                    className={`w-4 h-4 bg-primary-purplelight rounded-full ${
                        particlesSwitch && 'translate-x-4 !bg-primary-purpledark'
                    } transition-all duration-500 ease-out`}
                ></div>
            </button>
            {particlesSwitch && <HeroParticles />}
            {/* Particles End */}
            {/* Text Box Start */}
            <div className='z-10 inline-block px-8 pointer-events-none'>
                <span className='text-html -ml-8'>&lt;body&gt;</span>
                <br />
                <span className='text-html -ml-4'>&lt;h1&gt;</span>
                <h1 className='text-header-lg text-primary-yellow pointer-events-auto'>
                    {'Hi,'.split('').map((letter, i) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter key={i} text={letter} />;
                    })}
                </h1>
                <br />
                <h1 className='text-header-lg bg-primary-yellow text-primary-dark p-2 mt-2 pointer-events-auto'>
                    {"I'm Ole Urfels,".split('').map((letter, i) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter key={i} text={letter} />;
                    })}
                </h1>
                <br />
                <h1 className='text-header-lg text-primary-yellow pointer-events-auto'>
                    {'web developer'.split('').map((letter, i) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter key={i} text={letter} />;
                    })}
                </h1>
                <span className='text-html -ml-4 mt-1'>&lt;/h1&gt;</span>
                <br />
                <span className='text-html -ml-4'>&lt;p&gt;</span>
                <p className='text-primary-purple text-base xs:text-[1.2rem] md:text-[2rem] lg:text-[2.5rem] font-black pointer-events-auto'>
                    {'I build things for the web.'.split('').map((letter, i) => {
                        if (letter === ' ') return ' ';
                        return <HeroLetter key={i} text={letter} />;
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
