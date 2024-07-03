import { Outlet } from "react-router-dom";
import Navber from "./component/Navber";
import Footer from "./component/Footer";


const Root = () => {
    return (
        <>
        <Navber/>
       <div className="max-w-6xl mx-auto px-2"> <Outlet/></div>
       <Footer/>
            
        </>
    );
};

export default Root;