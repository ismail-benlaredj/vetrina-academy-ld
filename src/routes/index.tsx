import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import SuspenseComponent from "../global-ui/SuspenseComponent"
import CustomPage from "../pages/components/CustomPage"

import { navItemsList, navItemSecondList } from "../constants/nav-itmes"

const Dashboard = SuspenseComponent(lazy(() => import('../pages/dashboard')));
const MainLayout = SuspenseComponent(lazy(() => import('../layout/main-layout')));


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

