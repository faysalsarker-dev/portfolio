import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";

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
            element:<h2>hiiid</h2>
        }
      ]
    }]
);

export default router