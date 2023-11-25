import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Root from "../LayOut/Root/Root";



    const Router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          children : [
            {
                path : '/',
                element: <Home></Home>
            }
          ]
        },
      ]);


export default Router;