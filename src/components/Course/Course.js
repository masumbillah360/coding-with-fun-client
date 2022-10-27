import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {name,id, balance, description, picture, published_date } = course;
    return (
      <div>
        <div className="card bg-base-100 dark:bg-slate-600 shadow-xl">
          <figure>
            <img className="h-48 w-full" src={picture} alt={name + "photo"} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description[0]?.paragraph.length>100 ? description[0]?.paragraph?.slice(0,100)+"..." : description[0]?.paragraph}</p>
            <div className="card-actions justify-end">
              <Link to={`/course/${id}`} className='btn btn-sm btn-primary'>Details</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Course;