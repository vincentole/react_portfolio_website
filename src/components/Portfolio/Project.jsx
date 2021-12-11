import React from 'react';

function PortfolioProject(props) {
    return (
        //  Project 1 Start
        // aspect needs to be specified on the parent and only have one child
        <div className='relative aspect-w-16 aspect-h-9 sm:aspect-h-9 md:aspect-w-1 md:aspect-h-1 lg:aspect-w-16 lg:aspect-h-9 rounded-sm group'>
            <div className={`${props.bgDefaultClass} md:${props.bgSquareClass} lg:${props.bgDefaultClass} bg-cover bg-no-repeat bg-center border border-primary-darkLight rounded-sm`}>
                {/* Info Icon Start */}
                <div className='hidden absolute z-10 sm:flex justify-end items-end bottom-1 right-2 pointer-events-none opacity-90 group-hover:opacity-0 transition-opacity ease-in-out'>
                    <svg className='w-6 h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                        <title>Information Circle</title>
                        <path strokeWidth='32' strokeMiterlimit='10' stroke='#C47BD6' fill='#171321' d='m248,64c-101.61,0 -184,82.39 -184,184s82.39,184 184,184s184,-82.39 184,-184s-82.39,-184 -184,-184z' />
                        <path d='m220,220l32,0l0,116' strokeWidth='32' strokeLinejoin='round' strokeLinecap='round' stroke='#C47BD6' fill='none' />
                        <path d='m208,340l88,0' strokeWidth='32' strokeMiterlimit='10' strokeLinecap='round' stroke='#C47BD6' fill='none' />
                        <path fill='#C47BD6' d='m248,130a26,26 0 1 0 26,26a26,26 0 0 0 -26,-26z' />
                        <path stroke='#171321' strokeWidth='30' strokeMiterlimit='10' fill='none' d='m248.00002,32.6667c-118.91314,0 -215.33332,96.42017 -215.33332,215.33332s96.42017,215.33332 215.33332,215.33332s215.33332,-96.42017 215.33332,-215.33332s-96.42017,-215.33332 -215.33332,-215.33332z' />
                    </svg>
                </div>
                {/* Info Icon End */}
                {/* Overlay Start */}
                <div className='hidden sm:flex flex-col justify-center w-full h-full bg-primary-dark/[0.97] p-4 rounded-sm opacity-0 group-hover:opacity-100 duration-500 ease-out'>
                    <div className='flex gap-10 items-center'>
                        <h3 className='font-bold'>{props.title}</h3>
                        <div className='flex justify-center items-center gap-4 mr-4'>
                            <a target='_blank' href={props.githubLink} aria-label="Visite the project's GitHub-Repo" rel='noopener noreferrer'>
                                <svg className='w-8 h-8 fill-current text-primary-purple hover:text-primary-lightPurple hover:scale-105 transition-all ease-in-out duration-300' aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                                    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                                </svg>
                            </a>
                            <a target='_blank' href={props.liveLink} aria-label='Visite the live project' rel='noopener noreferrer'>
                                <svg className='w-auto h-10 fill-current text-primary-purple hover:text-primary-lightPurple hover:scale-105 transition-all ease-in-out duration-300' aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                    <path d='M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z' fill='none' stroke='currentColor' strok-linecap='round' strokeLinejoin='round' strokeWidth='32' />
                                    <circle cx='256' cy='256' r='80' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32' />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p className='pt-6 pb-8' dangerouslySetInnerHTML={{ __html: props.description }}></p>

                    <div>
                        <p className='text-base'>
                            <strong>Code</strong> {props.code}
                        </p>
                        <p className='text-base'>
                            <strong>Layout</strong> {props.layout}
                        </p>
                    </div>
                </div>
                {/* Overlay End */}
            </div>
        </div>
        //  Project 1 End
    );
}

export default PortfolioProject;
