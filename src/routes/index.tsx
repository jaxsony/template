import { useRoutes } from "react-router-dom";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";

import protectRoutes from "./protected";
import storage from "../helpers/storage";
import Dashboard from "../pages/dashboard";

function AppRoutes() {
    const router = [
       
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'forgot-password',
            element: <ForgotPassword />
        },
        {
            path: 'Dashboard',
            element: <Dashboard />
        },
    ];

    const mainRoutes = storage.getToken() != null ? protectRoutes : [];
    const routes = useRoutes([...router, ...mainRoutes]);
    return (<>{routes}</>);
}

export default AppRoutes;