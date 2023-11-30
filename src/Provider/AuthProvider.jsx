import { GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from './../Hook/useAxiosPublic';

const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }


    const GoogleAccount = () => 
    {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const LogIn = (email, password) => {
        setLoading(true);
      return  signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
           

            if(currentUser)
            {
                // get token and store client
                const userInfo = {email : currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token)
                    {
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                // remove token
                localStorage.removeItem('access-token');
            }
            setUser(currentUser);
          setLoading(false);

            updateProfile(auth.currentUser, {
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL
            })

            
          
         
        })
        return () => {
          unsubscribed();
        }
   }, [axiosPublic])



    const userInfo = {
        user,
        loading,
        createUser,
        GoogleAccount,
        LogIn,
        LogOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;