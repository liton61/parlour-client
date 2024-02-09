import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Login from "../page/Login/Login";


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
            }
        ],
    },
]);

export default router;