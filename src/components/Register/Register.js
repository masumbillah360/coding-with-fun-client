import React from 'react';

const Register = () => {
    return (
      <div>
        <div className="hero min-h-auto bg-base-100">
          <div className="hero-content grid md:grid-cols-5 md:gap-6 lg:gap-12">
            <div className="card shadow-2xl bg-base-100 col-span-12 md:col-span-3 order-2 sm:order-1">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered"
                  />
                </div>
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
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