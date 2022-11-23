import { createContext, useContext, useMemo, useState } from "react";

const SpellsContext = createContext();

export const useSpellsContext = () => useContext(SpellsContext);

export function SpellsProvider(props) {
    const [hasShadeSoul, setHasShadeSoul] = useState(true);
    const [hasDescendingDark, setHasDescendingDark] = useState(true);
    const [hasAbyssShriek, setHasAbyssShriek] = useState(true);

    const baseFireballDamage = useMemo(() => {
        return hasShadeSoul ? 30 : 15;
    }, [hasShadeSoul]);

    const baseDiveDamage = useMemo(() => {
        return hasDescendingDark ? 65 : 35;
    }, [hasDescendingDark]);

    const baseShriekDamage = useMemo(() => {
        return hasAbyssShriek ? 80 : 39;
    }, [hasAbyssShriek]);

    // const [baseFireballDamage, setBaseFireballDamage] = useState(30);
    // const [baseDiveDamage, setBaseDiveDamage] = useState(65);
    // const [baseShriekDamage, setBaseShriekDamage] = useState(80);

    return (
        <SpellsContext.Provider
            value={{ baseFireballDamage, baseDiveDamage, baseShriekDamage, hasShadeSoul, hasDescendingDark, hasAbyssShriek, setHasShadeSoul, setHasDescendingDark, setHasAbyssShriek }}
        >
            {props.children}
        </SpellsContext.Provider>
    );
}
