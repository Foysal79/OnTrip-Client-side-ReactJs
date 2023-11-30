import React from 'react';
import { Helmet } from 'react-helmet-async';
import useMyWishlist from '../../../Hook/useMyWishlist';
import MyWishlistCard from './MyWishlistCard';

const MyWishlist = () => {
    const [MyWishlist, refetch] = useMyWishlist();
    return (
            <div className='bg-[#023047] min-h-screen text-white p-10 rounded-xl' >
            <Helmet>
                <title>OnTrip || My Wishlist </title>
            </Helmet>
            <h1 className=' text-2xl text-center md:text-5xl font-bold'>My Wishlist : {MyWishlist.length} </h1>

            <div className='space-y-8 mt-12' >
                {
                    MyWishlist.map(item => <MyWishlistCard key={item._id} item={item} ></MyWishlistCard> )
                }
            </div>
        </div>
    );
};

export default MyWishlist;