import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AllUsers from "./components/UI/AllUsers/AllUsers.tsx";

import SingleUser from "./pages/SingleUser/SingleUser.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllUsers />,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.userId}`),
        element: <SingleUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
