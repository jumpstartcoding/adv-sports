import "../components/Popular.css";
import smithImage from "../images/smith.jpeg";

function popular() {
  return (
    <>
      <section className="main">
        <div className="colOne">
          <div className="flex">
            <ul className="oneR">
              <li className="itemH">RAFT OPTION!</li>
              <li className="itemH">MOST POPULAR!</li>
            </ul>
            <h1 className="bolder">
              Smithfield Beach to <br /> Delaware Water Gap
            </h1>
            <p className="bold ">
              Take a quick canoe or kayak trip down the Delaware River from the
              Smithfield Beach launch, down to the famous Delaware Water Gap.
              Rafts are available as well!
            </p>
            <a className="button1 " href="infopage">
              Learn More
            </a>
          </div>
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
