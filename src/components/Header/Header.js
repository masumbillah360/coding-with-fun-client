import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li tabIndex={0}>
                <a>Register</a>
              </li>
              <li>
                <a>User Name</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hidden lg:block"
          >
            <img src="logo.jpg" className="w-full h-full rounded-lg" alt="" />
          </Link>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Coding With Fun
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
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li tabIndex={0}>
                <a>Register</a>
              </li>
              <li>
                <a>User Name</a>
              </li>
            </ul>
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://placeimg.com/80/80/people"
                alt="profilePicture"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
