import { RouteObject, useRoutes } from 'react-router-dom';
import Dashboard from "../pages/dashboard"
import Orders from "../pages/orders"
import MainLayout from "../layout/main-layout"
import CustomPage from "../pages/shared/CustomPage"

import { navItemsList, navItemSecondList } from "../constants/nav-itmes"

export default function AppRoutes() {
    const generateRoutes = navItemsList.map((item) => {
        let children: any = []
        if (item.children) {
            children = item.children.map((child) => {
                return {
                    path: child.link,
                    element: <CustomPage lable={child.label} />
                }
            })
        }
        return {
            path: item.link,
            element: <CustomPage lable={item.label} />,
            children: item.children ? children : []
        }
    })

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
                    path: "/dashboard",
                    element: <Dashboard />,
                },
                ...generateRoutes,
            ],
        },


    ]
    console.log(routes)
    return useRoutes(routes);
}

