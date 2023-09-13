import "./App.css";
import { Amplify } from "aws-amplify";
import Contact from "../components/contact";
import awsExports from "./aws-exports";
import { components } from "@aws-amplify/ui-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import popular from "../components/popular";
import { Outlet } from "react-router-dom";

Amplify.configure(awsExports);

function App() {
  return <Outlet />;
}

export default App;
