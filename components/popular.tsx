import { Link } from "react-router-dom";
import "../components/popular.css";
import smithImage from "../images/smith.jpg";

function popular() {
  return (
    <>
      <section className="main">
        <div className="colOne">
          <ul>
            <li className="itemH">RAFT OPTION!</li>
            <li className="itemH">MOST POPULAR!</li>
          </ul>
          <h1 className="bolder title">
            Smithfield Beach to Delaware Water Gap
          </h1>
          <p className="bold ">
            Take a quick canoe or kayak trip down the Delaware River from the
            Smithfield Beach launch, down to the famous Delaware Water Gap.
            Rafts are available as well!
          </p>
          <Link className="button1 " to="infopage">
            Learn More
          </Link>
        </div>

        <div className="colTwo">
          <img src={smithImage} alt="" />
        </div>
      </section>
      ;
    </>
  );
}

export default popular;
