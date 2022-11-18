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

    const clearCharms = (charm) => {
        setCharms([]);
    };

    const notchCount = () => {
        const count = 0;
        charms.foreach((charm) => (count = count + charm.notches));
        return count;
    };

    return <CharmContext.Provider value={{ charms, addCharm, removeCharm, clearCharms, charmCount: notchCount }}>{props.children}</CharmContext.Provider>;
}
