import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { createNewUser, setUser , updateUserProfile, error, setError } = useContext(AuthContext);
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
        setError("");
        navigate("/login");
        Swal.fire({
          title: `Congratulations !`,
          text: "Please Login Now",
          icon: "success",
          confirmButtonText: "go to Courses",
        });

        
      })
      .catch((err) => setError(err.message));
  };

  const handleUpdateUserProfile =(name, photo)=> {
    const profile = {
      displayName: name,
      photoURL: photo
    }
      updateUserProfile(profile)
      .then((result) => {})
      .catch(err=>setError(err.message));
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
              {error && <span className="text-red-400">{error}</span> }
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
            <h4>Feel Free to Register Now. Enjoy & Learn Code Effectivly.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
