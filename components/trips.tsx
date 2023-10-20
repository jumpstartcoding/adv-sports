import Image from "../images/advMain.jpeg";
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
          <div
            className="mycard"
            style={{
              backgroundImage: `url(${Image})`,
            }}
            key={name}
          >
            <a href="">
              <h2 style={{ padding: "3em", color: "whitesmoke" }}>
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
