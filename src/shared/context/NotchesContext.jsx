import { createContext, useContext, useEffect, useState } from "react";

const NotchesContext = createContext();

export const useNotchesContext = () => useContext(NotchesContext);

export function NotchesProvider(props) {
    const [notchTotal, setNotchTotal] = useState(11);

    const [notchCount, setNotchCount] = useState(0);

    const [notchesArray, setNotchesArray] = useState([]);

    const [isOvercharmed, setIsOvercharmed] = useState(false);

    useEffect(() => {
        notchCount > notchTotal ? setIsOvercharmed(true) : setIsOvercharmed(false);
    }, [notchCount]);

    //TODO: make this less hacky, or at least rename temp
    //TODO: probably a better method than using these strings to represent different types of notches
    useEffect(() => {
        let temp = [];
        if (isOvercharmed) {
            for (let i = 1; i <= notchCount; i++) {
                if (i <= notchTotal) {
                    temp.push("c");
                    // setNotchesArray((curr) => [...curr, "c"]);
                } else {
                    temp.push("!");
                    // setNotchesArray((curr) => [...curr, "!"]);
                }
            }
        } else {
            for (let i = 1; i <= notchTotal; i++) {
                if (i <= notchCount) {
                    temp.push("c");
                    // setNotchesArray((curr) => [...curr, "c"]);
                } else {
                    temp.push("O");
                    // setNotchesArray((curr) => [...curr, "O"]);
                }
            }
        }
        setNotchesArray([...temp]);
    }, [notchCount, isOvercharmed]);

    return <NotchesContext.Provider value={{ notchTotal, setNotchTotal, notchCount, setNotchCount, notchesArray, isOvercharmed }}>{props.children}</NotchesContext.Provider>;
}
