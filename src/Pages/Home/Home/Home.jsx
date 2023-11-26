import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TourTypeSection from "../TourTypeSection/TourTypeSection";
import TravelGuideSection from "../TravelGuideSection/TravelGuideSection";



const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>OnTrip || Home</title>
            </Helmet>
            <Banner></Banner>
            <TravelGuideSection></TravelGuideSection>
            <TourTypeSection></TourTypeSection>
        </div>
    );
};

export default Home;