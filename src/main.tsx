import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { TimezoneProvider } from "./contexts/TimezoneContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TimezoneProvider>
      <App />
    </TimezoneProvider>
  </React.StrictMode>
);
