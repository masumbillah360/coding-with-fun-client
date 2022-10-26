import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ course }) => {
  return (
    <div>
      <ul className="menu bg-base-100 rounded-box p-1">
        <li>
          <Link to={`/course/${course.id}`} className="w-full flex justify-center items-center">
            {course.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
