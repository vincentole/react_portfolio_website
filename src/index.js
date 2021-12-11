import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <main>
            <Hero />
            <Portfolio />
            <Bio />
            <Contact />
        </main>
        <Footer />
    </React.StrictMode>,
    document.getElementById('root'),
);

// Custom JS
// Nav Mobile Menu
const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
let menuActive = false;

function handleMenuBtn() {
    if (!menuActive) {
        nav.style.maxHeight = `${nav.scrollHeight}px`;
    } else {
        nav.style.maxHeight = '0px';
    }

    menuActive = !menuActive;
}

menuBtn.addEventListener('click', handleMenuBtn);

// Collapse nav when query is fired to prevent bugs
function handleMdQuery(event) {
    if (event.matches) {
        nav.style.maxHeight = '0px';
        menuActive = false;
    }
}

window.matchMedia('(min-width: 768px)').addEventListener('change', handleMdQuery);

// Sticky header show on scrolling up, hide on scrolling down
const header = document.querySelector('#header');
let prevScrollPos = 0;

document.addEventListener('scroll', () => {
    const currScrollPos = window.scrollY;
    const scrollDirection = currScrollPos - prevScrollPos;

    if (currScrollPos < header.scrollHeight) return;
    // If menu is active, hide whole menu --> smooth animation
    if (scrollDirection > 0 && menuActive) {
        header.style.transform = `translateY(-${header.scrollHeight}px)`;
        // IF menu is not active, hide only the bar --> smooth animation
    } else if (scrollDirection > 0 && !menuActive) {
        header.style.transform = `translateY(-${header.clientHeight}px)`;
    } else if (scrollDirection < 0) {
        header.style.transform = 'translateY(-0px)';
    }

    prevScrollPos = window.scrollY;
});

// Hero Hover effect
const heroText = document.querySelectorAll('.hero-text-letter');

async function handleHover(e) {
    console.log('test');    
    e.target.classList.add('text-primary-lightBlue/80');
    e.target.classList.add('jello-horizontal');
    
    await new Promise((resolve) => setTimeout(resolve, 700));

    e.target.classList.remove('jello-horizontal');
    e.target.classList.remove('text-primary-lightBlue/80');
}

heroText.forEach((letter) => {
    letter.addEventListener('mouseover', handleHover);
});
