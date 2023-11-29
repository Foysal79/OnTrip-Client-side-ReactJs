
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import useGuid from './useGuid';
import { useQuery } from '@tanstack/react-query';


const useAssignedTours = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [isGuid] = useGuid();
    console.log(isGuid)
    
        const {data: AssignedTours = [], refetch } = useQuery({
            queryKey: ["booking", user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/assignedTour?email=${user.email}`);
                return res.data;
            }
        })
    
        return [AssignedTours, refetch];
    

};

export default useAssignedTours;