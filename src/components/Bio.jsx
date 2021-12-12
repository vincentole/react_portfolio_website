import React from 'react';
import IconLink from './IconLink';
import BioTechListItem from './BioTechListItem';
import { technologies } from '../data/technologiesData';
import { svgGitHub, svgLinkedIn, svgEmail } from './icons';

function Bio() {
    return (
        //   Bio Start
        <section id='about' className='section bg-primary-darkblack'>
            {/* Container Start */}
            <div className='container-cstm'>
                <h2 className='section-heading'>Some Things About Me</h2>
                {/* Content Body Wrapper Strart */}
                <div className='flex flex-col md:flex-row md:space-x-8'>
                    {/* Text and Tech Start */}
                    <div className=''>
                        {/* About Text Start */}
                        {/* className="border-gradient bg-primary-dark" - class for rgb border */}
                        <div className='space-y-4'>
                            <p>
                                I am <span className='text-primary-purple'>passionate</span> about exploring new technology and the ever-increasing possibilities in software engineering.
                            </p>
                            <p>
                                I hold a <span className='text-primary-purple'>B.A. in Mediaproduction</span> and a <span className='text-primary-purple'>B.Sc. in Economics and Business Economics</span>.
                            </p>
                            <p>
                                After working for 1.5 years at <span className='text-primary-purple'>PwC Luxembourg,</span> I immersed myself into different fields of the IT sector, such as Hardware, Networking, Penetration Testing, and Web Development.
                            </p>
                            <p>
                                To <span className='text-primary-purple'>grow as a developer</span> and software engineer, I am currently focusing on learning the ins and outs of React, as well as modern Software Design.
                            </p>
                        </div>
                        {/* About Text End */}
                        <h3 className='font-bold text-primary-yellow mt-8 mb-2'>Technologies I use:</h3>

                        {/* Technology List Start */}
                        <ul className='flex space-x-5'>
                            {technologies.map((tech, i) => (
                                <BioTechListItem key={i} src={tech.src} name={tech.name} />
                            ))}
                        </ul>
                        {/* Technology List End */}
                    </div>
                    {/* Text and Tech End */}

                    {/* Image and Connect Start */}
                    <div className='flex flex-col items-center mt-20 md:mt-0'>
                        <div className='w-80 h-80'>
                            <img className='object-cover object-center rounded-sm' src='./img/profile.jpeg' alt='Ole' />
                        </div>
                        <h3 className='font-bold text-primary-yellow mt-8 mb-2'>Connect with me:</h3>
                        {/* Connect Nav Start */}
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
                        {/* Connect Nav End */}
                    </div>
                    {/* Image and Connect Start */}
                </div>
                {/* Content Body Wrapper Strart */}
            </div>
            {/* Container End */}
        </section>
        //  Bio End
    );
}

export default Bio;
