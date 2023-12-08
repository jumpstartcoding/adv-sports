import "./App.css";
import "../src/index.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import NavBar from "../components/NavBar";
import { Link, Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ReactNode } from "react";

Amplify.configure(awsExports);

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
          <Link to="trips" className="buttonP" preventScrollReset={false}>
            <strong>Find Your Adventure</strong>
          </Link>
        </div>
        <Outlet />
        <ScrollToTop />
      </LocalizationProvider>
    </>
  );
}

export default App;
