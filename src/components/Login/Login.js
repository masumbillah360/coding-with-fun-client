import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
    const {setUser} = useContext(AuthContext);
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGogoleLogin = () =>{
        console.log("clicked");
        providerLogin(googleProvider)
        .then(result=> setUser(result.user))
        .catch(err=> console.log(err));
        
    }
    const handleFacebookLogin = () =>{
        providerLogin(facebookProvider)
        .then(result=>console.log(result.user))
        .catch(err=>console.log(err));
    }
    const handleGithubLogin = () =>{
        providerLogin(githubProvider)
        .then(result=>console.log(result.user))
        .catch(err=>console.log(err));
    }
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
              <button onClick={handleGogoleLogin} className="btn bg-red-600 mx-auto md:mx-0 block mb-3">
                Login With Google
              </button>
              <button onClick={handleGithubLogin} className="btn block mb-3 mx-auto md:mx-0">
                Login With Github
              </button>
              <button onClick={handleFacebookLogin} className="btn bg-blue-500 block mx-auto md:mx-0">
                Login With FaceBook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
