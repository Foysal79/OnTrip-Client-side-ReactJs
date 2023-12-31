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
import MyProfile from "../Dashboard/Pages/MyProfile";
import AdminRoute from "./AdminRoute";

import HillTracts from "../Pages/Home/TourTypeSection/HillTracts";
import BeachHolidays from "../Pages/Home/TourTypeSection/BeachHolidays";
import TeaGardenTours from "../Pages/Home/TourTypeSection/TeaGardenTours";
import HaorTours from "../Pages/Home/TourTypeSection/HaorTours";
import AdventureTours from "../Pages/Home/TourTypeSection/AdventureTours";
import AllPackages from "../Pages/AllPackages/AllPackages";
import SinglePackages from "../Pages/singlePackages/singlePackages";

import TourGuidesProfileOnlyUserSee from "../Components/TourGuidesProfileOnlyUserSee/TourGuidesProfileOnlyUserSee";
import TotalStory from "../Pages/Home/AllStories/TotalStory";
import SingleStory from "../Pages/Home/AllStories/SingleStory";
import Community from "../Dashboard/Pages/Community/Community";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Dashboard/Pages/ContactUs/ContactUs";



    const Router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement: <Error></Error>,
          children : [
            {
                path : '/',
                element: <Home></Home>
            },
            {
                 path : '/community',
                 element : <Community></Community>
            },
            {
              path : '/about',
              element: <AboutUs></AboutUs>

            },
            {
              path: '/contact',
              element : <ContactUs></ContactUs>

            },
            {
              path : '/packages/HillTracts',
              element: <HillTracts></HillTracts>
            },
            {
              path : '/packages/BeachHolidays',
              element: <BeachHolidays></BeachHolidays>
            },
            {
              path : '/packages/TeaGardenTours',
              element: <TeaGardenTours></TeaGardenTours>
            },
            {
              path : '/packages/HaorTours',
              element: <HaorTours></HaorTours>
            },
            
            {
              path : '/packages/AdventureTours',
              element: <AdventureTours></AdventureTours>
            },
            {
              path : '/packages',
              element: <AllPackages></AllPackages>
            },
            {
              path : '/totalStory',
              element: <TotalStory></TotalStory>
            },
            {
              path : '/singlePackages/:id',
              element : <SinglePackages></SinglePackages>,
              loader : ({params}) =>  fetch(`https://ontrip-server-side.vercel.app/singlePackages/${params.id}`),
    
            },
            {
              path : '/Story/:id',
              element : <SingleStory></SingleStory>,
              loader : ({params}) =>  fetch(`https://ontrip-server-side.vercel.app/Story/${params.id}`),
    
            },
            {
              path : '/guid/:id',
              element : <PrivetRouter> <TourGuidesProfileOnlyUserSee></TourGuidesProfileOnlyUserSee> </PrivetRouter>,
              loader : ({params}) =>  fetch(`https://ontrip-server-side.vercel.app/guid/${params.id}`),
    
            },
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
              path: '/dashboard/myProfile',
              element: <MyProfile></MyProfile>
            },
            {
              path: '/dashboard/addPackage',
              element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
            {
              path: '/dashboard/manageUsers',
              element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            // Guide Route
            {
              path: '/dashboard/myProfile',
              element: <MyProfile></MyProfile>

            },
            {
              path: '/dashboard/myAssignedTours',
              element: <MyAssignedTours></MyAssignedTours>

            },
            // Tourist Route
            {
              path: '/dashboard/myProfile',
              element: <MyProfile></MyProfile>
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