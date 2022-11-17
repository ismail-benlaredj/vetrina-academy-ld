import { RouteObject, useRoutes } from 'react-router-dom';
import Dashboard from "../pages/dashboard"
import MainLayout from "../layout/main-layout/sidebar"


export default function AppRoutes() {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "main",
                    element: <Dashboard />,
                },
                { path: "team", element: <Dashboard /> },
            ],
        }
    ]

    const routing = useRoutes(routes);
    return (
        <>
            {routing}
        </>
    );
}