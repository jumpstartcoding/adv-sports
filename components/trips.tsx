import { Link } from "react-router-dom";
import "../components/Trips.css";

function Trips() {
  const trips = [
    [
      "One Day Trips",
      " Our one-day river trips are perfect for those looking to get out on the water and enjoy the beauty of the Delaware Water Gap National Recreation Area. We have options for canoeing, kayaking, and rafting, all of which are great for both friend and family adventures.",
    ],
    [
      "Two Day Trips",
      "ALERT: Check out our camping alert on our Home Page. Our two-day river trips are great for those looking to fully experience the Delaware Water Gap National Recreation Area. These trips offer options to canoe or kayak down the Delaware River while also allowing time to explore the many activities the surrounding area has to offer.",
    ],
    [
      "Three Day Trips",
      "ALERT: Check out our camping alert on our Home page. Our three-day river trips are best for those looking to experience all that the Delaware River has to offer. These trips offer options to canoe or kayak and require a minimum of nine hours of paddle time each day.",
    ],
  ];

  return (
    <>
      <h1 className="title" style={{ color: "whitesmoke", margin: "25px" }}>
        <strong>View All Our Trips</strong>
      </h1>
      <section id="mytrips">
        {trips.map(([name, val]) => (
          <div className="mycard" key={name}>
            <Link to="trips/" state={{ name, val }} preventScrollReset={false}>
              <h2 style={{ margin: "5%", color: "whitesmoke" }}>
                <strong>{name}</strong>
              </h2>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
export default Trips;
