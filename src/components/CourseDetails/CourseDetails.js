import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseData = useLoaderData();
  const { name, description, picture, published_date, balance } = courseData;
  console.log(description)
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-4">Topics : {name}</h1>
      <img
        className="w-2/3 mx-auto rounded-lg"
        src={picture}
        alt={name + "photo"}
      />
      <div className="px-2">
        <div className="my-6">
          <h1 className="text-2xl my-2 font-bold">
            {description.description_1.title}
          </h1>
          <p className="mb-4">{description.description_1.paragraph}</p>
          {description.description_1.thumbnail && (
            <img
              className="w-2/3 rounded-lg mx-auto"
              src={description.description_1.thumbnail}
              alt="blogPhoto"
            />
          )}
        </div>
        <div className="my-6">
          <h1 className="text-2xl my-2 font-bold">
            {description.description_2.title}
          </h1>
          <p className="mb-4">{description.description_2.paragraph}</p>
          {description.description_2.thumbnail && (
            <img
              className="w-2/3 rounded-lg mx-auto"
              src={description.description_2.thumbnail}
              alt="blogPhoto"
            />
          )}
        </div>
        <div className="my-6">
          <h1 className="text-2xl my-2 font-bold">
            {description.description_3.title}
          </h1>
          <p className="mb-4">{description.description_3.paragraph}</p>
          {description.description_3.thumbnail && (
            <img
              className="w-2/3 rounded-lg mx-auto"
              src={description.description_3.thumbnail}
              alt="blogPhoto"
            />
          )}
        </div>
        <div className="my-6">
          <h1 className="text-2xl my-2 font-bold">
            {description.description_4.title}
          </h1>
          <p className="mb-4">{description.description_4.paragraph}</p>
          {description.description_4.thumbnail && (
            <img
              className="w-2/3 rounded-lg mx-auto"
              src={description.description_4.thumbnail}
              alt="blogPhoto"
            />
          )}
        </div>
        <div className="my-6">
          <h1 className="text-2xl my-2 font-bold">
            {description.description_5.title}
          </h1>
          <p className="mb-4">{description.description_5.paragraph}</p>
          {description.description_5.thumbnail && (
            <img
              className="w-2/3 rounded-lg mx-auto"
              src={description.description_5.thumbnail}
              alt="blogPhoto"
            />
          )}
        </div>
        <p>
          {published_date} {balance}
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
