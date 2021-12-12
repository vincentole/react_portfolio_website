import Particles from 'react-tsparticles';

function HeroParticles(props) {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // Loaded Note
    };
    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            style={{ position: 'absolute', inset: 0 }}
            options={{
                fullScreen: false,
                pauseOnOutsideViewport: true,
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
                        speed: 0.2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        outModes: {
                            default: 'out',
                        },
                        bounce: false,
                        attract: {
                            enable: false,
                            rotate: {
                                x: 600,
                                y: 1200,
                            },
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
                            distance: 120,
                            links: {
                                color: '#2E2239',
                            },
                        },

                        push: {
                            particles_nb: 4,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default HeroParticles;
