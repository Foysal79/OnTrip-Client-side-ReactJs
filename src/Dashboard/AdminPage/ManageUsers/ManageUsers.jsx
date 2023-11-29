import { useQuery } from '@tanstack/react-query';
import { FaRegUserCircle } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { MdAddModerator } from "react-icons/md";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data : users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
           const res = await axiosSecure.get('/users', {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('access-token')}`
            }
           });
           return res.data;
        }
    })

//   make admin
    const handelMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0 )
            {
                refetch();
                Swal.fire({
                    title: `cognations ${user.name} is an admin now`,
                    text: "You clicked the button!",
                    icon: "success",
                    
                });
            }
        })

    }
    // make guid
    const handelMakeGuid = user => {
        axiosSecure.patch(`/users/guid/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0 )
            {
                refetch();
                Swal.fire({
                    title: `cognations ${user.name} is an Guid now`,
                    text: "You clicked the button!",
                    icon: "success",
                    
                });
            }
        })

    }

    return (
        <div className='text-white bg-[#023047] p-8 rounded-2xl min-h-screen space-y-5' >
            <Helmet>
                <title> OnTrip || Manage Users</title>
            </Helmet>
            <h1 className='text-5xl font-bold text-center '>All Users : {users.length} </h1>
            <div className="overflow-x-auto text-white hover:bg-[#023047]">
  <table className="table text-white hover:bg-[#023047] ">
    {/* head */}
    <thead className='text-white hover:bg-[#023047]' >
      <tr className='text-xl font-semibold text-gray-400' >
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Or Guide</th>
        
      </tr>
    </thead>
    <tbody className='text-white hover:bg-[#023047]' >
      {
        users.map((user, index) =>  <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td  >
        {user.role === 'admin' && <button className='text-base btn bg-[#0866FF] hover:bg-[#0866FF] ' > <GrUserAdmin /> Admin</button> }

         {(user.role !== 'admin' && user.role !== 'guid' ) && <button className='text-base btn bg-[#FFB703] hover:bg-[#e6b63d] disabled ' > <FaRegUserCircle /> User </button> } 

         {user.role === 'guid' && <button className='text-base btn bg-[#00ff0b] hover:bg-[#00ff0b] ' > <MdAddModerator /> Guid</button> } 
         
         </td>
          {/* admin  */}

          {
            (user.role === 'guid' || user.role === 'admin') ? <td className='space-x-3' >
            <button  className='text-base btn  ' > <GrUserAdmin /> Admin</button> 
        {/* gide */}
         <button  className='text-base btn  ' > <MdAddModerator /> Guid</button> 

         </td> : <td className='space-x-3' >
            <button onClick={ () => handelMakeAdmin(user)} className='text-base btn bg-[#0866FF] hover:bg-[#0866FF] ' > <GrUserAdmin /> Admin</button> 
        {/* gide */}
         <button onClick={ () => handelMakeGuid(user)} className='text-base btn bg-[#00ff0b] hover:bg-[#00ff0b] ' > <MdAddModerator /> Guid</button> 

         </td>
          }
        
      </tr>   )
      }
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageUsers;