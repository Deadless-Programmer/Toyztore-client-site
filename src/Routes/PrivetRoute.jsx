import React, { Children, useContext } from 'react';
import { AuthContext } from '../Pages/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Pages/Loader/Loader';
import Swal from 'sweetalert2';

const PrivetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user?.email){
        return children;
    }
    else if (!user?.email){
        Swal.fire({
            // position: 'top-end',
            icon: 'error',
            title: "“You have to log in first to view details”",
            showConfirmButton: 'Cool',
            timer: 1500
          })
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivetRoute;