import { createContext, useContext, useState } from "react";

const NotchesContext = createContext();

export const useNotchesContext = () => useContext(NotchesContext);

export function NotchesProvider(props) {
    const [notchTotal, setNotchTotal] = useState(11);

    return <NotchesContext.Provider value={{ notchTotal, setNotchTotal }}>{props.children}</NotchesContext.Provider>;
}
