import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Dashboard from "../page/Dashboard/Dashboard";
import UserHome from "../page/Dashboard/UserHome";
import AdminHome from "../page/Dashboard/AdminHome";
import AllUsers from "../page/AllUsers/AllUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            }
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [

            // user dashboard
            {
                path: "userHome",
                element: <UserHome></UserHome>,
            },

            // admin dashboard
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>,
            }
        ]
    }
]);

export default router;