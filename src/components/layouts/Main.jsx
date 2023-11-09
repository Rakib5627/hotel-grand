import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div>
          <div className=" mx-2 max-w-6xl md:mx-auto pb-20">
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>

          <Footer></Footer>
          
        </div>
    );
};

export default Main;