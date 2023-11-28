
import { useState } from 'react';
import useAxiosPublic from './../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import OurPackagesCard from './OurPackagesCard';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const OurPackages = () => {

    // const [ packag , setPackag] = useState([]);

    const axiosPublic = useAxiosPublic();

    const {data : packag = [], refetch } = useQuery({
         queryKey: ['packages'],
         queryFn: async () => {
            const res = await axiosPublic.get('/allpackges');
            return  res.data;
         }
    })
    
  
    



    return (
        <div>

            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center' >
                {/* card session */}

                {
                    packag.slice(1, 5).map(packag => <OurPackagesCard key={packag._id} packag={packag} ></OurPackagesCard>)
                }
            </div>

            <div className='flex justify-center items-center mt-10' >
            <Link to='/packages' >
            <Button sx={{width : '200px', height: '50px', backgroundColor: "#023047" }} size='large'  variant="contained">All Package </Button>
            </Link>
            </div>
            
            
        </div>
    );
};

export default OurPackages;