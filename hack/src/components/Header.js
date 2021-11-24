import React from 'react';

const Header = ({title})=>{
    return (<div>
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Dino">Dino Editor</a>
        <h1>{title}</h1>
    </div>);
};

export default Header;