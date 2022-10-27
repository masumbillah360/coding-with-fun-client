import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser , updateUserProfile } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createNewUser(email, password)
      .then((result) => {
        handleUpdateUserProfile(name, photo);
        setUser(result.user);
        
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateUserProfile =(name, photo)=> {
    const profile = {
      displayName: name,
      photoURL: photo
    }
      updateUserProfile(profile)
      .then((result) => {
        console.log(result);
      })
      .catch(err=>console.log(err));
   }
  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content grid md:grid-cols-5 md:gap-6 lg:gap-12">
          <div className="card shadow-2xl bg-base-100 col-span-12 md:col-span-3 order-2 sm:order-1">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <label className="label">
                <Link to="/login">
                  <p className="label-text link link-hover">
                    Already have an account?
                    <span className="ml-5 underline tex-primary font-bold">
                      Please Login
                    </span>
                  </p>
                </Link>
              </label>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
                ></input>
              </div>
            </form>
          </div>

          <div className="col-span-12 md:col-span-2 order-1 sm:order-2">
            <h1 className="text-5xl font-bold mb-4 text-primary">
              Register Now!
            </h1>
            <div className="">
              <button className="btn bg-red-600 mx-auto md:mx-0 block mb-3">
                Sign Up With Google
              </button>
              <button className="btn block mb-3 mx-auto md:mx-0">
                Sign Up With Github
              </button>
              <button className="btn bg-blue-500 block mx-auto md:mx-0">
                Sign Up With FaceBook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
