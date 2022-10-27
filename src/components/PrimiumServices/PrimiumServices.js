import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import CheckOut from '../CheckOut/CheckOut';
import CheckoutCourseInfo from '../CheckoutCourseInfo/CheckoutCourseInfo';

const PrimiumServices = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    const {displayName, email} = user;
    return (
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 md:col-span-1">
          <CheckoutCourseInfo data={data}></CheckoutCourseInfo>
        </div>
        <div className="col-span-2 md:col-span-1">
          <CheckOut></CheckOut>
        </div>
      </div>
    );
};

export default PrimiumServices;