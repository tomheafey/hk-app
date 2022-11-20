import { createContext, useContext, useState } from "react";

const HPContext = createContext();

export const useHPContext = () => useContext(HPContext);

export function HPProvider(props) {
    const [baseHP, setBaseHP] = useState(9);

    return <HPContext.Provider value={{ baseHP, setBaseHP }}>{props.children}</HPContext.Provider>;
}
