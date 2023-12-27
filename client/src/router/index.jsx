import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/ErrorPage";
import { companyLoader } from "../utils/companyUtils";
import { internLoader } from "../utils/internUtils";

import InternshipListMagager from "../sections/internshipList_admin/view/intern-view";

import { internshipLoader } from "../utils/internshipUtils";
import InternshipList from "../sections/internshipList/view/products-view";
import Company from "../sections/companyList_admin/view/company-view";
import Intern from "../sections/internList_admin/view/intern-view";
import Dashboard from "../sections/overview/view/app-view";
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Home />,
        path: "/admin",
        children: [
          {
            element: <Company />,
            loader: companyLoader,
            path: "/admin/company",
          },
          {
            element: <Intern />,
            loader: internLoader,
            path: "/admin/intern",
          },
          {
            element: <InternshipListMagager />,
            loader: internshipLoader,
            path: "/admin/internlist",
          },
          {
            element: <Dashboard />,
            path: "/admin/dashboard",
          }
        ],
      },
      {
        element: <Home />,
        path: "/",
        children: [
          {
            element: <InternshipList />,
            loader: internshipLoader,
            path: "/dangkythuctap",
          },
        ],
      },
    ],
  },
]);
