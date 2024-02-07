import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ResInput } from "../components/resForm";

function reservations() {
  var collaspe = "#collapse";
  var num = "One";
  const [hide, setHide] = useState(false);
  const onSubmit = () => {
    setHide(true);
    console.log("Accept");
    setTimeout(() => {
      setHide(false);
    }, 3000);
  };
  const customerName = "Vaughn John";
  return (
    <>
      <Outlet />
      <div
        style={{
          margin: "25px",
          width: "auto",
          border: "1px solid #ccc",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ResInput />
        <div className="card " style={{ width: "25rem" }}>
          <div className="card-body ">
            <h5 className="card-title">Ski Reservation</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Camelback Tier 2
            </h6>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {Date().toString().split("2024")[0]}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h5>Customer Name:</h5>
                    {customerName}
                    <h5>Phone Number:</h5>
                    {579803033}
                    <h5># of Guests</h5>
                    <input type="text" placeholder="3" readOnly />
                    {!hide ? (
                      <footer className="text-center">
                        <button onClick={onSubmit}>Accept</button>
                        <button
                          style={{
                            backgroundColor: "red",
                            borderColor: "white",
                          }}
                        >
                          Decline
                        </button>
                      </footer>
                    ) : (
                      <>
                        <footer className="text-center">
                          <div
                            className="spinner-grow spinner-grow-sm text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </footer>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={collaspe + num}
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default reservations;
