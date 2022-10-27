import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user } = useContext(AuthContext);
    if (!user?.uid) {
        return <Navigate to="/login" state={{from: location}} replace></Navigate>;
    }
    return children;

};

export default PrivateRoute;