import { createBrowserRouter } from "react-router";
import MainLayout from "../../Main-layout/MainLayout";
import Home from "../../pages/Home/Home";
import Event from "../../pages/Event/Event";
import RegisterPage from "../../Authentication/RegisterPage/RegisterPage";
import Signin from "../../Authentication/Signin/Signin";

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
                element: <Event />
            },

            {
                path: "signUp",
                element: <RegisterPage />
            },

            {
                path: "signin",
                element: <Signin/>
            }
        ]
    }
]);

export default route;