import React from 'react';

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
                        <li>
                            <a className='group' href='#body'>
                                <span className='nav-item-last-span'>up</span>()
                            </a>
                        </li>
                    </ul>
                    {/* Main Nav End */}

                    {/* Social Nav Start */}
                    <ul className='social-nav'>
                        <li>
                            <a target='_blank' href='https://github.com/vincentole' aria-label='Visite my GitHub Profile' rel='noopener noreferrer'>
                                <svg className='icon' aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                                    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href='https://www.linkedin.com/in/ole-urfels/' aria-label='Visite my LinkedIn Profile' rel='noopener noreferrer'>
                                <svg className='icon' aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                                    <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href='mailto:ole.urfels@outlook.de' aria-label='Write me an Email' rel='noopener noreferrer'>
                                <svg className='icon' aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                    <path d='M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z'></path>
                                </svg>
                            </a>
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
