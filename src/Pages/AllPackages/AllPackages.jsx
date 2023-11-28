import { Helmet } from "react-helmet-async";
import usePackages from "../../Hook/usePackages";
import Carts from "../Home/TourTypeSection/Carts";


const AllPackages = () => {
    const [packages] = usePackages();
    return (
        <div className="min-h-screen space-y-10 mb-10" >
            <Helmet>
                <title>OnTrip || All Packages</title>
            </Helmet>
            <h1 className="text-center  mt-10 text-4xl font-bold" >All Packages</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 w-11/12 mx-auto mt-10" >
                {
                   packages.map(item => <Carts key={item._id} item={item} ></Carts>)
                }
            </div>
        </div>
    );
};

export default AllPackages;