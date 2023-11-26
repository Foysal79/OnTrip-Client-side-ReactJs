import NavBar1 from "../../../Pages/NavBer/NavBar1";
import { NavLink, Outlet } from 'react-router-dom';
import {  FaHome } from "react-icons/fa";

const Dashboard = () => {

    const admin = true;
    const Tourist = false;
    const  TourGuide = false;
    return (
        <div >
            <NavBar1></NavBar1>

            <div className="flex w-11/12 mx-auto p-4 gap-10 " >



                {/* Dashboard side menu */}

                <div className="w-64 min-h-screen bg-[#163f53] text-white rounded-2xl" >
                    {/* admin menu */}
                    {
                        admin &&  <ul className="menu p-4 space-y-4" >

                        <li><NavLink to="/dashboard/adminHome" >
                  <FaHome className="text-white" ></FaHome>
                  Admin Home</NavLink></li>
   
   
                        </ul>
                    }
                    {/* Tourist menu */}
                    {
                        Tourist &&  <ul className="menu p-4 space-y-4" >

                        <li><NavLink to="/dashboard/userHome" >
                  <FaHome className="text-white" ></FaHome>
                     User Home </NavLink></li>
   
   
                        </ul>
                    }
                </div>
                {/* Dashboard outlet */}
                <div className="border-2 w-full p-6" >
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;