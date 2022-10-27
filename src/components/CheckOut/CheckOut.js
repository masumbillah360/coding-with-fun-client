import React from 'react';
import Swal from "sweetalert2";

const CheckOut = () => {
  const handleCheckOut = (event)=>{
    event.preventDefault();
    Swal.fire("Contratulations");

  }
    return (
      <form onSubmit={handleCheckOut} className="p-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span className="w-32">Email</span>
            <input
              type="text"
              placeholder="Enter Email..."
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Credit/Debit Card</span>
          </label>
          <label className="input-group">
            <span className="w-32">Number</span>
            <input
              type="text"
              placeholder="Debit/Credit Card Number..."
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <label className="input-group">
            <span className="w-32">Amout</span>
            <input
              type="text"
              placeholder="Amount"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input-group">
            <span className="w-32">Password</span>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-secondary">CheckOut</button>
        </div>
      </form>
    );
};

export default CheckOut;