import Image from "../images/advMain.jpeg";
import "../components/Trips.css";
import { useState } from "react";

function Trips() {
  const trips = ["One Day Trips", "Two Day Trips", "Three Day Trips"];
  const mytrips = [
    "One Day Trips",
    "Two Day Trips",
    "Three Day Trips",
    "Four Day Trips",
  ];
  let [siz, setSiz] = useState(500);

  return (
    <>
      <div id="colo">
        <h1
          style={{
            zIndex: 1,
            margin: 0,
            padding: 0,
            position: "relative",
            color: "Whitesmoke",
          }}
        >
          <strong>View All River Trips</strong>
        </h1>
        <section id="trips">
          {mytrips.map((name) => (
            <div className="jcard" key={name}>
              <div
                className="acard"
                style={{
                  backgroundImage: `url(${Image})`,
                }}
              >
                <a className="image-text" href="">
                  <h2>
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
      <section id="mytrips">
        {trips.map((name) => (
          <div
            className="mycard"
            style={{
              backgroundImage: `url(${Image})`,
            }}
            key={name}
          >
            <a className=" image-text  " href="">
              <h2>
                <strong>{name}</strong>
              </h2>
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
export default Trips;
