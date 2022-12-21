import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ course }) => {
  return (
    <div>
      <ul className="menu  dark:bg-slate-800 rounded-box p-1">
        <li className="mb-3">
          <Link
            to={`/course/${course.id}`}
            className="w-full flex justify-center items-center"
          >
            {course.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
