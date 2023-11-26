import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/NavBer/NavBar";
import Footer from "../../Pages/Footer/Footer";
import NavBar1 from "../../Pages/NavBer/NavBar1";


const Root = () => {
    return (
        <div>
            <NavBar1></NavBar1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;