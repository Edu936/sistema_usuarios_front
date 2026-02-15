import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/home";
import UserRegister from "../features/user_registration/user_registration";

const router = createBrowserRouter([
    {
        path:'/',
        Component: Home,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path:'register',
                Component:UserRegister,
            }
        ]
    },
])

export default router