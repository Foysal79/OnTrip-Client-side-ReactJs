import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Root from "../LayOut/Root/Root";
import Error from "../Components/Error/Error";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Dashboard from "../Dashboard/Pages/Dashboard/Dashboard";
import UserHome from "../Dashboard/Pages/userHome/UserHome";
import PrivetRouter from "./PrivetRouter";
import AdminHome from "../Dashboard/AdminPage/AdminHome/AdminHome";
import AddPackage from "../Dashboard/AdminPage/AddPackage/AddPackage";
import ManageUsers from "../Dashboard/AdminPage/ManageUsers/ManageUsers";
import GuideHome from "../Dashboard/GuidTour/GuideHome/GuideHome";
import MyAssignedTours from "../Dashboard/GuidTour/MyAssignedTours/MyAssignedTours";
import MyBooking from "../Dashboard/Pages/MyBooking/MyBooking";
import MyWishlist from "../Dashboard/Pages/MyWishlist/MyWishlist";



    const Router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement: <Error></Error>,
          children : [
            {
                path : '/',
                element: <Home></Home>
            }
          ]
        },
        {
          path: '/signUp',
          element: <SignUp />
        },
        {
          path: '/signIn',
          element: <SignIn />
        },
        {
          path: '/dashboard',
          element : <PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
          children : [
            // admin route
            {
              path: '/dashboard/adminHome',
              element: <AdminHome></AdminHome>
            },
            {
              path: '/dashboard/addPackage',
              element: <AddPackage></AddPackage>
            },
            {
              path: '/dashboard/manageUsers',
              element: <ManageUsers></ManageUsers>
            },
            // Guide Route
            {
              path: '/dashboard/guideHome',
              element: <GuideHome></GuideHome>

            },
            {
              path: '/dashboard/myAssignedTours',
              element: <MyAssignedTours></MyAssignedTours>

            },
            // Tourist Route
            {
              path: '/dashboard/userHome',
              element: <UserHome></UserHome>
            },
            {
              path: '/dashboard/myBooking',
              element: <MyBooking></MyBooking>
            },
            {
              path: '/dashboard/myWishlist',
              element: <MyWishlist></MyWishlist>
            },
            
          ]
        }

      ]);


export default Router;