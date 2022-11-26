import { createContext, useContext, useMemo, useState } from "react";

const NailContext = createContext();

export const useNailContext = () => useContext(NailContext);

export function NailProvider(props) {
    const [nailLevel, setNailLevel] = useState("pure");

    const baseNailDamage = useMemo(() => {
        switch (nailLevel) {
            case "pure":
                return 21;
            case "coiled":
                return 17;
            case "channelled":
                return 13;
            case "sharpened":
                return 9;
            case "old":
                return 5;
            default:
                break;
        }
    }, [nailLevel]);

    return <NailContext.Provider value={{ baseNailDamage, nailLevel, setNailLevel }}>{props.children}</NailContext.Provider>;
}
