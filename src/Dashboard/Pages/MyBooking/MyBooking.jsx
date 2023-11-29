import { Helmet } from "react-helmet-async";


const MyBooking = () => {
    return (
        <div className='bg-[#023047] min-h-screen text-white p-10 rounded-xl' >
            <Helmet>
                <title>OnTrip || My Booking </title>
            </Helmet>
            <h1 className=' text-2xl text-center md:text-5xl font-bold'>My Booking</h1>
        </div>
    );
};

export default MyBooking;