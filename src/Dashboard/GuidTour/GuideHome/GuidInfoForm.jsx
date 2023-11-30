import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2/dist/sweetalert2.js'



const GuidInfoForm = ({email}) => {

    const axiosPublic = useAxiosPublic();
    const {data : guid = [] } = useQuery({
        queryKey: ['guid'],
        queryFn: async () => {
           const res = await axiosPublic.get('/users/allGuid');
           return  res.data;
        }
   })

   const singleGuid = guid.find(item => item.email ===  email)

//    console.log("guid data fond", singleGuid._id);





    


    const handelupdate = (e) =>{
        e.preventDefault();
        // contact , guidImg, education, workExprience
        const form = e.target;
        const contact = form.contact.value;
        const guidImg = form.guidImg.value;
        const education = form.education.value;
        const workExprience = form.workExprience.value;

        const guidInfo = {
            contact, 
            guidImg,
            education,
            workExprience
            // email : singleGuid.email,
            // name : singleGuid.name,



        }
        console.log("guid data info", guidInfo);



        fetch(`http://localhost:5000/users/${singleGuid._id}`, {
			method: "PATCH",
            headers:{
                "content-type": "application/json"
            },
			body: JSON.stringify(guidInfo)
				
		} )
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data.modifiedCount > 0)
			{
				Swal.fire({
                    title: "Your Profile Update !",
                    text: "You clicked the button!",
                    icon: "success"
                  });
			}
		})









        

    }

    console.log(email);
    return (
        <div>
            

<form onSubmit={handelupdate} className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="guidImg" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Guid Img url</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="contact" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="education" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education</label>
  </div>
  
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="workExprience" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">work Exprience</label>
    </div>
    
  
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
    );
};

export default GuidInfoForm;