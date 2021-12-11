module.exports = {
    content: ['./src/**/*.{html,js,jsx}', './public/**/*.html'],
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
                    dark: '#171321',
                    darkLight: '#484255',
                    desatBlack: '#201D26',
                    yellow: '#FFE742',
                    darkPurple: '#A653BB',
                    purple: '#C47BD6',
                    lightPurple: '#DEAAEB',
                    lightBlue: '#87fffb',
                },
            },
            outline: {
                dark: '1px solid #171321',
                darkLight: '1px solid #484255',
                desatBlack: '1px solid #201D26',
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
