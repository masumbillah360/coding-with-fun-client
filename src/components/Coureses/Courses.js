import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <Categories></Categories>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 col-span-3">
        {courses?.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
