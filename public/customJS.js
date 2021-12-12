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

// Collapse nav when query is fired to close open nav when moving to md
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

// Hero Text Hover Effect
const heroText = document.querySelectorAll('.hero-text-letter');

async function handleHover(e) {
    e.target.classList.add('jello-horizontal');
    await new Promise((resolve) => setTimeout(resolve, 700));
    e.target.classList.remove('jello-horizontal');
}

heroText.forEach((letter) => {
    letter.addEventListener('mouseover', handleHover);
});
