import { createContext, useContext, useState } from "react";

const CharmContext = createContext(null);

export const useCharmContext = () => useContext(CharmContext);

export function CharmProvider(props) {
    const [charms, setCharms] = useState([]);

    //TODO (potentially): make sure charm isn't already in array before adding?
    const addCharm = (charm) => {
        setCharms((curr) => [...curr, charm]);
    };

    const removeCharm = (id) => {
        setCharms((curr) => curr.filter((c) => c.id !== id));
    };

    const clearCharms = () => {
        setCharms((curr) => curr.filter((c) => c.id === "voidHeart"));
        // setCharms([]);
    };

    return <CharmContext.Provider value={{ charms, addCharm, removeCharm, clearCharms }}>{props.children}</CharmContext.Provider>;
}
