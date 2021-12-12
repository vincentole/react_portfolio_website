module.exports = {
    content: ['./src/**/*.{html,js,jsx}', './public/**/*.{html,js}'],
    safelist: [
        'md:bg-project-1',
        'md:bg-project-1-square',
        'md:bg-project-2',
        'md:bg-project-2-square',
        'md:bg-project-3',
        'md:bg-project-3-square',
        'md:bg-project-4',
        'md:bg-project-4-square',
        'lg:bg-project-1',
        'lg:bg-project-1-square',
        'lg:bg-project-2',
        'lg:bg-project-2-square',
        'lg:bg-project-3',
        'lg:bg-project-3-square',
        'lg:bg-project-4',
        'lg:bg-project-4-square',
    ],
    theme: {
        screens: {
            xs: '450px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: {
                    darklight: 'hsl(259, 13%, 30%)',
                    darklighter: 'hsl(257, 27%, 13%)', 
                    dark:      'hsl(257, 27%, 10%)',
                    darkblack: 'hsl(257, 27%, 9%)',
                    yellow: 'hsl(52, 100%, 63%)',
                    purplelight: 'hsl(288, 62%, 79%)',
                    purple:      'hsl(288, 53%, 66%)',
                    purpledark:  'hsl(288, 43%, 53%)',
                },
            },
            outline: {
                dark: '1px solid #171321',
                darklight: '1px solid #484255',
                yellow: '1px solid #FFE742',
                purple: '1px solid #C47BD6',
            },
            fontFamily: {
                architectsDaughter: ["'Architects Daughter', cursive;"],
                segoeUI: ["'Segoe UI', 'Roboto', Tahoma, Geneva, Verdana, sans-serif;"],
                sourceCodePro: ["'Source Code Pro', monospace;"],
            },
            transitionProperty: {
                height: 'height',
            },
            backgroundImage: {
                'project-1': "url('../public/img/projects/portfolio_website.png')",
                'project-1-square': "url('../public/img/projects/portfolio_website_square.png')",
                'project-2': "url('../public/img/projects/BaseApparel.png')",
                'project-2-square': "url('../public/img/projects/BaseApparel_square.png')",
                'project-3': "url('../public/img/projects/sunnyside.png')",
                'project-3-square': "url('../public/img/projects/sunnyside_square.png')",
                'project-4': "url('../public/img/projects/math_trainer.png')",
                'project-4-square': "url('../public/img/projects/math_trainer_square.png')",
            },
            transitionDelay: {
                0: '0ms',
            },
        },
    },
    variants: {
        extend: {
            rotate: ['group-hover'],
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
