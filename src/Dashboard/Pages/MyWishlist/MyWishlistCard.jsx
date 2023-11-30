import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useMyWishlist from "../../../Hook/useMyWishlist";
import { Link } from "react-router-dom";


const MyWishlistCard = ({item}) => {
    const {tripTitle, tripType, tripPrice, menuId, _id} = item || {}
    const [MyWishlist, refetch] = useMyWishlist();
    const axiosSecure = useAxiosSecure()


    console.log( menuId)
    console.log( _id)




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

            axiosSecure.delete(`/myWishList/${id}`)
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
        <div className="card bg-[#219EBC] border-4   shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{tripTitle}</h2>
    <p className="font-bold" >Type : {tripType}</p>
    <p className="font-bold" >Price : {tripPrice}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handelDebated(_id)} className="btn bg-[#EF2F39] hover:bg-[#EF2F39]  text-white">Delate</button>
      <Link to={`/singlePackages/${menuId}`} >
      <button className="btn btn-primary">details</button>

      </Link>
      
    </div>
  </div>
</div>
    );
};

export default MyWishlistCard;