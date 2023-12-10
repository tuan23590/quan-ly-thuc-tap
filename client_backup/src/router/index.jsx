import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/ErrorPage";
import CompaniesList from "../components/companyList";
import { companyLoader } from "../utils/companyUtils";
import Admin from "../pages/Admin";

import Company from "../sections/company/view/company-view";
import Product from "../sections/products/view/products-view";
import Post from "../sections/post/view/post-view";
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
        element: <Admin />,
        path: "/admin",
        children: [
          {
            element: <Company />,
            loader: companyLoader,
            path: "/admin/company",
          },
          {
            element: <Product />,
            path: "/admin/product",
          },
          {
            element: <Post />,
            path: "/admin/post",
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
            element: <CompaniesList />,
            loader: companyLoader,
            path: "/doanhnghiep",
          },
        ],
      },
    ],
  },
]);