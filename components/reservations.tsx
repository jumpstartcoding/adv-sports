import { LocalizationProvider } from "@mui/x-date-pickers";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Outlet } from "react-router-dom";
function reservations() {
  return (
    <>
      <Outlet />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          style={{ marginTop: "25px", padding: "10px", textAlign: "center" }}
        >
          <StaticDatePicker />
        </div>
      </LocalizationProvider>
    </>
  );
}

export default reservations;
