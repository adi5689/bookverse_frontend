import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from './Loader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader/>;
    }

    if(user){
        return children;
    }

  return (
    <Navigate to="/sign-in" state={{from: location}} replace>

    </Navigate>
  )
}

export default PrivateRoute