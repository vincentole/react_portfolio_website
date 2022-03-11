<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vincentole/react_portfolio_website">
    <img src="github/Logo.png" alt="Logo" width="50" height="50">
  </a>

<h3 align="center">React Portfolio Website</h3>

  <p align="center">
    A responsive and interactive portfolio website with a project showcase section and custom animations.
    <br />
    <br />
    <a href="https://github.com/vincentole/react_portfolio_website"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://serene-archimedes-4f2abc.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/vincentole/react_portfolio_website/issues">Report Bug</a>
  
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><b>Table of Contents</b></summary>
  <br/>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#highlights-of-what-i-learned">Highlights of What I Learned</a></li>
        <li><a href="#roadmap--continued-development">Roadmap & Continued Development</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->

## About The Project

<br />

[![React Portfolio Website Screen Shot][product-screenshot]](https://serene-archimedes-4f2abc.netlify.app)

<br />

React Portfolio Website is a practice project showcasing design and development capabilities. The website is a single page application divided into multiple sections with smooth/custom animations, project showcase, and fun visual interactions. Concrete features are, for example, the ability to switch tsParticles on and off, a smooth scroll to page sections, the appearance-transition of the navbar based on the scroll direction.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [React.js](https://reactjs.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [tsParticles](https://particles.js.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- What I learned -->

### What I Learned

I present to you my first small project using React.js and TailwindCSS.

In this section, I highlight a few code snippets that I find valuable. Please refer to the [section below](#roadmap--continued-development) for more concepts and features I implemented.

#### Animation

Animating each letter separately.

```jsx
// ...
<h1 className='text-header-lg bg-primary-yellow text-primary-dark p-2 mt-2 pointer-events-auto'>
    {"I'm Ole Urfels,".split('').map((letter, i) => {
        if (letter === ' ') return ' ';
        return <HeroLetter key={i} text={letter} />;
    })}
</h1>
// ...
```

#### External Libraries

Using tsParticles to include interactive background animations.

```jsx
// ...
const [particlesSwitch, setParticlesSwitch] = useState(false);

function handleParticleBtn() {
    setParticlesSwitch((prev) => !prev);
}
// ...
{
    /* Particles Start */
}
<button
    onClick={handleParticleBtn}
    className='absolute top-4 right-6 w-8 h-4 flex items-center bg-primary-darklight py-[2px] rounded-full z-10 group'
>
    <div
        className={`w-4 h-4 bg-primary-purplelight rounded-full ${
            particlesSwitch && 'translate-x-4 !bg-primary-purpledark'
        } transition-all duration-500 ease-out`}
    ></div>
</button>;
{
    particlesSwitch && <HeroParticles />;
}
{
    /* Particles End */
}
// ...
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Roadmap & Continued Development -->

### Roadmap & Continued Development

-   [x] Coherent and appealing design
-   [x] Reusable components
-   [x] Custom Animations
-   [x] Transitions
-   [x] Smooth Scroll
-   [x] External library integration
-   [x] Abstraction of content into data objects.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps:

### Installation

1.  Clone the repo
    <br/>

        ```sh
        git clone https://github.com/vincentole/react_portfolio_website.git
        ```

2.  Install packages
    <br/>

    npm

    ```sh
    npm install
    ```

    yarn

    ```sh
    yarn
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

### Usage

You can run the project in a local environment as follows:

npm

```sh
npm run start
```

yarn

```sh
yarn start
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `github/LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ole Urfels (vincentole):

-   [LinkedIn](https://www.linkedin.com/in/ole-urfels/)
-   [@vincent_ole](https://twitter.com/@vincent_ole)

Project Link: [https://github.com/vincentole/react_portfolio_website](https://github.com/vincentole/react_portfolio_website)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [opencampus.sh](https://www.opencampus.sh/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/vincentole/react_portfolio_website.svg?style=for-the-badge
[contributors-url]: https://github.com/vincentole/react_portfolio_website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vincentole/react_portfolio_website.svg?style=for-the-badge
[forks-url]: https://github.com/vincentole/react_portfolio_website/network/members
[stars-shield]: https://img.shields.io/github/stars/vincentole/react_portfolio_website.svg?style=for-the-badge
[stars-url]: https://github.com/vincentole/react_portfolio_website/stargazers
[issues-shield]: https://img.shields.io/github/issues/vincentole/react_portfolio_website.svg?style=for-the-badge
[issues-url]: https://github.com/vincentole/react_portfolio_website/issues
[license-shield]: https://img.shields.io/github/license/vincentole/react_portfolio_website.svg?style=for-the-badge
[license-url]: https://github.com/vincentole/react_portfolio_website/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ole-urfels
[product-screenshot]: github/preview.png
