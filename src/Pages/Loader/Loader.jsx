import React from 'react';
import loader from "../../../public/loading-84.gif"
const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh -64px)]'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loader;