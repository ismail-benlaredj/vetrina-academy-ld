import { RouteObject, useRoutes } from 'react-router-dom';
import Dashboard from "../pages/dashboard"
import Orders from "../pages/orders"
import MainLayout from "../layout/main-layout/sidebar"


export default function AppRoutes() {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Dashboard />,
                },
                {
                    path: "team",
                    element: <Orders />,
                }
            ],
        },


    ]

    return useRoutes(routes);
}