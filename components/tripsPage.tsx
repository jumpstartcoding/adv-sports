import { Link, Outlet, useLocation } from "react-router-dom";
import "../components/Trips.css";
import Image from "../images/advMain.jpg";

function displayTrips(props: {
  trips: { [s: string]: string } | ArrayLike<string>;
  pageImage: string;
}) {
  const title = useLocation();
  var { state } = title;
  var { name, val } = state;

  const oneDayTrips = {
    "Smithfield to the Delaware Water Gap":
      "Take a quick canoe or kayak trip down the Delaware River from the Smithfield Beach launch, down to the famous Delaware Water Gap. Rafts are available as well!",
    "Bushkill to Smithfield Beach":
      "Join us for a beautiful day trip canoeing or kayaking down the Delaware River from the Bushkill boat launch, all the way to the Smithfield Beach.",
    "Bushkill to Delaware Water Gap – 1 Day":
      "Join us for a beautiful one- or two-day trip down the Delaware River from Lehman Township, PA all the way to the Delaware Water Gap, PA. Book your adventure online.",
  };
  const twoDayTrips = {
    "Bushkill to Delaware Water Gap – 2 Day":
      "Take a two-day trip from Bushkill to the Delaware Water Gap! Paddle farther on your first day and then relax and get a later start from the campsite on day two.",
    "Eshback to Smithfield Beach":
      "Perfect for people of all ages and skill levels, this paddle to Smithfield Beach offers plenty of opportunities to get out of the boats and swim, fish, hike, or just lounge around.",
    "Eshback  to Delaware Water Gap":
      "Launch your canoe or kayak from the Eshback access point and paddle 20 miles down to the famous Delaware Water Gap. See wildlife like deer, bald eagles, and more!",
    "Dingmans Ferry to Smithfield Beach":
      "Paddle 21 miles in two days from the historic Dingmans Ferry Bridge to Smithfield Beach, a pristine recreation area perfect for families. Abundant camping opportunities await you!",
    "Dingmans to the Delaware Water Gap – 2 Day":
      "Get in a bit of a workout on this action-packed two-day trip from historic Dingmans Ferry Bridge all the way to the Delaware Water Gap. Paddle 27 miles in two days!",
  };

  const threeDayTrips = {
    "Dingmans to the Delaware Water Gap – 3 Day":
      "Begin at the historic Dingmans Ferry Bridge and spend three days paddling the 27 miles to the famous Delaware Water Gap. Book this multi-day adventure now!",
    "Milford Beach to Smithfield Beach":
      "Paddle 28 miles in three days by canoe or kayak on this exciting Delaware River trip that starts at Milford Beach and ends at beautiful Smithfield Beach.",
    "Milford to Delaware Water Gap":
      "Embark on an adventurous three-day canoe or kayak trip down the Delaware River, starting in Milford and paddling all the way to the scenic Delaware Water Gap.",
  };

  const trips =
    name === "One Day Trips"
      ? props.trips
      : name === "Two Day Trips"
      ? twoDayTrips
      : name === "Three Day Trips"
      ? threeDayTrips
      : oneDayTrips;

  return (
    <>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${props.pageImage})`,
          position: "fixed",
          zIndex: 1,
        }}
      ></div>
      <div id="center" style={{ padding: "6.25em" }}>
        <h1 id="content">{name} </h1>
        <h2 id="content" style={{ paddingTop: "1.5em" }}>
          {val}
        </h2>
      </div>

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
          {Object.entries(trips).map(([name, val]) => (
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
                  <strong>{val}</strong>
                </p>

                <Link className="button" to="/reservations">
                  <strong>Book Now</strong>
                </Link>
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
