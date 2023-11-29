import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAssignedTours from '../../../Hook/useAssignedTours';
import MyAssignedToursCard from './MyAssignedToursCard';

const MyAssignedTours = () => {

    const [AssignedTours, refetch] = useAssignedTours();
    return (
        <div className='bg-[#023047] min-h-screen text-white p-10 rounded-xl' >
            <Helmet>
                <title>OnTrip || My Assigned Tours </title>
            </Helmet>
            <h1 className=' text-2xl text-center md:text-5xl font-bold'>My Assigned Tours : {AssignedTours.length} </h1>

            <div className="grid grid-cols-1 gap-10 my-10" >
                {
                    AssignedTours.map(item => <MyAssignedToursCard key={item._id} item={item} ></MyAssignedToursCard> )
                }
            </div>
        </div>
    );
};

export default MyAssignedTours;