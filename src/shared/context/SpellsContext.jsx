import { createContext, useContext, useState } from "react";

const SpellsContext = createContext();

export const useSpellsContext = () => useContext(SpellsContext);

export function SpellsProvider(props) {
    const [baseFireballDamage, setBaseFireballDamage] = useState(30);
    const [baseDiveDamage, setBaseDiveDamage] = useState(65);
    const [baseShriekDamage, setBaseShriekDamage] = useState(80);

    return (
        <SpellsContext.Provider value={{ baseFireballDamage, setBaseFireballDamage, baseDiveDamage, setBaseDiveDamage, baseShriekDamage, setBaseShriekDamage }}>
            {props.children}
        </SpellsContext.Provider>
    );
}
