import { useContext } from "react";

import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex items-center justify-center flex-col mb-6 lg:mb-12">
            <h2 className="text-3xl font-semibold">Loading...</h2>
        </div>
    }

    if(user) {
        return children;
    }
    return <Navigate to={"/signin"} state={location?.pathname}></Navigate>;
};

export default PrivateRoute;