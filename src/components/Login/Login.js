import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-auto bg-base-100">
        <div className="hero-content grid grid-cols-12 md:gap-6 lg:gap-12">
          <div className="card shadow-2xl bg-base-100 col-span-12 md:col-span-6 ml-auto order-2 sm:order-1">
            <div className="card-body">
              
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <label className="label">
                <Link to="/register">
                  <p className="label-text link link-hover">
                    Do not have an account?
                    <span className="ml-5 underline tex-primary font-bold">
                      Please Register
                    </span>
                  </p>
                </Link>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 mr-auto order-1 sm:order-2">
            <h1 className="text-5xl font-bold mb-4 text-primary">
              Please Login!
            </h1>
            <div className="">
                <p>Login and Enjoy Coding like Fun....!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
