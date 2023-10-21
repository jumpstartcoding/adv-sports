import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TripsPage from "../components/tripsPage";
import Contact from "../components/contact";
import Trips from "../components/trips";
import InfoPage from "../components/info";
import Popular from "../components/popular";
import React from "react";
import NavBar from "../components/NavBar";
import TripOneImg from "../images/rafts.jpg";

const oneDayTrips = {
  "Smithfield to the Delaware Water Gap":
    "Take a quick canoe or kayak trip down the Delaware River from the Smithfield Beach launch, down to the famous Delaware Water Gap. Rafts are available as well!",
  "Bushkill to Smithfield Beach":
    "Join us for a beautiful day trip canoeing or kayaking down the Delaware River from the Bushkill boat launch, all the way to the Smithfield Beach.",
  "Bushkill to Delaware Water Gap – 1 Day":
    "Join us for a beautiful one- or two-day trip down the Delaware River from Lehman Township, PA all the way to the Delaware Water Gap, PA. Book your adventure online.",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: [<Popular />, <Trips />, <Contact />],
      },
    ],
  },
  {
    path: "infopage",
    element: <InfoPage />,
    children: [
      {
        path: "",
        element: [<NavBar />],
      },
    ],
  },
  {
    path: "trips",
    element: [
      <NavBar />,
      <TripsPage trips={oneDayTrips} pageImage={TripOneImg} />,
    ],
    children: [
      {
        path: "",
        element: [<Contact />],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
