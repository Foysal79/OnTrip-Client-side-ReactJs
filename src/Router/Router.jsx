import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Root from "../LayOut/Root/Root";
import Error from "../Components/Error/Error";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";



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
        }

      ]);


export default Router;