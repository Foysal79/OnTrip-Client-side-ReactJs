import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";




const TourGuides = () => {

    const axiosPublic = useAxiosPublic();
    const {data : guid = [] } = useQuery({
        queryKey: ['guid'],
        queryFn: async () => {
           const res = await axiosPublic.get('/users/allGuid');
           return  res.data;
        }
   })

    return (
        <div>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        guid.map((guide, index) =>  <tr key={guid._id} >
            <th>{index + 1}</th>
            <td>{guide.name}</td>
            <td>{guide.email}</td>
            <td> <button className="btn bg-[#023047] hover:bg-[#023047] text-white" >
                   Guide Details
                </button> </td>
          </tr> )
      }
     
     
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default TourGuides;