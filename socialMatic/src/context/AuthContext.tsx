import { getCurrentUser } from '@/lib/appwrite/api';
import { IContextType, IUser } from '@/types'
import {createContext, useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const INITIAL_USER ={
    id:'',
    name:'',
    username:'',
    email:'',
    imageUrl:'',
    bio:''
}

const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuthenticated:false,
    setUser:() => {},
    setIsAuthenticated:()=>{},
    checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext<IContextType>(INITIAL_STATE);
const AuthProvider = ({children}:{children: React.ReactNode} ) => {

    const [user, setUser] = useState<IUser>(INITIAL_USER)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const checkAuthUser = async () => {
        try {
            const currentAccount = await getCurrentUser();
            if(currentAccount){
                setUser({
                    id:currentAccount.$id,
                    name:currentAccount.name,
                    username:currentAccount.username,
                    email:currentAccount.email,
                    imageUrl:currentAccount.imageUrl,
                    bio:currentAccount.bio
                })

                setIsAuthenticated(true);
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false
        }
    };

    const navigate = useNavigate();
   useEffect(() => {
     if(localStorage.getItem('cookieFallback') === '[]' || localStorage.getItem('cookieFallback') === null){
        navigate('/signin')
     }
   
    
   }, [])
   


    const value = { 
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useUserContext = () => useContext(AuthContext)