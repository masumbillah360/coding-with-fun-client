import {
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { providerLogin, setUser, loginUser, error, setError } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGogoleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(from, {replace:true});
        setError("")
      })
      .catch((err) => setError(err?.message));
  };
  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((result) => {
        setUser(result.user);
        navigate(from, {replace:true});
        setError("");
      })
      .catch((err) => setError(err?.message));
  };

  const loginEmailPassword = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then((result) => {
      setUser(result.user);
      navigate(from, {replace:true});
      setError("");
    })
    .catch((err) => setError(err?.message));
  }
  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content grid grid-cols-12 md:gap-6 lg:gap-12">
          <div className="card shadow-2xl bg-base-100 col-span-12 md:col-span-6 ml-auto order-2 sm:order-1">
            <form onSubmit={loginEmailPassword} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <label className="label">
                <Link to="/register">
                  <p className="label-text link link-hover">
                    Do not have an account?
                    <span className="ml-5 underline tex-primary font-bold">
                      Please register
                    </span>
                  </p>
                </Link>
              </label>
              {error && <span className="text-red-500">{error}</span>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>

          <div className="col-span-12 md:col-span-6 mr-auto order-1 sm:order-2">
            <h1 className="text-5xl font-bold mb-4 dark:text-secondary text-primary">
              Please Login!
            </h1>
            <div className="">
              <button
                onClick={handleGogoleLogin}
                className="btn bg-red-600 mx-auto md:mx-0 block mb-3"
              >
                Login With Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="btn block mb-3 mx-auto md:mx-0"
              >
                Login With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
