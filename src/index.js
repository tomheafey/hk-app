import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CharmProvider } from "./shared/context/CharmContext";
import { NailProvider } from "./shared/context/NailContext";
import { HPProvider } from "./shared/context/HPContext";
import { NotchesProvider } from "./shared/context/NotchesContext";
import { SpellsProvider } from "./shared/context/SpellsContext";
import { CharmTogglesProvider } from "./shared/context/CharmTogglesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CharmProvider>
        <NailProvider>
            <HPProvider>
                <NotchesProvider>
                    <SpellsProvider>
                        <CharmTogglesProvider>
                            <App />
                        </CharmTogglesProvider>
                    </SpellsProvider>
                </NotchesProvider>
            </HPProvider>
        </NailProvider>
    </CharmProvider>
);

reportWebVitals();
