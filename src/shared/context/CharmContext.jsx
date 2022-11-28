import { createContext, useContext, useState } from "react";

const CharmContext = createContext(null);

export const useCharmContext = () => useContext(CharmContext);

export function CharmProvider(props) {
    const [charms, setCharms] = useState([]);

    const addCharm = (charm) => {
        setCharms((curr) => [...curr, charm]);
    };

    const removeCharm = (id) => {
        setCharms((curr) => curr.filter((c) => c.id !== id));
    };

    const clearCharms = () => {
        //remove all charms except void heart
        setCharms((curr) => curr.filter((c) => c.id === "voidHeart"));
    };

    return <CharmContext.Provider value={{ charms, addCharm, removeCharm, clearCharms }}>{props.children}</CharmContext.Provider>;
}
