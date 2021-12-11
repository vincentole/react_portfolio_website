import Particles from 'react-tsparticles';

function HeroParticles(props) {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            style={{ position: 'absolute', inset: 0 }}
            options={{
                fullScreen: false,
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 700,
                        },
                    },
                    color: {
                        value: 'hsla(288, 53%, 66%)',
                    },
                    opacity: {
                        value: { min: 0, max: 0.05 },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 10,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: 'hsla(288, 53%, 66%)',
                        opacity: 0.05,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.1,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab',
                        },
                        onclick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.1,
                            },
                        },
                        bubble: {
                            distance: 500,
                            size: 40,
                            duration: 2,
                            opacity: 0.1,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default HeroParticles;
