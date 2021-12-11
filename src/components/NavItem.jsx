import React from 'react';

function NavItem(props) {
    return (
        <li>
            <a className='group' href={props.href}>
                <span className='text-primary-yellow'>{props.classText}</span>{props.classText && "."}<span className='nav-item-last-span'>{props.functionText}</span>()
            </a>
        </li>
    );
}

export default NavItem;


