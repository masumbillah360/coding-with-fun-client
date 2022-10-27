import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading } = useContext(AuthContext);
    if (loading) {
            return (
              <div className="min-h-screen flex flex-col justify-center items-center">
                <h1>Loading....</h1>
                <div
                  className="radial-progress text-primary"
                  style={{ "--value": 90 }}
                >
                  90%
                </div>
                <progress className="progress w-48 mt-3"></progress>
              </div>
            );
        }
    if (!user?.uid) {
        return <Navigate to="/login" state={{from: location}} replace></Navigate>;
    }
    return children;

};

export default PrivateRoute;