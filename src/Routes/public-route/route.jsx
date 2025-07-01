import { createBrowserRouter } from "react-router";
import MainLayout from "../../Main-layout/MainLayout";
import Home from "../../pages/Home/Home";
import Event from "../../pages/Event/Event";
import RegisterPage from "../../Authentication/RegisterPage/RegisterPage";
import Signin from "../../Authentication/Signin/Signin";
import PrivateRoute from "../Private/PrivateRoute";
import AddEvent from "../../pages/Add-Event/AddEvent";
import UserEvents from "../../pages/User-events/UserEvents";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h2>Error found!</h2>,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "event",
                element: <PrivateRoute><Event /></PrivateRoute>
            },

            {
                path: "signUp",
                element: <RegisterPage />
            },

            {
                path: "signin",
                element: <Signin/>
            },

            {
                path: "addEvent",
                element: <PrivateRoute><AddEvent /></PrivateRoute>
            },

            {
                path: "myEvents",
                element: <PrivateRoute><UserEvents /></PrivateRoute>
            }
        ]
    }
]);

export default route;