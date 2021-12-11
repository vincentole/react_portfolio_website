import React from 'react';
import IconLink from '../IconLink';
import { svgGitHub, svgEye } from '../icons';

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
                            <IconLink svg={svgGitHub} iconClass='icon-lg' href={props.githubLink} ariaLabel="Visite the project's GitHub-Repo" />
                            <IconLink svg={svgEye} iconClass='icon-eye' href={props.liveLink} ariaLabel='Visite the live project' />
                        </div>
                    </div>
                    <p className='pt-6 pb-8' dangerouslySetInnerHTML={{ __html: props.description }}></p>

                    <div>
                        <p className='text-base'>
                            <span className='font-bold'>Code</span> {props.code}
                        </p>
                        <p className='text-base'>
                            <span className='font-bold'>Layout</span> {props.layout}
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
