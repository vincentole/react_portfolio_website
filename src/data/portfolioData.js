// bgDefaultClass has to be 16:9
// bgSquareClass has to be 1:1
// both have to be implemented as tailwind classes in the tailwind config
const portfolioData = [
    {
        title: 'Portfolio Website',
        description: 'This is my <span class="text-primary-purple">personal portfolio website</span>. During the development I used <span class="text-primary-purple">TailwindCSS</span> and implemented some custom CSS animations.',
        code: 'HTML5, CSS3, Javascript ES6+',
        layout: 'TailwindCSS',
        githubLink: 'https://github.com/vincentole/portfolio_website',
        liveLink: 'https://upbeat-rosalind-bb1463.netlify.app/',
        bgDefaultClass: 'bg-project-1',
        bgSquareClass: 'bg-project-1-square',
    },
    {
        title: 'Base Apparel',
        description: 'This project is part of the <span class="text-primary-purple">frontend mentor challenge</span>. You can see a comparison of the design and my solution on <a class="text-primary-purple underline" href="https://www.frontendmentor.io/solutions/responsive-landing-page-with-scss-grid-and-animations-r4rXEqMbe">frontendmentor.io</a>',
        code: 'HTML5, CSS3, SASS, Javascript ES6+',
        layout: 'CSS3, SASS',
        githubLink: 'https://github.com/vincentole/frontend_mentor_challenges/tree/master/base_apparel_coming_soon_page',
        liveLink: 'https://wonderful-lalande-92aa8d.netlify.app/',
        bgDefaultClass: 'bg-project-2',
        bgSquareClass: 'bg-project-2-square',
    },
    {
        title: 'Sunnyside Agency',
        description: 'This project is part of the <span class="text-primary-purple">frontend mentor challenge</span>. You can see a comparison of the design and my solution on <a class="text-primary-purple underline" href="https://www.frontendmentor.io/solutions/responsive-landing-page-using-html5-sass-and-js-W0ovd7cw2">frontendmentor.io</a>',
        code: 'HTML5, CSS3, SASS, Javascript ES6+',
        layout: 'CSS3, SASS',
        githubLink: 'https://github.com/vincentole/frontend_mentor_challenges/tree/master/sunnyside_agency_landing_page',
        liveLink: 'https://youthful-thompson-0a66b9.netlify.app/',
        bgDefaultClass: 'bg-project-3',
        bgSquareClass: 'bg-project-3-square',
    },
    {
        title: 'Math Trainer',
        description: 'This project is a math trainer that asks <span class="text-primary-purple">math exercises</span> and <span class="text-primary-purple">validates</span> the answers. You can also choose between different operations.',
        code: 'HTML5, CSS3, SASS, Javascript ES6+',
        layout: 'CSS3, SASS',
        githubLink: 'https://github.com/vincentole/small_web_projects/tree/master/math_training',
        liveLink: 'https://unruffled-cori-d53663.netlify.app/',
        bgDefaultClass: 'bg-project-4',
        bgSquareClass: 'bg-project-4-square',
    },
];

export default portfolioData;