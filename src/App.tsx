import "./App.css";
import "../src/index.css";
import Image from "../images/advMain.jpeg";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Link, useOutletContext, Outlet } from "react-router-dom";

Amplify.configure(awsExports);

function App() {
  const up = useOutletContext();

  return (
    <>
      I am using the {up} outlet.
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${Image})`,
          position: "fixed",
          zIndex: 1,
        }}
      ></div>
      <div id="center">
        <h1 id="content">Adventure Sports</h1>
        <h2 id="content">
          Canoeing, Kayaking, and Rafting Trips on the <br />
          Delaware River
        </h2>
        <Link to="infopage" className="buttonP">
          <strong>Find Your Adventure</strong>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
