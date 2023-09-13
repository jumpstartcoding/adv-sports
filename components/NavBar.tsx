import Image from "../images/advMain.jpeg";
import logoImage from "../images/adv.png";
import "../src/index.css";
import axios from "axios";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const [name, setName] = useState("");
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios.post("http://localhost:5173", { name: name }).then((data) => {
      console.log(data);
      setName("");
    });
  };

  return (
    <>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${Image})`,
          position: "fixed",
          zIndex: 1,
        }}
      ></div>
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
      <div id="center">
        <h1 id="content">Adventure Sports</h1>
        <h2 id="content">
          Canoeing, Kayaking, and Rafting Trips on the <br />
          Delaware River
        </h2>
        <Link to="infopage" className="buttonP">
          <strong>Find Your Adventure</strong>
        </Link>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
export default NavBar;
