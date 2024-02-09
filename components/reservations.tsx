import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ResInput } from "../components/resForm";
import SignIn from "./signIn";

function reservations() {
  const reservationsData = [
    {
      id: "1",
      firstName: "Vaughn",
      lastName: "John",
      phoneNumber: "324679823",
      guests: "3",
      date: "1/1/2020",
      tier: "4",
    },
    {
      id: "2",
      firstName: "Pablo",
      lastName: "Felipe",
      phoneNumber: "22333823",
      guests: "3",
      date: "1/12/2020",
      tier: "1",
    },
    {
      id: "3",
      firstName: "Asken",
      lastName: "March",
      phoneNumber: "444679823",
      guests: "2",
      date: "2/12/2023",
      tier: "1",
    },
  ];

  const [hiddenIds, setHiddenIds] = useState<string[]>([]);

  const onSubmit = (id: string) => {
    setHiddenIds([...hiddenIds, id]); // Add the ID to the hiddenIds array
    console.log("Accept", id);
    setTimeout(() => {
      setHiddenIds(hiddenIds.filter((hiddenId) => hiddenId !== id)); // Remove the ID from the hiddenIds array after 3 seconds
    }, 3000);
  };

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
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Ski Reservation</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Camelback Tier 2
            </h6>

            <div className="accordion" id="accordionExample">
              {reservationsData.map((reservation, index) => (
                <div key={reservation.id} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      {reservation.date}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h5>Customer Name:</h5>
                      {reservation.firstName} {reservation.lastName}
                      <h5>Phone Number:</h5>
                      {reservation.phoneNumber}
                      <h5># of Guests</h5>
                      <input type="text" placeholder="3" readOnly />
                      {!hiddenIds.includes(reservation.id) ? (
                        <footer className="text-center">
                          <button onClick={() => onSubmit(reservation.id)}>
                            Accept
                          </button>
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
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </footer>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SignIn></SignIn>
    </>
  );
}

export default reservations;
