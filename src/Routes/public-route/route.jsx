import { createBrowserRouter } from "react-router";
import MainLayout from "../../Main-layout/MainLayout";
import Home from "../../pages/Home/Home";
import Event from "../../pages/Event/Event";

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
            }
        ]
    }
]);

export default route;