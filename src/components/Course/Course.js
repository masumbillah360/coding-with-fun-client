import React from 'react';

const Course = ({course}) => {
    console.log(course);
    const {name, description, balance, picture, published_date } = course;
    return (
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description.length>100 ? description.slice(0,100)+"..." : description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Course;