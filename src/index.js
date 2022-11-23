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
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: "black",
                        color: "white",
                    },
                    "&:hover": {},
                },
            },
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CharmProvider>
        <NailProvider>
            <HPProvider>
                <NotchesProvider>
                    <SpellsProvider>
                        <CharmTogglesProvider>
                            <ThemeProvider theme={theme}>
                                <App />
                            </ThemeProvider>
                        </CharmTogglesProvider>
                    </SpellsProvider>
                </NotchesProvider>
            </HPProvider>
        </NailProvider>
    </CharmProvider>
);

reportWebVitals();
