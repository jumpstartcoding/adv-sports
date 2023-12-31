import { Link, useLocation, NavLink } from "react-router-dom";
import logoImage from "../images/adv.png";
import "../src/index.css";

function NavBar() {
  const location = useLocation();
  return (
    <>
      <nav
        className="navbar  navbar-expand-lg image-text bg-dark"
        data-bs-theme="dark"
        style={{
          position: "fixed",
          zIndex: "2",
          opacity: ".8",
          width: "100%",
        }}
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

              <NavLink
                className="nav-link "
                to="../"
                aria-current={location.pathname === "../" ? "page" : undefined}
              >
                Home
              </NavLink>

              <NavLink
                className="nav-link"
                to="../trips"
                aria-current={
                  location.pathname === "../trips" ? "page" : undefined
                }
              >
                Featured Trips
              </NavLink>
              <a className="nav-link disabled">Rates</a>
              <a href="#container" className="nav-link ">
                Contact
              </a>
              <Link
                className="nav-link"
                to="https://weather.com/weather/today/l/734da858180d93b7b4ba2ee99b7cf2809c97f1425cc5c3b4478b2822cebe6fa4"
              >
                <span>&#9728;</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
