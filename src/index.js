import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CharmProvider } from "./shared/context/CharmContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CharmProvider>
        <App />
    </CharmProvider>
);

reportWebVitals();
