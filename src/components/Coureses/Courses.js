import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* left side nav menu */}
      <div className="col-span-4 md:col-span-1">
        {courses.map((course) => (
          <Categories key={course.id} course={course}></Categories>
        ))}
        <select className="select select-primary w-full hidden sm:block">
          {courses.map((course) => (
            <option>
              <p>hello</p>
            </option>
          ))}
        </select>
      </div>
      {/* right side course card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-4 md:col-span-3">
        {courses?.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
