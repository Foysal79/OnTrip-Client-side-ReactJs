import { Helmet } from "react-helmet-async";
import useBooking from "../../../Hook/useBooking";
import MyBookingCart from "./MyBookingCart";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReactConfetti from "react-confetti";


const MyBooking = () => {
    const [bookData, refetch] = useBooking()
    const [showConfetti, setShowConfetti] = useState(true);
    

    
        if(bookData.length === 3)
        {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cognations you have add 3 or more packages apply button active",
                showConfirmButton: false,
                timer: 2000
              });
             

        }
    

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowConfetti(false);
        }, 5000); // Set the duration in milliseconds (e.g., 5000 for 5 seconds)
    
        return () => {
          clearTimeout(timeout);
        };
      }, []);


    return (
        <div className='bg-[#023047] min-h-screen text-white p-10 rounded-xl' >
            <Helmet>
                <title>OnTrip || My Booking </title>
            </Helmet>

           
            {

           (bookData.length === 3 && showConfetti) && <ReactConfetti  />

             
            }

                    
          
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