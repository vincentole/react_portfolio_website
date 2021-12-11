import React from 'react';

function NavItemSocial(props) {
    return (
        <li>
            <a target='_blank' href={props.href} aria-label={props.ariaLabel} rel='noopener noreferrer'>
                {props.svg}
            </a>
        </li>
    );
}

export default NavItemSocial;
