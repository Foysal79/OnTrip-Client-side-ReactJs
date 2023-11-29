import React from 'react';
import { useForm } from 'react-hook-form';




const ReactFrom = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    
    return (
         
            <div className='grid  lg:grid-cols-5 bg-[#023047]' >
                <div className='lg:col-span-1' >

                <h1 className="text-5xl font-bold text-center lg:text-left lg:mt-32 text-white md:pl-6" >Booking <br /> Your <br /> 
        Package</h1>

                </div>
                  <form className='space-y-2 lg:col-span-4 p-4' onSubmit={handleSubmit(onSubmit)}>
      <input  className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="pckageName" {...register("pckageName", {required: true, maxLength: 150})} />

      <input className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="Tourist Image" {...register("touristImage", {required: true, maxLength: 150})} />

      <input className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="Tourist Name" {...register("touristName", {required: true, maxLength: 150})} />

      <input className="w-full rounded-md border-2 py-2 px-4 text-black " type="email" placeholder="Tourist Email" {...register("touristEmail", {required: true, maxLength: 150})} />
      <input className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="Price" {...register("Price", {required: true, maxLength: 50})} />
      <input className="w-full rounded-md border-2 py-2 px-4 text-black " type="text" placeholder="Tour Date" {...register("tourDate", {required: true, maxLength: 50})} />

      <select className="w-full rounded-md border-2 py-2 px-4 text-black"   {...register("GuidList", { required: true })}>
                     <option disabled selected value="Guid1">Guid List </option>
                     <option value="Guid1">Guid 1</option>
                     <option value="Guid2">Guid2</option>
                      <option value="Guid3">Guid3</option>
                    <option value="Guid4">Guid4</option>
                     </select>

      

      <button className=" col-span-full  w-full text-white rounded-md bg-[#FFB703] py-4 px-10 text-xl font-bold"  type='submit' > Booking </button>
           </form>
            </div>
            
        
    );
};

export default ReactFrom;