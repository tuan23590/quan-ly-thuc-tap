import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/ErrorPage";
import CompaniesList from "../components/companyList";
import { companyLoader } from "../utils/companyUtils";
import Admin from "../pages/Admin";
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
        path: "/login"
      },
      {
        element: <Admin />,
        path: "/admin"
      },
      {
        element: <Home />,
        path: "/",
        children: [
          {
            element:<CompaniesList/>,
            loader: companyLoader,
            path: "/doanhnghiep"
          }
        ]
      },
    ],
  },
]);
