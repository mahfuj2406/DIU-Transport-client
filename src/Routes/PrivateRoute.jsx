import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute =({children}) => {
    const {user,loading} = useAuth();
    console.log("loading state :", loading);
    
    if(loading){
        return <progress className="progress w-64"></progress>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;