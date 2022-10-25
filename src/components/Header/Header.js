import React from 'react';

const Header = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Courses</a>
                </li>
                <li tabIndex={0}>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
                <li tabIndex={0}>
                  <a>Register</a>
                </li>
                <li>
                  <a>User Name</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl hidden lg:block">
              <img src="logo.jpg" className="w-full h-full rounded-lg" alt="" />
            </a>
            <a className="btn btn-ghost normal-case text-xl">Coding With Fun</a>
          </div>
          <div className="navbar hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a>Courses</a>
              </li>
              <li tabIndex={0}>
                <a>FAQ</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="hidden lg:block">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <a>Login</a>
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