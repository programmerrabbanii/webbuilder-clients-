import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Perror from "../Pages/Perror";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Process from "../Pages/Process";
import SevenReasons from "../Pages/SevenReasons";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Perror></Perror>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/process",
                element:<Process></Process>
            },
            {
                path:"/seven",
                element:<SevenReasons></SevenReasons>
            }
        ]
    }
])
export default router