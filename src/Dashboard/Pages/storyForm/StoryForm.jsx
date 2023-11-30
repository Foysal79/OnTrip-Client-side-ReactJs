import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";


import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const StoryForm = () => {
    const {user} = useContext(AuthContext);
	const navigate = useNavigate();

	const axiosSecure = useAxiosSecure();

	
    

	const { register, handleSubmit } = useForm();


    const onSubmit = data => {
		
			console.log(data);

			axiosSecure.post('/allStory', data)
			.then(res => {
				console.log(res.data);

				if(res.data.insertedId)
				{
					Swal.fire({
						title: `Thank You your Story Add`,
						text: "welcome to onTrip family",
						icon: "success"
					
					});

					// navigate('/dashboard/myBooking')

				}
			})

		
		
        
    }

    return (
        <div className="bg-[#023047] rounded-xl my-10" >
             <form onSubmit={handleSubmit(onSubmit)}  >
           
           <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
	<div  action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
        <h1 className="text-5xl font-bold text-center lg:text-left lg:mt-32 text-white" >Add <br /> Your <br /> 
        Story</h1>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ServiceName" className="text-lg font-medium text-white">Name of the package you tour
                    </label>


                    <input  className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="pckageName" {...register("pckageName", {required: true, maxLength: 150})} />

                    

					{/* <input defaultValue={tripTitle}  id="ServiceName" name="pckageName" type="text" placeholder="Name of the package" className="w-full rounded-md border-2 py-2 px-4 text-black " /> */}
				</div>


				<div className="col-span-full sm:col-span-3">
					<label htmlFor="PictureURL" className="text-lg font-medium text-white">Tourist Image</label>

					{/* <input  id="PictureURL" name="touristImage" type="text" placeholder="Tourist Image" className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}
					<input defaultValue={user?.photoURL} className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="Tourist Image" {...register("touristImage", {required: true, maxLength: 150})} />
				</div>

				<div className="col-span-full sm:col-span-3">
					<label htmlFor="youName" className="text-lg font-medium text-white">Tourist Name</label>
					
					{/* <input id="youName" name="touristName" type="text" placeholder="Tourist Name"    className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}

					<input defaultValue={user?.displayName} className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="Tourist Name" {...register("touristName", {required: true, maxLength: 150})} />

				</div>

                <div className="col-span-full sm:col-span-3">
					<h2 htmlFor="yourEmail" className="text-lg font-medium text-white">Tourist Email
               </h2>
					{/* <input id="yourEmail" name="touristEmail" placeholder="Tourist Email"     type="email"  className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}

					<input defaultValue={user?.email} className="w-full rounded-md border-2 py-2 px-4 text-black " type="email" placeholder="Tourist Email" {...register("touristEmail", {required: true, maxLength: 150})} />

				</div>

                <div className="col-span-full sm:col-span-6">
					<label htmlFor="Price" className="text-lg font-medium text-white">Add Img Url</label>
					
					{/* <input  id="Price" type="text" name="Price" placeholder="Price"  className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}
					<input  className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="img Url" {...register("imgUrl", {required: true, maxLength: 150})} />
					
				</div>

				<div className="col-span-full sm:col-span-6">
					<h2  className="text-lg font-medium text-white">Tour Details</h2>
					{/* <input id="ServiceProviderImage"   type="text" name="tourDate" placeholder="Tour Date"  className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}
                    {/* <textarea className="w-full  rounded-md border-2 py-2 px-4 text-black "    placeholder="Details" id="" cols="30" rows="10" {...register("Details", {required: true, maxLength: 150})} ></textarea> */}

					<input className="w-full  rounded-md border-2 py-2 px-4 text-black " type="text" 
                    placeholder="Details" {...register("Details", { maxLength: 150})} />
					
				</div>

				
                {/* <div className="col-span-full">
					<label htmlFor="serviceArea" className="text-lg font-medium text-white">Service Area</label>
					<input  id="serviceArea" name="serviceArea" type="text" placeholder="Service Area" className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div> */}

                 
					<button className=" col-span-full 
					w-full text-white rounded-md bg-[#FFB703] hover:bg-[#FFB703] py-4 px-10 text-xl font-bold"  
 type='submit' > submit </button> 
				
			

				
					
				
				
				
			</div>
		</fieldset>
		
	</div>
            </section>
           </form>
            
        </div>
    );
};

export default StoryForm;