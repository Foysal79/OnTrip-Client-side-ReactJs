import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGuid = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data : isGuid} = useQuery({
     queryKey : [user?.email, 'isGuid'],
     queryFn : async() => {
        const res = await axiosSecure(`/users/guid/${user.email}`);
        console.log('guid', res.data);
        return res.data?.guid;
     }
    })
    return [isGuid];
};

export default useGuid;