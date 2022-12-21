import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Loading....</h1>
      <div className="radial-progress text-primary" style={{ "--value": 90 }}>
        90%
      </div>
      <progress className="progress w-48 mt-3"></progress>
    </div>
  );
};

export default Loader;
