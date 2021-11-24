import React from 'react';
import Header from '../components/Header';


const Dino = ({match})=>{
    return (
    <div>
        <Header title="Dino"/>
        <h2>{match.url}</h2>
    </div>);

};

export default Dino;