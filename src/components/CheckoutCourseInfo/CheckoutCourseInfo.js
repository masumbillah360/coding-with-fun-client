import React from 'react';

const CheckoutCourseInfo = ({data}) => {
    console.log(data);
    const {name, picture, id, balance, published_date} = data;
    return (
      <div>
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Course name : {name}</h2>
            <p>Course Id : {id}</p>
            <p>Published Date : {published_date}</p>
            <h2 className='text-xl font-bold'>Price {balance}</h2>
          </div>
          <figure>
            <img src={picture} alt={`${name}`} />
          </figure>
        </div>
      </div>
    );
};

export default CheckoutCourseInfo;