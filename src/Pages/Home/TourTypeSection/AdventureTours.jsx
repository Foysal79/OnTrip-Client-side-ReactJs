import React from 'react';
import usePackages from '../../../Hook/usePackages';
import Carts from './Carts';

const AdventureTours = () => {
    const [packages] = usePackages();
    const AdventureTours = packages.filter(item => item.tripType === "AdventureTours")
    return (
        <div className="min-h-screen space-y-10" >
            <h1 className="text-center  mt-10 text-4xl font-bold" >Adventure Tours</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 w-11/12 mx-auto mt-10" >
                {
                   AdventureTours.map(item => <Carts key={item._id} item={item} ></Carts>)
                }
            </div>
        </div>
    );
};

export default AdventureTours;