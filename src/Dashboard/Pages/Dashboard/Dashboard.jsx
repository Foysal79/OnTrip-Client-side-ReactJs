import NavBar1 from "../../../Pages/NavBer/NavBar1";
import { NavLink, Outlet } from 'react-router-dom';
import {  FaAd, FaHome } from "react-icons/fa";
import { MdOutlineManageAccounts, MdFavoriteBorder } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { CiBookmarkCheck } from "react-icons/ci";
import useAdmin from "../../../Hook/useAdmin";
import useGuid from "../../../Hook/useGuid";

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isGuid] = useGuid()

    console.log(isAdmin);

    
    
    return (
        <div >
            <NavBar1></NavBar1>

            <div className="flex w-11/12 mx-auto p-4 gap-4 " >



                {/* Dashboard side menu */}

                <div className="w-64 min-h-screen bg-[#163f53] text-white rounded-2xl" >
                    {/*------------------------- admin menu-------------------------------- */}
                    {
                        isAdmin &&  <ul className="menu p-4 space-y-4" >

                        <li><NavLink to="/dashboard/myProfile" >
                  <FaHome className="text-white" ></FaHome>
                  Admin Home</NavLink></li>

                        <li><NavLink to="/dashboard/addPackage" >
                  <FaAd className="text-white" ></FaAd>
                  Add Package</NavLink></li>

                        <li><NavLink to="/dashboard/manageUsers" >
                  <MdOutlineManageAccounts className="text-white" ></MdOutlineManageAccounts>
                  Manage Users</NavLink></li>
   
   
                        </ul>
                    }
                    {/* ----------------Tour Guide Menu---------------------*/}
                    {
                        isGuid && <ul className="menu p-4 space-y-4" >

                        <li><NavLink to="/dashboard/myProfile" >
                  <FaHome className="text-white" ></FaHome>
                  Guide Home </NavLink></li>

                        <li><NavLink to="/dashboard/myAssignedTours" >
                  <AiFillSchedule className="text-white" ></AiFillSchedule>
                  My Assigned Tours </NavLink></li>
   
   
                        </ul>
                    }
                    {/*---------------------- Tourist menu---------------------------------- */}
                    {
                        (!isAdmin && !isGuid) &&  <ul className="menu p-4 space-y-4" >

                        <li><NavLink to="/dashboard/myProfile" >
                  <FaHome className="text-white" ></FaHome>
                  My Profile </NavLink></li>

                        <li><NavLink to="/dashboard/myWishlist" >
                  <MdFavoriteBorder className="text-white" ></MdFavoriteBorder>
                  My Wishlist </NavLink></li>

                        <li><NavLink to="/dashboard/myBooking" >
                  <CiBookmarkCheck className="text-white" ></CiBookmarkCheck>
                  My Booking </NavLink></li>
   
   
                        </ul>
                    }
                </div>
                {/* Dashboard outlet */}
                <div className=" w-full p-6 rounded-2xl" >
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;