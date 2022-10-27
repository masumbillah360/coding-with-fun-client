import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrimiumServices = () => {
    const {user} = useContext(AuthContext);
    const {displayName, email} = user;
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-red-600">Congratulations !</h1>
              <img className='mx-auto rounded-full w-48' src={user.photoURL} alt="" />
              <h1 className="text-3xl font-bold mb-2">{displayName}</h1>
              <p className="font-bold text-green-600">Now You Get All Primium Services To Us.</p>
              <p>Your Email : {email}</p>
              <Link to="/courses" className="btn btn-primary btn-sm mt-2">Go Back Course</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PrimiumServices;