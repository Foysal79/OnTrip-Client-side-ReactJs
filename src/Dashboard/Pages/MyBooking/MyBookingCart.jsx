

const MyBookingCart = ({item}) => {
    const {pckageName, status, touristImage, touristName, touristEmail, Price, tourDate, Guid} = item || {}
    const status1 = "Accepted";
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
                    status === "Review" ? <button className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12">Cancel</button> : <button disabled className="btn w-3/12">Cancel</button>
                }
                {
                    status === "Accepted" ? <button className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12 ">Pay</button> : <button disabled className="btn w-3/12">Pay</button>
                }
                <button disabled className="btn bg-[#FFB703] hover:bg-[#FFB703] w-3/12">Apply button</button>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyBookingCart;