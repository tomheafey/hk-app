import { createContext, useContext, useEffect, useState } from "react";

const NotchesContext = createContext();

export const useNotchesContext = () => useContext(NotchesContext);

export function NotchesProvider(props) {
    const [notchTotal, setNotchTotal] = useState(11);

    const [notchCount, setNotchCount] = useState(0);

    const [notchesArray, setNotchesArray] = useState([]);

    let isOvercharmed = notchCount <= notchTotal ? false : true;
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

    return <NotchesContext.Provider value={{ notchTotal, setNotchTotal, notchCount, setNotchCount, notchesArray }}>{props.children}</NotchesContext.Provider>;
}
