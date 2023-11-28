import Title from "../../../Shared/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import { Link } from "react-router-dom";





const TourTypeSection = () => {


  const handelType = (type) => {
    console.log(type); 
  }

    return (
        <div className="my-24 space-y-16 w-11/12 md:w-8/12 mx-auto">
             
                      
                      
  <Title subHeading={'TRAVEL BY ACTIVITY'} heading={'ADVENTURE & ACTIVITY'} ></Title>
                      
            
           


        <div >

        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <Link to="packages/AdventureTours">
          <div   className="flex flex-col justify-center md:mr-4 items-center  py-8 rounded-3xl bg-[#023047] " >
                <img className="rounded-full w-16 md:w-28" src="https://i.ibb.co/ssczzJj/1.jpg" alt="" />
                <h2 className=" text-center md:text-xl text-white" >Adventure <br /> Tours</h2>
            </div>
          </Link>
        </SwiperSlide>
            <SwiperSlide>
              <Link to="packages/BeachHolidays" ><div className="flex flex-col justify-center md:mr-4 items-center  py-8 rounded-3xl bg-[#023047] " >
                <img className="rounded-full w-16 md:w-28" src="https://i.ibb.co/MfhCs7Y/2.jpg" alt="" />
                <h2 className=" text-center md:text-xl text-white" >Beach <br /> Holidays</h2>
            </div></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="packages/TeaGardenTours" >
              <div className="flex flex-col justify-center md:mr-4 items-center  py-8 rounded-3xl bg-[#023047] " >
                <img className="rounded-full w-16 md:w-28" src="https://i.ibb.co/4F3f3Xv/3.jpg" alt="" />
                <h2 className=" text-center md:text-xl text-white" >Tea Garden Tours</h2>
            </div>
              </Link>
            </SwiperSlide>
            
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        <SwiperSlide>
          <Link to="packages/HaorTours" >
          <div className="flex flex-col justify-center md:mr-4 items-center  py-8 rounded-3xl bg-[#023047] " >
                <img className="rounded-full w-16 md:w-28" src="https://i.ibb.co/r02M3Rf/4.jpg" alt="" />
                <h2 className=" text-center md:text-xl text-white" > Haor <br /> Tours</h2>
            </div>
          </Link>
            </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide> */}
        <SwiperSlide>
         <Link to="packages/HillTracts" >
         <div className="flex flex-col justify-center md:mr-4 items-center  py-8 rounded-3xl bg-[#023047] " >
                <img className="rounded-full w-16 md:w-28" src="https://i.ibb.co/P4KkqR3/5.jpg" alt="" />
                <h2 className=" text-center md:text-xl text-white" >Hill <br /> Tracts </h2>
            </div>
         
         </Link>
            </SwiperSlide>

        
            <SwiperSlide> 
              <Link to="packages/HillTracts" ><div  className="flex flex-col justify-center md:mr-4 items-center  py-8 rounded-3xl bg-[#023047] " >
                <img className="rounded-full w-16 md:w-28" src="https://i.ibb.co/P4KkqR3/5.jpg" alt="" />
                <h2 className=" text-center md:text-xl text-white" >Hill Tracts Exploration</h2>
            </div></Link>
             </SwiperSlide>

        
      </Swiper>



        </div>

        </div>
    );
};

export default TourTypeSection;





















