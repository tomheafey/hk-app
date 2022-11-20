import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CharmProvider } from "./shared/context/CharmContext";
import { NailProvider } from "./shared/context/NailContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CharmProvider>
        <NailProvider>
            <App />
        </NailProvider>
    </CharmProvider>
);

reportWebVitals();
