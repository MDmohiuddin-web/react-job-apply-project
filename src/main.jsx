import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root.jsx";
import Home from "./component/Home/Home.jsx";
import Appliedjobs from "./component/APPliedjobs/Appliedjobs.jsx";
import Errors from "./component/Error/Errors.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Errors></Errors>
    ,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<Appliedjobs></Appliedjobs>
      },
      {
        path:'/'
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);
