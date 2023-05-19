import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import TrustUs from '../TrustUs/TrustUs';
import PopularProduct from '../AllToys/PopularProduct/PopularProduct';
import AosPackege from '../AosPackege/AosPackege';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            
            <PopularProduct></PopularProduct>
            <TrustUs></TrustUs>
            <AosPackege></AosPackege>
        </div>
    );
};

export default Home;