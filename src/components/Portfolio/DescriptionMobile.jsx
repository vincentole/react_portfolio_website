import React from 'react';
import IconLink from '../IconLink';
import { svgGitHub, svgEye } from '../icons';

function DescriptionMobile(props) {
    return (
        // Overlay Below - SM Media Start
        <div className='flex sm:hidden flex-col justify-center bg-gray-900/95 p-4 mb-10 rounded-sm'>
            <h3 className='font-bold'>{props.title}</h3>
            <p className='py-8' dangerouslySetInnerHTML={{ __html: props.description }}></p>
            <div className='flex flex-col justify-between gap-6'>
                <div>
                    <p className='text-base'>
                        <span className='font-bold'>Code</span> {props.code}
                    </p>
                    <p className='text-base'>
                        <span className='font-bold'>Layout</span> {props.layout}
                    </p>
                </div>

                <div className='flex justify-center items-center gap-4 mr-4'>
                    <IconLink svg={svgGitHub} iconClass='icon-lg' href={props.githubLink} ariaLabel="Visite the project's GitHub-Repo" />
                    <IconLink svg={svgEye} iconClass='icon-eye' href={props.liveLink} ariaLabel='Visite the live project' />
                </div>
            </div>
        </div>
        // Overlay Below - SM Media End
    );
}

export default DescriptionMobile;
