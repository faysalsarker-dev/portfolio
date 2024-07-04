import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import AboutMe from "../about/AboutMe";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<AboutMe/>
        }
      ]
    }]
);

export default router