import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useStory = () => {
    const [story, setStory] = useState([]);
    

    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/allStory')
    .then( data => setStory(data.data))

    return [story];
};

export default useStory;