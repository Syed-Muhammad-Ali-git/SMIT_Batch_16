// All routes are defined here...

import { useEffect, useState } from "react";
import PublicRoutes from "./unprotected-routes";
import ProtectedRoutes from "./protected-routes";
import { useLocation, useNavigate } from "react-router";
import { publicRoutes, protectedRoutes } from "../utils/routes";

const AppRoutes = () => {

    // States...
    const [authStatus, setAuthStatus] = useState(null);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    // Auth state checker hook...
    useEffect(() => {
        console.log('Auth status: ', authStatus);
        console.log('Path: ', pathname);

        // Note: Fetching auth status from local storage...
        const auth = localStorage.getItem('AuthState');
        const jsonAuth = JSON.parse(auth);
        console.log('JSON Auth: ', jsonAuth);

        if (!jsonAuth) {
            if (!authStatus && protectedRoutes.includes(pathname)) navigate(publicRoutes[1]);
        }

        else if (jsonAuth) {
            setAuthStatus(jsonAuth);
            navigate('/');
        }
    }, []);

    return (
        <>
            {
                (authStatus)
                    ?
                    (
                        <ProtectedRoutes />
                    )
                    :
                    (<PublicRoutes />)
            }
        </>
    );
};

export default AppRoutes;