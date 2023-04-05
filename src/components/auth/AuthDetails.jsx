import {useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
export const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect (() => {
        const listen = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setAuthUser(currentUser);
            } 
        })
        return listen;
    }, []); 
}

