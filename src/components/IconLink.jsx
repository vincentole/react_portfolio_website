import React from 'react';

function IconLink(props) {
    return (
        
            <a target='_blank' href={props.href} aria-label={props.ariaLabel} rel='noopener noreferrer'>
                {props.svg(props.iconClass)}
            </a>
        
    );
}

export default IconLink;
