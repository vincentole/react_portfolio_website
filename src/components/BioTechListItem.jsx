import React from 'react';

function BioTechListItem(props) {
    return (
        <li>
            <img className='h-10 object-contain' src={props.src} alt={props.name} title={props.name} />
        </li>
    );
}

export default BioTechListItem;
