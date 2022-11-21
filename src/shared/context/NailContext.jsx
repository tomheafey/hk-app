//components that need access to nail information:
//  options menu
//  info panel
//      potentially the "boss page" component

import { createContext, useContext, useState } from "react";

const NailContext = createContext();

export const useNailContext = () => useContext(NailContext);

export function NailProvider(props) {
    const [baseNailDamage, setBaseNailDamage] = useState(21);

    return <NailContext.Provider value={{ baseNailDamage, setBaseNailDamage }}>{props.children}</NailContext.Provider>;
}
