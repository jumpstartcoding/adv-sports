import NavBar from "../components/NavBar";
import InfoPage from "../components/info";
import Trips from "../components/trips";
import Popular from "../components/popular";
import "./App.css";
import { Amplify } from "aws-amplify";
import Contact from "../components/contact";
import awsExports from "./aws-exports";
import { Routes, Route } from "react-router-dom";

Amplify.configure(awsExports);

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={[
          <NavBar />,
          <div style={{ height: 150 }}></div>,
          <Trips />,
          <Contact />,
          <Popular />,
        ]}
      ></Route>
      <Route path="infopage" element={<InfoPage />}></Route>
    </Routes>
  );
}

export default App;
