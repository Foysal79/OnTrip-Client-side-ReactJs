import { useQuery } from "@tanstack/react-query";
import Title from "../../../Shared/Title";
import StoryCard from "./StoryCard";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const TotalStory = () => {
    const axiosPublic = useAxiosPublic();

    const {data : story = [], refetch } = useQuery({
         queryKey: ['packages'],
         queryFn: async () => {
            const res = await axiosPublic.get('/allStory');
            return  res.data;
         }
    })


    return (
        <div>
            <Helmet>
                <title>OnTrip || Blog</title>
            </Helmet>
            <Title subHeading={"All Stories"} heading={"OUR RECENT POSTS"} ></Title>
            <div className="my-10" >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto space-y-10 my-16">
                    {
                       story.map(item => <StoryCard key={item._id} item={item} ></StoryCard> )
                    }
                </div>

                
            </div>
            
        </div>
    );
};

export default TotalStory;