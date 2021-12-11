import React from 'react';
import NavItem from './NavItem';
import IconLink from './IconLink';
import { svgGitHub, svgLinkedIn } from './icons';

function Header() {
    return (
        // Header Start
        <header id='header' className='fixed top-0 left-0 right-0 z-50 font-sourceCodePro bg-primary-dark border-b-4 border-solid border-image-rainbow border-primary-yellow text-center overflow-hidden md:text-left transition-transform ease-in-out duration-500'>
            {/* Conatiner Start */}
            <div className='container-cstm md:flex md:items-center md:justify-between'>
                {/* Logo/NavBtn Start */}
                <div className='logo flex items-center justify-between my-4'>
                    Ole Urfels
                    <button type='button' id='menu-btn' className='md:hidden'>
                        <svg className='w-8 h-8 fill-current' role='img' aria-label='LinkedIn logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                            <title>Menu</title>
                            <path fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='30' d='M80 160h352M80 256h352M80 352h352' />
                        </svg>
                    </button>
                </div>
                {/* Logo/NavBtn End */}
                <nav className='max-h-0 md:h-full md:flex md:space-x-10 transition-all duration-500 ease-in-out'>
                    {/* Main Nav Start */}
                    <ul className='space-y-4 md:flex md:items-center md:space-y-0 md:space-x-8'>
                        <NavItem href='#portfolio' classText='Portfolio' functionText='show' />
                        <NavItem href='#about' classText='' functionText='about' />
                        <NavItem href='#contact' classText='' functionText='contact' />
                    </ul>
                    {/* Main Nav End // Social Nav Start */}
                    <ul className='social-nav items-center md:py-0'>
                        <li>
                            <IconLink svg={svgGitHub} iconClass='icon' href='https://github.com/vincentole' ariaLabel='Visite my GitHub Profile' />
                        </li>
                        <li>
                            <IconLink svg={svgLinkedIn} iconClass='icon' href='https://www.linkedin.com/in/ole-urfels' ariaLabel='Visite my LinkedIn Profile' />
                        </li>
                    </ul>
                    {/* Social Nav End */}
                </nav>
            </div>
            {/* Conatiner End */}
        </header>
        // Header End
    );
}

export default Header;
