import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar";
import Contact from "../components/contact";
import Trips from "../components/trips";
import InfoPage from "../components/info";
import Popular from "../components/popular";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: [<NavBar />, <Trips />, <Contact />, <Popular />],
      },
    ],
  },
  {
    path: "infopage",
    element: <InfoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
