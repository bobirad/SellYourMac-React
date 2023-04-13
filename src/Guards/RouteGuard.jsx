import { Navigate } from "react-router-dom";
import { auth } from '../config/firebase';

export const RouteGuard = ({children}) => {
    
    if(!auth.currentUser){
        return (
            <Navigate to='/login' />
        )
    }
    return(
        children
    )
}
