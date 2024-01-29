import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashLayout from "../Dashboard/DashLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignOut from "../components/SignOut";
import Users from "../Dashboard/Users";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/book/:id',
          element: <SingleBook />,
          loader:({params}) => fetch(`https://bookverse-api.onrender.com/book/${params.id}`),
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element: <DashLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard /></PrivateRoute>,
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook />,
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks />,
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks />,
          loader:({params}) => fetch(`https://bookverse-api.onrender.com/book/${params.id}`),
        },
        // {
        //   path: "/admin/dashboard/users",
        //   element: <Users />,
        // },  
      ]
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "sign-out",
      element: <SignOut />,
    }
  ]);
  export default router;
