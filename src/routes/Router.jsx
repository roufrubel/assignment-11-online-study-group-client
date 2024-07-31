import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Submitted from "../pages/Submitted";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from "../pages/Assignments";
import PendingAssignments from "../pages/PendingAssignments";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "create",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "assignment",
        element: <Assignments></Assignments>,
      },
      {
        path: "pending",
        element: (
          <PrivateRoute>
            <PendingAssignments></PendingAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "submit",
        element: (
          <PrivateRoute>
            <Submitted></Submitted>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-11-online-group-study-server.vercel.app/submit"
          ),
      },
      {
        path: "assignment/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-11-online-group-study-server.vercel.app/assignment"
          ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-online-group-study-server.vercel.app/assignment/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
