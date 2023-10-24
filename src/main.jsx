import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouting } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouting />
  </React.StrictMode>
);
