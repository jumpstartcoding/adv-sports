import { LocalizationProvider } from "@mui/x-date-pickers";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Outlet } from "react-router-dom";
import { ResInput } from "../components/resForm";
function reservations() {
  return (
    <>
      <Outlet />
      <section></section>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          style={{ marginTop: "25px", padding: "10px", textAlign: "center" }}
        >
          <StaticDatePicker />
        </div>
      </LocalizationProvider>
      <ResInput />
    </>
  );
}

export default reservations;
