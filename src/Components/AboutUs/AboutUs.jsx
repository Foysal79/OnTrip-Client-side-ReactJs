import ReactPlayer from "react-player";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto my-10" >
            <Helmet>
                <title>OnTrip  </title>
            </Helmet>
            <div className="lg:flex justify-center items-center space-y-4">
                <div className="flex-1 space-y-4 lg:p-4">
                    <h2 className=" md:w-6/12  bg-[#219EBC] text-white md:text-xl 
                    font-semibold py-2 px-4 rounded-xl " > WHY CHOOSE US ?</h2>
                    <h1 className="text-xl md:text-4xl font-bold" >Travelling More Easy With Our Guide Team & Our Travel Service Agency</h1>
                    <p className="text-lg text-gray-500" >Highlight how your agency offers tailor-made experiences, customized itineraries, or personalized assistance, making every trip unique and memorable.</p>

                    <ul>
                        <p className="text-xl font-bold" > <CheckBoxIcon className="text-yellow-500" ></CheckBoxIcon> Best 10 Years Experiene</p>
                        <p className="text-xl font-bold" > <CheckBoxIcon className="text-yellow-500" ></CheckBoxIcon> Great Team Guide</p>
                        <p className="text-xl font-bold" > <CheckBoxIcon className="text-yellow-500" ></CheckBoxIcon> Exclusive Deals and Offers</p>
                        <p className="text-xl font-bold" > <CheckBoxIcon className="text-yellow-500" ></CheckBoxIcon> Safety and Reliability</p>
                    </ul>

                    <button className="btn bg-[#FFB703] text-xl hover:bg-[#FFB703] text-white">lets Discover us </button>

                </div>
                <div className="flex-1 md:p-2 border-4 bg-[#023047] rounded-2xl">
               
                <ReactPlayer controls width='100%' url='https://youtu.be/35npVaFGHMY' />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;