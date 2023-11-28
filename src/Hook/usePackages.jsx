import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const usePackages = () => {

    const [packages, setPackages] = useState([]);
    

    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/allpackges')
    .then( data => setPackages(data.data))

    return [packages];
};

export default usePackages;