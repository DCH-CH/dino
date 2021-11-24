import React from 'react';
import Header from '../components/Header';

const Home = ({match})=> {return (
    <div>
    <Header title="Dino"/>
    <h2>{match.url}</h2>
    </div>
); };

export default Home;

