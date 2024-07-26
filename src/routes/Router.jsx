import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyCraftList from "../pages/MyCraftList";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from "../pages/Assignments";

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
          element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
        },
        {
            path: "assignment",
            element: <Assignments></Assignments>
        },
        {
          path: "pending",
          element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>,
          loader: () => fetch("https://assign-11-online-study-group.web.app/assignment"), 
        },
        {
          path: "assignment/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: () => fetch("https://assign-11-online-study-group.web.app/assignment"
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