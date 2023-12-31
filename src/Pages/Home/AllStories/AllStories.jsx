import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Title from "../../../Shared/Title";
import StoryCard from "./StoryCard";
import { Link } from "react-router-dom";

const AllStories = () => {

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
            <Title subHeading={"All Stories"} heading={"OUR RECENT POSTS"} ></Title>
            <div className="my-10" >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-9/12 mx-auto space-y-10 my-16">
                    {
                       story.slice(1, 5).map(item => <StoryCard key={item._id} item={item} ></StoryCard> )
                    }
                </div>

                <div className="flex justify-center items-center" >
                    <Link to='/totalStory' >
                    <button className="btn bg-[#FFB703] hover:bg-[#FFB703]  " >All Story</button>
                    </Link>
                
                </div>
            </div>
            
        </div>
    );
};

export default AllStories;