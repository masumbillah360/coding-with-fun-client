import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero my-8">
      <div className="hero-content grid lg:grid-cols-5 justify-center">
        <img
          src="banner.jpg"
          className="rounded-lg shadow-2xl md:col-span-12 lg:col-span-2"
          alt="HeaderPhoto"
        />
        <div className="md:col-span-12 lg:col-span-3">
          <h1 className="text-5xl font-bold">
            Learn Coding and Enjoy with Us!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/courses" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
