import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
//context import
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import CheckoutCourseInfo from '../CheckoutCourseInfo/CheckoutCourseInfo';

const PrimiumServices = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    return (
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 md:col-span-1">
          <CheckoutCourseInfo data={data}></CheckoutCourseInfo>
        </div>
        <div className="col-span-2 md:col-span-1">
          <CheckOut user={user}></CheckOut>
        </div>
      </div>
    );
};

export default PrimiumServices;