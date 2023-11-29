import { Helmet } from "react-helmet-async";
import useBooking from "../../../Hook/useBooking";
import MyBookingCart from "./MyBookingCart";


const MyBooking = () => {
    const [bookData, refetch] = useBooking()
    return (
        <div className='bg-[#023047] min-h-screen text-white p-10 rounded-xl' >
            <Helmet>
                <title>OnTrip || My Booking </title>
            </Helmet>
            <h1 className=' text-2xl text-center md:text-5xl font-bold'>My Booking : {bookData.length} </h1>

            <div className="grid grid-cols-1 gap-10 my-10" >
                {
                    bookData.map(bookitem => <MyBookingCart key={bookitem._id} item={bookitem} ></MyBookingCart> )
                }
            </div>
        </div>
    );
};

export default MyBooking;