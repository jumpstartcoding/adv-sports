import "../components/info.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function InfoPage() {
  return (
    <>
      <NavBar />
      <section id="info-page">
        <article className="info" style={{ marginTop: "50px" }}>
          <h1 style={{ fontSize: "36pt", fontWeight: 800 }}>
            Making Memories That Last A Lifetime
          </h1>

          <h4>54 years and Counting! </h4>

          <h3> ONLINE RESERVATIONS ARE OPEN! </h3>
          <h4 style={{ top: "15px" }}>
            To receive a group discount, groups of ten or more should call
            800-487-2628.
          </h4>

          <p>
            For multi-day trips, National Park Service camping reservations are
            currently open, we suggest you make those reservations as soon as
            you are ready, prior to making your reservations with us. Most of
            our guests will be using the “Middle Delaware National Scenic &
            Recreational River Primitive Campsites” versus Alosa, Valley View or
            Rivers Bend, but the choice is yours.
            <br />
            Here is the link:
            <br />
            <a href="https://www.recreation.gov/camping/gateways/2663">
              Delaware Water Gap National Recreation Area, Pennsylvania {"-"}
              Recreation.gov
            </a>
          </p>
        </article>
      </section>
      <Outlet />
    </>
  );
}
export default InfoPage;
