import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/ErrorPage";
import CompaniesList from "../components/companyList";
import { companyLoader } from "../utils/companyUtils";
import Admin from "../pages/Admin";

import User from "../sections/user/view/user-view";
import Product from "../sections/products/view/products-view";
import Blog from "../sections/blog/view/blog-view";

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
            element: <User />,
            path: "/admin/user",
          },
          {
            element: <Product />,
            path: "/admin/product",
          },
          {
            element: <Blog />,
            path: "/admin/blog",
          },
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
