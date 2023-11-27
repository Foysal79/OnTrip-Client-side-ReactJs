import React, { useContext } from 'react';
import { MdVerified } from "react-icons/md";
import { AuthContext } from '../../../Provider/AuthProvider';
const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='w-full bg-[#023047] py-10 text-white px-8 rounded-2xl ' >
            <div className='flex justify-center items-center'>
            <h1 className='text-5xl font-semibold text-center' > Admin Profile </h1>
            <MdVerified className='text-5xl font-semibold text-center text-[#0866FF] ' ></MdVerified>
            </div>

            <div className='flex gap-10 p-24 justify-center items-center'>
                <div  >
                <img className='rounded-full' src={user.photoURL} alt="" />
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

export default AdminHome;