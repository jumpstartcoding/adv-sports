import logoImage from "../images/adv.png";
import "../src/index.css";

import { Outlet } from "react-router-dom";
const up = "nv";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg image-text"
        data-bs-theme="light"
        style={{ position: "relative" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="navbar-brand" href="temp">
                <img
                  src={logoImage}
                  width="30"
                  height="25"
                  className="d-inline-block align-text-top"
                />
              </a>

              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>

              <a className="nav-link" href="#">
                Featured Trips
              </a>
              <a className="nav-link disabled">Rates</a>
              <a className="nav-link disabled">Contact</a>
              <a
                className="nav-link"
                href="https://weather.com/weather/today/l/734da858180d93b7b4ba2ee99b7cf2809c97f1425cc5c3b4478b2822cebe6fa4"
              >
                <span>&#9728;</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet context={up} />
    </>
  );
}
export default NavBar;
