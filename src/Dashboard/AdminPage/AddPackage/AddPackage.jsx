
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";



const AddPackage = () => {

	const  axiosSecure = useAxiosSecure();
    

    const handelAddServices = e => {
        e.preventDefault();
        const form = e.target;
        const tripTitle = form.tripTitle.value;
        const tripType = form.tripType.value;
        const tripPrice = form.tripPrice.value;
        const popularType = form.popularType.value;
        const imgUrl1 = form.imgUrl1.value;
        const imgUrl2 = form.imgUrl2.value;
        const imgUrl3 = form.imgUrl3.value;
        const imgUrl4 = form.imgUrl4.value;
        const imgUrl5 = form.imgUrl5.value;
        const description = form.description.value;

        

		const services = {
			tripTitle,
			tripType,
			tripPrice,
			popularType,
			imgUrl1,
			imgUrl2,
			imgUrl3,
			imgUrl4,
			imgUrl5	,
			description
		}

		axiosSecure.post("/allpackges", services)
		.then(res => {
			if(res.data.insertedId)
			{
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Your packges save in database",
					showConfirmButton: false,
					timer: 1500 });
			}
			e.target.reset();
			
		})
		
		

    }


    return (
        <div className="w-full  bg-[#163f53] text-white rounded-2xl " >
			<Helmet>
                <title> OnTrip || Add services </title>
               </Helmet>
            
           <form onSubmit={handelAddServices} >
           
           <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
	<htmForm  action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-center lg:text-left lg:mt-32 " >Add <br /> Your <br /> Package</h1>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                 {/* Trip Title */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Trip Title</label>
					<input id="ServiceName" name="tripTitle" type="text" placeholder="Trip Title" className="w-full rounded-md text-black py-2 px-4" />
				</div>
                 {/* Trip type */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Trip type</label>
					<input id="ServiceName" name="tripType" type="text" placeholder="Trip Type" className="w-full rounded-md text-black py-2 px-4" />
				</div>

				{/* Trip price */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Trip Price</label>
					<input id="ServiceName" name="tripPrice" type="number" placeholder="Trip Price" className="w-full rounded-md text-black py-2 px-4" />
				</div>
               {/* popular type */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">popular type</label>
					<input id="ServiceName" name="popularType" type="text" placeholder="popular type" className="w-full rounded-md text-black py-2 px-4" />
				</div>
                {/* img 1 */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Img Url 1</label>
					<input id="ServiceName" name="imgUrl1" type="text" placeholder="image url 1" className="w-full rounded-md text-black py-2 px-4" />
				</div>
                {/* img 2 */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Img Url 2</label>
					<input id="ServiceName" name="imgUrl2" type="text" placeholder="image url 2" className="w-full rounded-md text-black py-2 px-4" />
				</div>
                {/* img 3 */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Img Url 3</label>
					<input id="ServiceName" name="imgUrl3" type="text" placeholder="image url 3" className="w-full rounded-md text-black py-2 px-4" />
				</div>
                {/* img 4 */}
				<div className="col-span-full sm:col-span-3 space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Img Url 4</label>
					<input id="ServiceName" name="imgUrl4" type="text" placeholder="image url 4" className="w-full rounded-md text-black py-2 px-4" />
				</div>
				{/* img 5 */}
				<div className="col-span-full  space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Img Url 5</label>
					<input id="ServiceName" name="imgUrl5" type="text" placeholder="image url 5" className="w-full rounded-md text-black py-2 px-4" />
				</div>
                <div className="col-span-full  space-y-2">
					<label htmlFor="ServiceName" className="text-sm font-semibold">Description</label>
					{/* <input id="ServiceName" name="description" type="text" placeholder="Description" className="w-full rounded-md text-black py-2 px-4" /> */}
					<textarea className="rounded-xl p-4 text-black" id="ServiceName" name="description" type="text" placeholder="Description" cols="95" rows="12"></textarea>
				</div>
                <div className="col-span-full">
					<button  className="w-full rounded-md bg-[#FFB703] py-4 text-xl font-semibold" >Add</button>
				</div>
				
				
			</div>
		</fieldset>
		
	</htmForm>
            </section>
           </form>
        </div>
    );
};

export default AddPackage;