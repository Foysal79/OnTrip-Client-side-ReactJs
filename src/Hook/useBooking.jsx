import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useBooking = () => {

    // tan stack query

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: bookData = [], refetch } = useQuery({
        queryKey: ["booking", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookedPackges?email=${user.email}`);
            return res.data;
        }
    })

    return [bookData, refetch];
};

export default useBooking;