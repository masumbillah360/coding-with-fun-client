import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-400 mb-6">Opps Sorry !</h1>
        <h1 className="text-5xl font-bold text-slate-400">{error.status}</h1>
        <h1 className="text-5xl font-bold text-slate-400">
          {error.message || error.statusText}
        </h1>
        <Link to="/" className="btn btn-primary font-bold mt-5">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
