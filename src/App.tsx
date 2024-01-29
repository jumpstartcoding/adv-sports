import "./App.css";
import "../src/index.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import NavBar from "../components/NavBar";
import { Link, Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import { ReactNode } from "react";

Amplify.configure(awsExports);

function App({ children }: { children: ReactNode }) {
  return (
    <>
      {children}

      <div
        className="image-container"
        style={{
          position: "fixed",
          zIndex: 1,
        }}
      ></div>
      <NavBar />
      <div id="center">
        <h1 id="content">Adventure Sports</h1>
        <h2 id="content">
          Canoeing, Kayaking, and Rafting Trips on the <br />
          Delaware River
        </h2>
        <Link
          to="/trips"
          state={{
            name: "One Day Trips",
            val: " Our one-day river trips are perfect for those looking to get out on the water and enjoy the beauty of the Delaware Water Gap National Recreation Area. We have options for canoeing, kayaking, and rafting, all of which are great for both friend and family adventures.",
          }}
          className="buttonP"
          preventScrollReset={false}
        >
          <strong>Find Your Adventure</strong>
        </Link>
      </div>
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default App;
