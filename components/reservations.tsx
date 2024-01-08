import { Outlet } from "react-router-dom";
import { ResInput } from "../components/resForm";

function reservations() {
  return (
    <>
      <Outlet />
      <div
        style={{
          margin: "75px",
          width: "auto",
          border: "1px solid #ccc",
          padding: "100px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ResInput />
      </div>
    </>
  );
}

export default reservations;
