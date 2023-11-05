import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import NodeList from "../components/NoteList";
import Note from "../components/Note";
import { notesLoader } from "../utils/noteUtils";
import { foldersLoader } from "../utils/folderUtils";
const AuthLayout = () => {
    return <AuthProvider>
        <Outlet />
    </AuthProvider>
}

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
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: "/",
                        loader: foldersLoader,
                        children: [
                            {
                                element: <NodeList />,
                                path: `folders/:folderId`,
                                loader: notesLoader,
                                children: [
                                    {
                                        element: <Note />,
                                        path: `note/:noteId`
                                    }
                                ]
                            }
                        ]
                    },
                ],
            },

        ]
    }
])