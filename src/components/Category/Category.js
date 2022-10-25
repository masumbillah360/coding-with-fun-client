import React from "react";
import { Link } from "react-router-dom";

const Category = ({category}) => {
  return (
    <div>
      <ul className="menu bg-base-100 rounded-box p-2 text-center">
        <li>
          <Link className="w-full text-center" to="/">{category.name}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
