import Banner from "../Banner/Banner";
import TourTypeSection from "../TourTypeSection/TourTypeSection";
import TravelGuideSection from "../TravelGuideSection/TravelGuideSection";



const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <TravelGuideSection></TravelGuideSection>
            <TourTypeSection></TourTypeSection>
        </div>
    );
};

export default Home;