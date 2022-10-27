import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {
  const componentRef = useRef();
  const courseData = useLoaderData();
  const { name, id, description, picture, published_date} = courseData;
   const handlePrint = useReactToPrint({
     content: () => componentRef.current,
   });
  return (
    <div ref={componentRef}>
      <div className="flex justify-around items-center">
        <h1 className="text-4xl font-bold my-4">Topics : {name}</h1>
        <button className="btn btn-primary" onClick={handlePrint}>Download PDF</button>
      </div>
      <img
        className="w-2/3 mx-auto rounded-lg"
        src={picture}
        alt={name + "photo"}
      />
      {description.map((des) => (
        <div key={des.id} className="px-2">
          <div className="my-6">
            <h1 className="text-2xl my-2 font-bold">{des?.title}</h1>
            <p className="mb-4">{des?.paragraph}</p>
            {des?.thumbnail && (
              <img
                className="w-2/3 rounded-lg mx-auto"
                src={des?.thumbnail}
                alt="blogPhoto"
              />
            )}
          </div>
        </div>
      ))}
      <p>Published Date : {published_date}</p>
      <div className="text-center my-5">
        <Link to={`/premium/${id}`} className="btn btn-primary">
          Get Primium Access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
