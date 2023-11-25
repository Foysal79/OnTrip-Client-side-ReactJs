import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/NavBer/NavBar";
import Footer from "../../Pages/Footer/Footer";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;