//components that need access to nail information:
//  options menu
//  info panel
//      potentially the "boss page" component

import { createContext, useContext, useMemo, useState } from "react";

const NailContext = createContext();

export const useNailContext = () => useContext(NailContext);

export function NailProvider(props) {
    const [nailDamage, setNailDamage] = useState(21);

    return <NailContext.Provider value={{ nailDamage, setNailDamage }}>{props.children}</NailContext.Provider>;
}
