import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const {displayName, email, phoneNumber,photoURL, uid, emailVerified, metadata} = user;
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
            <img className='rounded-full mx-auto w-48 h-48' src={photoURL} alt="profilePhoto" />
              <h1 className="text-5xl font-bold">{displayName}</h1>
              <p className="mt-4">Email : {email}</p>
              <p className="mt-2">Phone Number : {phoneNumber ? phoneNumber : "Not Found"}</p>
              <p className="mt-2">ID : {uid}</p>
              <p className="mt-2">Verified : {emailVerified?"Verified" : "No Verified"}</p>
              <p className="mt-2">Creation Time : {metadata?.creationTime}</p>
              <Link to="/" className="btn btn-primary mt-3">Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;