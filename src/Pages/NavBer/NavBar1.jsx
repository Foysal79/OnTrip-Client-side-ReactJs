import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const NavBar1 = () => {

    const {user, LogOut} = useContext(AuthContext);
    const admin = true;
    const Tourist = false;
    const  TourGuide = false;

    

    return (
        <div className="navbar  px-6 bg-[#023047] text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 bg-[#023047] z-[10] p-2 shadow  rounded-box w-52">
      <li><NavLink className="mr-4 md:text-lg " to='/' >Home</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/community' >Community</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/blogs' >blogs</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/about' >About Us</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/contact' >Contact Us</NavLink></li>
        
      </ul>
    </div>
    <a href="/" className="btn btn-ghost text-white text-3xl font-bold ">On<span 
    className="text-[#FFB703]" >Trip</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white font-semibold">
    <li><NavLink className="mr-4 md:text-lg " to='/' >Home</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/community' >Community</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/blogs' >blogs</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/about' >About Us</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/contact' >Contact Us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <div className="dropdown dropdown-end  ">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        {/* <img alt="" src='https://i.ibb.co/82PWqN2/2.jpg' /> */}
          <div className="w-10 rounded-full border-2">
            
            <img alt="" src={user?.photoURL}  />
            
          </div>
        </div>
        <ul className="menu bg-[#023047] menu-sm dropdown-content mt-3 z-[10] p-2 shadow space-y-4  rounded-box w-72">
         
          <div className="text-center my-4 font-bold space-y-2" >
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
            
          </div>
          <li>
            <a >
              Profile
              
            </a>
          </li>
          {
            admin && <Link to='/dashboard/adminHome' > <li><a>Dashboard</a></li> </Link>
          }
          {
            Tourist && <Link to='/dashboard/userHome' > <li><a>Dashboard</a></li> </Link>
          }
          {
            TourGuide && <Link to='/dashboard/guideHome' > <li><a>Dashboard</a></li> </Link>
          }
          
           
          <li><a>Offer Announcements</a></li>
          <button  onClick={()=>LogOut()} className="btn btn-primary" >Logout</button>
          
        </ul>
      </div> :  <Link to='/signIn' className="btn bg-[#FFB703] text-lg font-bold hover:bg-[#FFB703]" ><button>Login</button></Link>
    }
  </div>
</div>
    );
};

export default NavBar1;