import React, { Children, useContext } from 'react';
import { AuthContext } from '../Pages/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Pages/Loader/Loader';

const PrivetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivetRoute;