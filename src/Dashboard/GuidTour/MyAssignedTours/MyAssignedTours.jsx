import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyAssignedTours = () => {
    return (
        <div className='bg-[#023047] min-h-screen text-white p-10 rounded-xl' >
            <Helmet>
                <title>OnTrip || My Assigned Tours </title>
            </Helmet>
            <h1 className=' text-2xl text-center md:text-5xl font-bold'>My Assigned Tours</h1>
        </div>
    );
};

export default MyAssignedTours;