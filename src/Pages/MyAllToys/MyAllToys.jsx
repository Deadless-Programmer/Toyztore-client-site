import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyAllToys = () => {
    const {user}=useContext(AuthContext);
    // const [data, setData]=useState([])
    const url =`http://localhost:5000/signgleToys?email=${user?.email}`;
    
 useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data =>console.log(data))
 }, [])

//  console.log(data)
    return (
        <div>
            <h1>My all toys</h1>
        </div>
    );
};

export default MyAllToys;