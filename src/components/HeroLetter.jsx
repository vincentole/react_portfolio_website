import React from 'react';

function HeroLetter(props) {
    return <span className='hero-text-letter transition-colors duration-700 ease-in-out'>{props.text}</span>;
}

export default HeroLetter;