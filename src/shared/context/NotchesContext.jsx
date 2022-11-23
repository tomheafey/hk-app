import { createContext, useContext, useEffect, useState } from "react";
const fullNotch = require("../images/full notch.png");
const emptyNotch = require("../images/empty notch hq transparent.png");
const overcharmNotch = require("../images/overcharmed notch.png");
const NotchesContext = createContext();

export const useNotchesContext = () => useContext(NotchesContext);

export function NotchesProvider(props) {
    const [notchTotal, setNotchTotal] = useState(11);

    const [notchCount, setNotchCount] = useState(0);

    const [notchesArray, setNotchesArray] = useState([]);

    const [isOvercharmed, setIsOvercharmed] = useState(false);

    function generateImageArray(notchCount, notchTotal, isOvercharmed) {
        let images = [];

        if (isOvercharmed) {
            for (let i = 1; i <= notchCount; i++) {
                if (i <= notchTotal) {
                    images.push(fullNotch);
                } else {
                    images.push(overcharmNotch);
                }
            }
        } else {
            for (let i = 1; i <= notchTotal; i++) {
                if (i <= notchCount) {
                    images.push(fullNotch);
                } else {
                    images.push(emptyNotch);
                }
            }
        }
        return images;
    }

    useEffect(() => {
        notchCount > notchTotal ? setIsOvercharmed(true) : setIsOvercharmed(false);
    }, [notchCount]);

    useEffect(() => {
        setNotchesArray(generateImageArray(notchCount, notchTotal, isOvercharmed));
    }, [notchCount, isOvercharmed]);

    return <NotchesContext.Provider value={{ notchTotal, setNotchTotal, notchCount, setNotchCount, notchesArray, isOvercharmed }}>{props.children}</NotchesContext.Provider>;
}
