

const MyBookingCart = ({item}) => {
    const {pckageName, status, Price, tourDate, Guid, _id} = item || {}
    const handelDebated = (id) => {
        console.log("hendel delated", id);
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
                    status === "Review"  && <button className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12">Cancel</button> 
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
                <button disabled className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12">Apply button</button>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyBookingCart;