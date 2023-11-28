import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { MdVerified } from "react-icons/md";
import useAdmin from "../../Hook/useAdmin";
import useGuid from "../../Hook/useGuid";


const MyProfile = () => {


     const [isAdmin] = useAdmin();
     const [isGuid] = useGuid();

    const {user} = useContext(AuthContext);
    return (
        <div className='w-full bg-[#023047] py-10 text-white px-8 rounded-2xl ' >
            <Helmet>
                <title>OnTrip || Admin Home</title>
            </Helmet>
            <div className='flex justify-center items-center'>
                {
                    isGuid && <><h1 className='text-5xl font-semibold text-center' > Guid Profile </h1> <MdVerified className='text-5xl font-semibold text-center text-[#00ff0b] ' ></MdVerified> </>
                }
                {
                    isAdmin && <><h1 className='text-5xl font-semibold text-center' > Admin Profile </h1> <MdVerified className='text-5xl font-semibold text-center text-[#0866FF] ' ></MdVerified> </>
                }
                {
                    (!isAdmin && !isGuid) && <><h1 className='text-5xl font-semibold text-center' > User Profile </h1> <MdVerified className='text-5xl font-semibold text-center text-[#FFB703] ' ></MdVerified> </>
                }
            
            
            </div>

            <div className='flex gap-10 p-24 justify-center items-center'>
                <div  >
                <img className='rounded-full w-28' src={user.photoURL} alt="" />
                </div>

                <div className='border-l-2 pl-10' >
                <h1> <span className='text-2xl font-semibold' >Name : </span> <span className='text-lg font-medium text-gray-400' >{user.displayName}</span>  </h1>
                <h1> <span className='text-2xl font-semibold' >Email : </span> <span className='text-lg font-medium text-gray-400'  >{user.email}</span>  </h1>
                {
                    user.phoneNumber && <h1> <span className='text-2xl font-semibold' >Phone : </span> <span className='text-lg font-medium text-gray-400'  >{user.phoneNumber }</span>  </h1>
                }
                {
                    user.phoneNumber || <h1> <span className='text-2xl font-semibold' >Phone : </span> <span className='text-lg font-medium text-gray-400'  >N/A</span>  </h1>
                }
                
                
                <p>{user?.phoneNumber}</p>

                </div>
            </div>
            
           


        </div>
    );
};

export default MyProfile;