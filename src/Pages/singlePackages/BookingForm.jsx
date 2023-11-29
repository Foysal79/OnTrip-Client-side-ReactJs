import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import useAxiosSecure from '../../Hook/useAxiosSecure';


const BookingForm = ({tripTitle, tripPrice}) => {
	const {user} = useContext(AuthContext);

	const axiosSecure = useAxiosSecure();

	const axiosPublic = useAxiosPublic()
    const {data : guid = [] } = useQuery({
        queryKey: ['guid'],
        queryFn: async () => {
           const res = await axiosPublic.get('/users/allGuid');
           return  res.data;
        }
   })

	const { register, handleSubmit } = useForm();
    const onSubmit = data => {
		
			console.log(data);

			axiosSecure.post('/bookedPackges', data)
			.then(res => {
				console.log(res.data);

				if(res.data.insertedId)
				{
					Swal.fire({
						title: `congratulations`,
						text: "we will contact you shortly!",
						icon: "success"
					
					});
				}
			})

		
		
        
    }
	const handelUser = () => {
		Swal.fire({
			icon: "error",
			title: "Booking any tour pakages must be Login pls",
			text: "Something went wrong!",
			footer: '<a href="/signIn">Loging Page </a>'
		  });

	}

    return (
        <div className="bg-[#023047] rounded-xl my-10" >
             <form onSubmit={handleSubmit(onSubmit)}  >
           
           <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
	<div  action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
        <h1 className="text-5xl font-bold text-center lg:text-left lg:mt-32 text-white" >Booking <br /> Your <br /> 
        Package</h1>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ServiceName" className="text-lg font-medium text-white">Name of the package
                    </label>


                    <input defaultValue={tripTitle} className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="pckageName" {...register("pckageName", {required: true, maxLength: 150})} />

                    <input hidden defaultValue={"Review"} className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="status" {...register("status", { maxLength: 150})} />

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
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="Price" className="text-lg font-medium text-white">Price</label>
					
					{/* <input  id="Price" type="text" name="Price" placeholder="Price"  className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}
					<input defaultValue={tripPrice} className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="Price" {...register("Price", {required: true, maxLength: 50})} />
					
				</div>

				<div className="col-span-full sm:col-span-3">
					<h2  className="text-lg font-medium text-white">Tour Date</h2>
					{/* <input id="ServiceProviderImage"   type="text" name="tourDate" placeholder="Tour Date"  className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}
					<input className="w-full rounded-md border-2 py-2 px-4 text-black " type="date" placeholder="Tour Date" {...register("tourDate", {required: true, maxLength: 50})} />
					
				</div>

				<div className="col-span-full">
					<label htmlFor="Description" className="text-lg font-medium text-white">Guid List</label>
					{/* <input  id="Description" name="description" type="text" placeholder="Description" className="w-full rounded-md border-2 py-2 px-4 text-black" /> */}

					<select className="w-full rounded-md border-2 py-2 px-4 text-black  "   {...register("Guid", { required: true })}>
                     <option disabled selected value="Guid1">Guid List </option>
					{
						guid.map(guid => <option className='bg-[#219EBC]' key={guid._id} value={guid.email}>{guid.name}</option> )
					}
                     {/* <option value="Guid1">Guid 1</option>
                     <option value="Guid2">Guid2</option>
                      <option value="Guid3">Guid3</option>
                    <option value="Guid4">Guid4</option> */}
                     </select>

				</div>
                {/* <div className="col-span-full">
					<label htmlFor="serviceArea" className="text-lg font-medium text-white">Service Area</label>
					<input  id="serviceArea" name="serviceArea" type="text" placeholder="Service Area" className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div> */}

                 {
					user && <button className=" col-span-full 
					w-full text-white rounded-md bg-[#FFB703] hover:bg-[#FFB703] py-4 px-10 text-xl font-bold"  
				   type='submit' > Booking </button> 
				 }
				 {
					!user  && <div> <h2 onClick={handelUser} className="text-white w-10/12 mx-auto btn bg-[#FFB703] hover:bg-[#FFB703] " > booking  </h2> </div>
				 }

				{/* {
					user ? 
					<button className=" col-span-full 
					 w-full text-white rounded-md bg-[#FFB703] hover:bg-[#FFB703] py-4 px-10 text-xl font-bold"  
					type='submit' > Booking </button> 
					: <div> <h2 onClick={handelUser} className="text-white w-10/12 mx-auto btn bg-[#FFB703] hover:bg-[#FFB703] " > booking  </h2> </div>
				} */}
                
					
				
				
				
			</div>
		</fieldset>
		
	</div>
            </section>
           </form>
            
        </div>
    );
};

export default BookingForm;