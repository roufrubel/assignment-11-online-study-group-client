import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllCraftList from "../pages/AllCraftList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCraft from "../pages/AddCraft";
import MyCraftList from "../pages/MyCraftList";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
          path: "create",
          element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>,
        },
        {
            path: "assignments",
            element: <AllCraftList></AllCraftList>,
        },
        {
          path: "pending",
          element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>,
          loader: () => fetch("https://assignment-11-online-group-study-server.vercel.app/craft"), 
        },
        {
          path: "craft/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: () => fetch("https://assignment-11-online-group-study-server.vercel.app/craft"
          ),
        },
        {
          path: 'update',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
        }
      ]
    },
  ]);

  export default Router;