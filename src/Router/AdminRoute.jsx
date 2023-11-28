import { useContext } from "react";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingAnimations from "../../public/loading.json"
import Lottie from "lottie-react";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const {user,loading} =  useContext(AuthContext);
    const location = useLocation();
    if(loading)
    {
        
        return <Lottie className='w-6/12 mx-auto'  animationData={loadingAnimations} ></Lottie>
    }
    if(user && isAdmin)
    {
        return children;
    }
    return <Navigate state={location.pathname} to='/signIn' ></Navigate>
};

export default AdminRoute;