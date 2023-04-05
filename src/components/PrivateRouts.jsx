import { Outlet, Navigate } from "react-router-dom";
import { AuthDetails } from "./auth/AuthDetails";


export const PrivateRoutes = () => {
    return (
        AuthDetails ? <Outlet/> : <Navigate to="/login"/>
    )
}

