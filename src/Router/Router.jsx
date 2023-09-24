import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import Home from "../Page/Home/Home";
import Favorites from "../Page/Favorites/Favorites";
import Login from "../Page/Login/Login";
import Error from "../Page/Error/Error";
import Phone from "../Page/Phone/Phone";


const mtCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/phones.json')

            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/phones/:id',
                element: <Phone></Phone>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default mtCreateRoute;