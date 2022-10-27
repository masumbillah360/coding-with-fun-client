import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
      <div className='my-16'>
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="pt-6 text-3xl font-bold">Md Masum Billah</p>
              <p className="py-2">Front-End Developer</p>
              <Link to="/courses" className="btn btn-primary mt-6">Go To Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;