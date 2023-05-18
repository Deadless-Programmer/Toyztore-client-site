import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import TrustUs from '../TrustUs/TrustUs';
import PopularProduct from '../AllToys/PopularProduct/PopularProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            
            <PopularProduct></PopularProduct>
            <TrustUs></TrustUs>
        </div>
    );
};

export default Home;