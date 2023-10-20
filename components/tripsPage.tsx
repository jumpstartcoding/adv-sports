import { Outlet } from "react-router-dom";
import "../components/Trips.css";
import Image from "../images/advMain.jpeg";

function displayTrips(props: { trips: any[] }) {
  return (
    <>
      <div id="colo" style={{ backgroundColor: "#fbe3e8" }}>
        <h1
          className="bar"
          style={{
            zIndex: 1,
            margin: 0,
            padding: "1em",
            position: "relative",
            color: "red",
          }}
        >
          <strong> Canoe, Kayak or Raft</strong>
        </h1>
        <section id="trips">
          {props.trips.map((name) => (
            <div className="jcard" key={name}>
              <div
                className="acard"
                style={{
                  backgroundImage: `url(${Image})`,
                }}
              >
                <a href="">
                  <h2
                    className="mx-auto "
                    style={{ padding: "3em", color: "whitesmoke" }}
                  >
                    <strong>{name}</strong>
                  </h2>
                </a>
              </div>
              <footer className="foot">
                <p
                  className="text"
                  id="back"
                  style={{ fontFamily: "copperplate", fontSize: 18 }}
                >
                  <strong>
                    Take a quick canoe or kayak trip down the Delaware River
                    from the Smithfield Beach launch, down to the famous
                    Delaware Water Gap. Rafts are available as well!
                  </strong>
                </p>

                <a className="button">
                  <strong>Book Now</strong>
                </a>
                <a className="button" id="noColor">
                  <strong>Learn More</strong>
                </a>
              </footer>
            </div>
          ))}
        </section>
      </div>
      <Outlet />
    </>
  );
}
export default displayTrips;