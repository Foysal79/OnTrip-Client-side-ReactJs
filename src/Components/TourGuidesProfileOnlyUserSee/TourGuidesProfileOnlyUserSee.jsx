import { Helmet } from "react-helmet-async";
import { MdVerified } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const TourGuidesProfileOnlyUserSee = () => {
    const SinglePackages = useLoaderData();
    const {_id , name, email, done, contact, education, guidImg, workExprience} = SinglePackages || {}

    const handelReview = () =>
    {
        Swal.fire({
            title: "Thanks your Feedback!",
            text: "You clicked the button!",
            icon: "success"
          });
    }

    return (
        <div className=' bg-[#023047] my-12 w-10/12 mx-auto py-10 text-white px-8 rounded-2xl ' >
        <Helmet>
            <title>OnTrip || guid Profile {name}</title>
        </Helmet>
        <div className='flex justify-center items-center mb-5'>
            
                <h1 className=' text-2xl md:text-5xl font-semibold text-center' > Guid Profile </h1> <MdVerified className='text-5xl font-semibold text-center text-[#00ff0b] ' ></MdVerified> 
            
            
        
        
        </div>

        <div className=' space-y-5 md:flex gap-10 md:p-24 justify-center items-center'>
            <div  >
                {
                    guidImg ? <img className='rounded-full w-28' src={guidImg} alt="" /> 
                    : 
                    <img className='rounded-full w-28' src="https://i.ibb.co/GxCjQFh/aveter1.jpg" alt="" />
                }
            
            </div>

            <div className='md:border-l-2 md:pl-10' >
            <h1> <span className='text-2xl font-semibold' >Name : </span> <span className='text-lg font-medium text-gray-400' >{name}</span>  </h1>
            <h1> <span className='text-2xl font-semibold' >Email : </span> <span className='text-lg font-medium text-gray-400'  >{email}</span>  </h1>
            <h1> <span className='text-2xl font-semibold' >Education : </span> <span className='text-lg font-medium text-gray-400'  >{education}</span>  </h1>
            {
                contact ? <h1> <span className='text-2xl font-semibold' >Phone : </span> <span className='text-lg font-medium text-gray-400'  >{contact}</span>  </h1> : <h1> <span className='text-2xl font-semibold' >Phone : </span> <span className='text-lg font-medium text-gray-400'  >N/A</span>  </h1>
            }
            
           
            
            

            </div>
        </div>

        <div className="flex justify-center items-center my-10" >
        <h1 className="text-2xl font-bold" >Rating : </h1>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1"  />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
</div>

        </div>

        <div className="text-center space-y-4" >
            <h1 className="text-4xl font-semibold" >Work Experience : <span className="text-gray-400" >{workExprience} (Years)</span> </h1>
            <h4 className="text-2xl font-semibold" >Work Done : {done? <span className="text-gray-400" >{done}</span>
             : <span className="text-gray-400" >10+</span> } </h4>

             

             <div className="space-y-4" >
             <h2 className="text-xl font-semibold" >Reviews</h2>
            
            
            <textarea className="rounded-xl w-6/12 h-24 text-black p-6" name="" id="" ></textarea> 
            
            
            <button onClick={handelReview} className="btn bg-[#FFB703] hover:bg-[#FFB703]  block text-white w-4/12 mx-auto" >submit</button>
             
             </div>
        </div>
        
       


    </div>
    );
};

export default TourGuidesProfileOnlyUserSee;