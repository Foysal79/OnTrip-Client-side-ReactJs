import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useMyWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: MyWishlist = [], refetch } = useQuery({
        queryKey: ["MyWishlist", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myWishList?email=${user.email}`);
            return res.data;
        }
    })

    return [MyWishlist, refetch];
};

export default useMyWishlist;