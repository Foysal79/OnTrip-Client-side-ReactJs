// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
          <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
               
              disableOnInteraction: false,
            }}
            pagination={{
                 
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
            <div className=" w-full  background1  " >
            {/* <img className="w-full h-[100vh] " src="https://i.ibb.co/yFzZ2md/8.jpg" alt="" /> */}
            <div className="  h-full flex items-center " >
            <div className='text-white space-y-4  lg:space-y-8 items-center pl-10 lg:pl-28  '>

              <button className='bg-[#219EBC] py-3 px-8 text-lg font-semibold rounded-lg' > BEST TRAVEL AGENCY</button>
                
        <h2 className=' text-4xl lg:text-7xl font-bold  lg:w-2/3'> Lets Get The New Experiene Travelling With Us  </h2>
        <div>
          
        </div>
        <div>
            <Link to='/allServices' > <button   className='btn bg-[#FFB703] mr-5 '>BOOK NOW</button> </Link>
            
            
        </div>
      </div>
  
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" w-full  background2  " >
            {/* <img className="w-full h-[100vh] " src="https://i.ibb.co/yFzZ2md/8.jpg" alt="" /> */}
            <div className="  h-full flex items-center " >
            <div className='text-white space-y-4  lg:space-y-8 items-center pl-10 lg:pl-28  '>
            <button className='bg-[#219EBC] py-3 px-8 text-lg font-semibold rounded-lg' > BEST TRAVEL AGENCY</button>  
        <h2 className=' text-4xl lg:text-7xl font-bold  lg:w-2/3'> JOURNEY TO EXPLORE WORLD</h2>
        
        <div>
            <Link to='/allServices' > <button   className='btn bg-[#FFB703] mr-5 '>BOOK NOW</button> </Link>
            
            
        </div>
      </div>
  
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" w-full  background3  " >
            {/* <img className="w-full h-[100vh] " src="https://i.ibb.co/yFzZ2md/8.jpg" alt="" /> */}
            <div className="  h-full flex items-center " >
            <div className='text-white space-y-4  lg:space-y-8 items-center pl-10 lg:pl-28  '>
            <button className='bg-[#219EBC] py-3 px-8 text-lg font-semibold rounded-lg' > BEST TRAVEL AGENCY</button>
        <h2 className=' text-4xl lg:text-7xl font-bold  lg:w-2/3'> A More Rewarding Way To Travel </h2>
        
        <div>
            <Link to='/allServices' > <button   className='btn bg-[#FFB703] mr-5 '>BOOK NOW</button> </Link>
            
            
        </div>
      </div>
  
            </div>
        </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      );
};

export default Banner;