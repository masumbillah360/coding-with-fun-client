import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <div>
          <div className="hero">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <img
                  className="rounded-full mx-auto w-48 h-48"
                  src={user?.photoURL}
                  alt="profilePhoto"
                />
                <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                <p className="mt-4">Email : {user?.email}</p>
                <p className="mt-2">
                  Phone Number :{" "}
                  {user?.phoneNumber ? user?.phoneNumber : "Not Found"}
                </p>
                <p className="mt-2">ID : {user?.uid}</p>
                <p className="mt-2">
                  Verified : {user?.emailVerified ? "Verified" : "No Verified"}
                </p>
                <p className="mt-2">
                  Creation Time : {user?.metadata?.creationTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-200 h-96 flex justify-center items-center">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-red-500">Please Sign Up</h4>
            <Link to="/register" className="btn btn-primary mt-12">Register</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
