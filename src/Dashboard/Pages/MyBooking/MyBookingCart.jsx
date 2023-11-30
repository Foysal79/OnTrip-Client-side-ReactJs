
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useBooking from "../../../Hook/useBooking";




const MyBookingCart = ({item}) => {
    const {pckageName, status, Price, tourDate, Guid, _id} = item || {}
    

    const axiosSecure = useAxiosSecure()
    const [bookData, refetch] = useBooking();

    const handelDebated = (id) => {
        console.log("delated id", id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {

            axiosSecure.delete(`/bookedPackges/${id}`)
            .then( res => {
              if(res.data.deletedCount > 0)
              {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });

                refetch();

              }
            })

            
          }
        });

    }
    return (
      <div>
        <div className="card  bg-[#39c2e4] text-black border-4 border-white">
          <div className="card-body">
            <h2 className="card-title"> <span className="text-3xl font-bold" > Packages Name : </span> <span className="text-gray-700 font-bold" > {pckageName} .</span> </h2>
            <h2> <span className="text-2xl font-bold" >Guide Email : </span> <span className="text-gray-700 text-lg font-bold" > {Guid} </span>  </h2>
            <h2> <span className="text-2xl font-bold" >Tour Date : </span> <span className="text-gray-700 text-lg font-bold" > {tourDate} .</span>  </h2>
            <h2> <span className="text-2xl font-bold" >Tour Price : </span> <span className="text-gray-700 text-lg font-bold" > {Price} $ .</span>  </h2>
            <h2> <span className="text-2xl font-bold" >Status : </span> <span className="text-gray-700 text-lg font-bold" > {status} .</span>  </h2>
            <div className="card-actions justify-evenly">


                {
                    status === "Review"  && <button onClick={() => handelDebated(_id)} className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12">Cancel</button> 
                }
                {
                    status === "Rejected" &&  <button onClick={() => handelDebated(_id) }  className="btn w-3/12 text-white bg-[#FF0000] hover:bg-[#FF0000] ">Cancel</button>
                }
                {
                    (status !== "Rejected" && status !== "Review") && <button disabled  className="btn w-3/12 ">Cancel</button>
                }
                
                {
                    status === "Accepted" ? <button className="btn bg-[#00FF00] hover:bg-[#00FF00] w-3/12 ">Pay</button> : <button disabled className="btn w-2/12">Pay</button>
                }

                {
                  bookData.length > 2 ? <button  className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12">Apply button</button>
                  
                    : <button disabled className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12">Apply button</button>
                }
                
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyBookingCart;