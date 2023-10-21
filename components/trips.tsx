import { Link } from "react-router-dom";
import "../components/Trips.css";

function Trips() {
  const trips = ["One Day Trips", "Two Day Trips", "Three Day Trips"];

  return (
    <>
      <h1 className="title" style={{ color: "whitesmoke", margin: "25px" }}>
        <strong>View All Our Trips</strong>
      </h1>
      <section id="mytrips">
        {trips.map((name) => (
          <div className="mycard" key={name}>
            <Link to="trips" preventScrollReset={false}>
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
