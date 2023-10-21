import { Link } from "react-router-dom";
import "../components/contact.css";
function Contact() {
  return (
    <>
      <footer id="container">
        <section id="footer">
          <ul className="one">
            <li>
              <h1 id="font">Adventure Sports</h1>
            </li>
            <li>
              {" "}
              <a href="tel:+5702230505">{"(570) 223-0505"}</a>
            </li>
            <li>
              {" "}
              <a href="tel:+18004872628">{"1 (800) 487-2628"}</a>
            </li>
            <li>
              <a href="mailto:info@adventuresport.com">
                info@adventuresport.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps?q=398+Seven+Bridge+Road,+East+Stroudsburg,+PA+18301"
                target="_blank"
              >
                {" "}
                398 Seven Bridge Road <br /> East Stroudsburg, PA 18301
              </a>
            </li>
          </ul>
          <ul className="two">
            <li>
              <h1 id="font">Resources</h1>
            </li>
            <li>
              <Link
                to="../"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Photos</a>
            </li>
            <li>
              <a href="">Interactive Maps</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <ul className="three">
            <li id="adv">
              <h1 id="font">Trips and Rentals</h1>
            </li>
            <li>One-Day Trips</li>
            <li>Two-Day Trips</li>
            <li>Three-Day Trips</li>
            <li>All River Adventures</li>
            <li>River Rentals</li>
            <li>Ski Rentals</li>
          </ul>
        </section>
      </footer>
    </>
  );
}
export default Contact;
