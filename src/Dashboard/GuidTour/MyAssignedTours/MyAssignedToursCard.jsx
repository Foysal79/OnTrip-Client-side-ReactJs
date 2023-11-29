import Swal from "sweetalert2";
import useAssignedTours from "../../../Hook/useAssignedTours";


const MyAssignedToursCard = ({item}) => {
    const {_id, pckageName, status, touristImage, touristName, touristEmail, Price, tourDate} = item || {}

    const [AssignedTours, refetch] = useAssignedTours();

    const handelAccepted = ( id ) => {
        
        fetch(`http://localhost:5000/bookedPackges/${id}`, {
           method : "PATCH",
           headers : {
               'content-type' : 'application/json',
           },
           body : JSON.stringify({status : 'Accepted'})
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
                refetch();
                Swal.fire({
                    title: "Accepted",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })

    }
    const handelRejected = ( id ) => {
        console.log(" handelRejected ", id);

        fetch(`http://localhost:5000/bookedPackges/${id}`, {
           method : "PATCH",
           headers : {
               'content-type' : 'application/json',
           },
           body : JSON.stringify({status : 'Rejected'})
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
                refetch();
                Swal.fire({
                    title: "Rejected",
                    text: "You clicked the button!",
                    icon: "error"
                  });
            }
        })

    }

    return (
        <div>
            <div className="card  bg-[#39c2e4] text-black border-4 border-white">
          <div className="card-body">
            <h2 className="card-title"> <span className="text-3xl font-bold" > Packages Name : </span> <span className="text-gray-700 font-bold" > {pckageName} .</span> </h2>
            <h2> <span className="text-2xl font-bold" >Tourist Name : </span> <span className="text-gray-700 text-lg font-bold" > {touristName} </span>  </h2>
            <h2> <span className="text-2xl font-bold" >Tour Date : </span> <span className="text-gray-700 text-lg font-bold" > {tourDate} .</span>  </h2>
            <h2> <span className="text-2xl font-bold" >Tour Price : </span> <span className="text-gray-700 text-lg font-bold" > {Price} $ .</span>  </h2>
            <div className="flex gap-6 justify-center items-center" >
            <h2> <span className="text-2xl font-bold" >Status : </span>   </h2>
            <div className="card-actions justify-evenly gap-6">

                {
                    status === "Rejected" &&
                        <button  className="btn bg-[#FF0000] hover:bg-[#FF0000] text-white ">Rejected</button>

                    
                }

                {
                    status === "Accepted" &&
                    <button   className="btn bg-[#00FF00] hover:bg-[#00FF00] ">Accepted</button>

                    
                }

                {
                    status === "Review" && <>
                     
                     <button onClick={() => handelAccepted(_id)} className="btn bg-[#00FF00] hover:bg-[#00FF00] ">Accepted</button>

                   <button onClick={() => handelRejected(_id)}  className="btn bg-[#FF0000] hover:bg-[#FF0000] text-white ">Rejected</button>

                    </>
                }
                
                
              
            </div>
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default MyAssignedToursCard;