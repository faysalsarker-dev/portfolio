import { Outlet } from "react-router-dom";
import Navber from "./component/Navber";
import Footer from "./component/Footer";


const Root = () => {
    return (
        <>
       
       <div className="max-w-6xl mx-auto md:px-2 px-4">
       <Navber/>
         <Outlet/>
         <Footer/>
         </div>
       
            
        </>
    );
};

export default Root;