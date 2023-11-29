import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import BookingForm from "./BookingForm";
import ReactFrom from "./ReactFrom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";




const SinglePackages = () => {
    const SinglePackages = useLoaderData();
    const {_id, tripTitle, tripType, tripPrice, popularType, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, description} = SinglePackages || {}
    const details = description.split('|')


    const axiosPublic = useAxiosPublic()
    const {data : guid = [] } = useQuery({
        queryKey: ['guid'],
        queryFn: async () => {
           const res = await axiosPublic.get('/users/allGuid');
           return  res.data;
        }
   })

    return (
        <div className="my-10 w-9/12 mx-auto" >
            <Helmet>
                <title> OnTrip || {tripTitle} </title>
            </Helmet>
            <h1 className="text-center text-2xl lg:text-5xl  font-bold mt-10" >{tripTitle}</h1>
            {/* phot glary */}
            <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-50 bg-[#023047] rounded-2xl my-10 ">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={imgUrl1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm  dark:dark:bg-gray-500 aspect-square" src={imgUrl2} />
		<img alt="" className="w-full h-full rounded shadow-sm  dark:dark:bg-gray-500 aspect-square" src={imgUrl3} />
		<img alt="" className="w-full h-full rounded shadow-sm  dark:dark:bg-gray-500 aspect-square" src={imgUrl4} />
		<img alt="" className="w-full h-full rounded shadow-sm  dark:dark:bg-gray-500 aspect-square" src={imgUrl5} />
		
	</div>
            </section>
            {/* about */}
              <div className="" >
                  <h1 className="text-4xl font-bold my-10 text-center " > Tour About</h1>
                  <p className="text-lg font-normal text-gray-500" >{details[1]}</p>
              </div>
              {/* plane */}

              {/* 1 */}
              <h1 className="text-4xl font-bold text-center" >Tour Plane</h1>
          <div className="mt-10 space-y-4" >
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-lg font-normal"> <span className="text-xl font-bold" >Day 1 : </span> 
           {
            details[0]
           }
            </div>
        <div className="collapse-content"> 
         <p>{details[1]}</p>
          </div>
          </div>
          {/* 2 */}
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-lg font-normal">
            <span className="text-xl font-bold" >Day 2 : </span> 
           {
            details[3]
           }
            </div>
        <div className="collapse-content"> 
         <p>{details[4]}</p>
          </div>
          </div>
          {/* 4 */}
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-lg font-normal">
            <span className="text-xl font-bold" >Day 3 : </span> 
           {
            details[5]
           }
            </div>
        <div className="collapse-content"> 
         <p>{details[6]}</p>
          </div>
          </div>
          </div>




          <h1 className="text-4xl font-bold text-center mt-10" >Tourist Guide List</h1>

              <select className="select select-primary w-full mt-10  text-xl font-semibold">
               <option disabled selected>Tour Guide List</option>
               {
                guid.map(guide => <option key={guide._id} >{guide.name}</option>)
               }
              {/* <option>Game of Thrones</option>
                <option>Lost</option>
               <option>Breaking Bad</option>
              <option>Walking Dead</option> */}
              </select>
              {/* form */}

             <BookingForm tripTitle={tripTitle} tripPrice={tripPrice} ></BookingForm>
             {/* <ReactFrom></ReactFrom> */}
            

        </div>
    );
};

export default SinglePackages;