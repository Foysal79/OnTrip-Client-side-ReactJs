import { useState } from "react";
import Title from "../../../Shared/Title";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MotionAnimate } from "react-motion-animate";
import AboutUs from "../../../Components/AboutUs/AboutUs";
import OurPackages from "../../../Components/OurPackages/OurPackages";
import TourGuides from "../../../Components/TourGuides/TourGuides";

const TravelGuideSection = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="w-8/12 mx-auto space-y-12 mt-10 md:mt-24" >
            
                      
                      <Title  subHeading={'Guide Section'} heading={'Tourism and Traveler'} ></Title>
                      
   
  <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

  <TabList className='flex justify-center items-center md:space-x-8 md:text-3xl font-semibold' >
    <Tab  >Overview</Tab>
    <Tab  >Our Packages</Tab>
    <Tab  >Tour Guides</Tab>
  </TabList>
  <div className="divider divider-warning"></div>

         <TabPanel>
         <AboutUs></AboutUs>
          </TabPanel>

          <TabPanel>
             <OurPackages></OurPackages>
          </TabPanel>

           <TabPanel> <TourGuides></TourGuides> </TabPanel>
           
            

        </Tabs>
        </div>
    );
};

export default TravelGuideSection;