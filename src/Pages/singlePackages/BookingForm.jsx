
const BookingForm = ({tripTitle}) => {
    return (
        <div className="bg-[#023047] rounded-xl my-10" >
             <form  >
           
           <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
	<htmForm  action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
        <h1 className="text-5xl font-bold text-center lg:text-left lg:mt-32 text-white" >Booking <br /> Your <br /> 
        Package</h1>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ServiceName" className="text-lg font-medium text-white">Service Name</label>
					<input defaultValue={tripTitle}  id="ServiceName" name="serviceName" type="text" placeholder="Service Name" className="w-full rounded-md border-2 py-2 px-4 text-black " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="PictureURL" className="text-lg font-medium text-white">Picture URL of the Service</label>
					<input  id="PictureURL" name="pictureURL" type="text" placeholder="Picture URL" className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="youName" className="text-lg font-medium text-white">Your name</label>
					<input id="youName" name="yourName" type="text"    className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="yourEmail" className="text-lg font-medium text-white">Your email</label>
					<input id="yourEmail" name="yourEmail"     type="email"  className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="Price" className="text-lg font-medium text-white">Price</label>
					<input  id="Price" type="text" name="Price" placeholder="Price"  className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ServiceProviderImage" className="text-lg font-medium text-white">Service provider image</label>
					<input id="ServiceProviderImage"   type="text" name="ServiceProviderImage" placeholder="Service provider image"  className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div>
				<div className="col-span-full">
					<label htmlFor="Description" className="text-lg font-medium text-white">Description</label>
					<input  id="Description" name="description" type="text" placeholder="Description" className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div>
                {/* <div className="col-span-full">
					<label htmlFor="serviceArea" className="text-lg font-medium text-white">Service Area</label>
					<input  id="serviceArea" name="serviceArea" type="text" placeholder="Service Area" className="w-full rounded-md border-2 py-2 px-4 text-black" />
				</div> */}
                <div className="col-span-full py-10">
					<button className="w-full rounded-md bg-[#FFB703] py-4 px-10 text-xl font-semibold"  type='submit' > Update Service </button>
				</div>
				
				
			</div>
		</fieldset>
		
	</htmForm>
            </section>
           </form>
            
        </div>
    );
};

export default BookingForm;