import React from 'react';
import NavItem from './NavItem';
import IconLink from './IconLink';
import { svgGitHub, svgLinkedIn, svgEmail } from './icons';

function Footer() {
    return (
        //  Footer Start
        <footer className='font-sourceCodePro text-center border-t-4 border-solid border-primary-yellow border-image-rainbow overflow-hidden'>
            {/* Conatiner Start */}
            <div className='container-cstm flex flex-col sm:flex-row items-center justify-between'>
                {/* Credits Start */}
                <div className='logo flex items-center justify-between my-4'>
                    <span className='text-primary-yellow'>Designed & Built by</span> &nbsp;Ole Urfels
                </div>
                {/* Credits End */}
                <nav className='flex space-x-10'>
                    {/* Main Nav Start */}
                    <ul className='flex items-center space-x-8'>
                        <NavItem href='#top' classText='' functionText='up' />
                    </ul>
                    {/* Main Nav End */}

                    {/* Social Nav Start */}
                    <ul className='social-nav'>
                        <li>
                            <IconLink svg={svgGitHub} iconClass='icon' href='https://github.com/vincentole' ariaLabel='Visite my GitHub Profile' />
                        </li>
                        <li>
                            <IconLink svg={svgLinkedIn} iconClass='icon' href='https://www.linkedin.com/in/ole-urfels' ariaLabel='Visite my LinkedIn Profile' />
                        </li>
                        <li>
                            <IconLink svg={svgEmail} iconClass='icon' href='mailto:ole.urfels@outlook.de' ariaLabel='Write me an Email' />
                        </li>
                    </ul>
                    {/* Social Nav End */}
                </nav>
            </div>
            {/* Conatiner End */}
        </footer>
        //  Footer End
    );
}

export default Footer;
