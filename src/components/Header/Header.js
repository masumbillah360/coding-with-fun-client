import React, { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile_pic from "../../assets/profile_pic.jpg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ThemeContext } from "../../contexts/ThemeProvider/ThemeProvider";

const Header = () => {
  const { user, setUser, signOutUser } = useContext(AuthContext);
  const { dark, setDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        setUser({});
        navigate("/");
      })
      .catch((err) => {
        setUser({});
      });
  };
  const handleTheme = () => {
    setDark(!dark);
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user?.uid ? (
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl ">
          <img src={logo} className="w-full h-full rounded-lg" alt="" />
        </Link>
        <Link to="/" className="hidden lg:block">
          CodingWithFun
        </Link>
      </div>
      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <span
          onClick={handleTheme}
          className="mr-4 flex justify-center items-center "
        >
          {dark ? (
            <button>
              <CiLight className="text-3xl"></CiLight>
            </button>
          ) : (
            <button>
              <CiDark className="text-3xl"></CiDark>
            </button>
          )}
        </span>
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal p-0">
            {user?.uid ? (
              <>
                <li>
                  <Link to="/profile">{user?.displayName}</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt="profilePhoto"
                  title={user?.displayName}
                />
              ) : (
                <img
                  src={profile_pic}
                  alt="profilePhoto"
                  title={user?.displayName}
                />
              )}
            </div>
          </label>
          {user?.uid ? (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/Courses" className="justify-between">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/Blog" className="justify-between">
                  Blog
                </Link>
              </li>
              <li className="">
                <button onClick={handleTheme} type="checkbox">
                  {dark ? "Light Mode" : "Dark MOde"}
                </button>
              </li>
              <li>
                <button onClick={handleLogOut}>log out</button>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/login" className="justify-between">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="justify-between">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
