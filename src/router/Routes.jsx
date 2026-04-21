import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import Apps from "../pages/apps/Apps";
import InstalledApps from "../pages/installedApps/InstalledApps";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";

export const router=createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/apps',
        element: <Apps/>
      },
      {
        path: '/apps/:id',
        element: <AppDetails/>
      },
      {
        path: '/InstalledApps',
        element: <InstalledApps/>
      }
    ],
    errorElement: <NotFoundPage/>
  },

])