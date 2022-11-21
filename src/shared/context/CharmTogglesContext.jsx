import { createContext, useContext, useState } from "react";

const CharmTogglesContext = createContext();

export const useCharmTogglesContext = () => useContext(CharmTogglesContext);

export function CharmTogglesProvider(props) {
    const [hasVoidHeart, setHasVoidHeart] = useState(true);
    const [hasCarefreeMelody, setHasCarefreeMelody] = useState(true);

    return <CharmTogglesContext.Provider value={{ hasVoidHeart, setHasVoidHeart, hasCarefreeMelody, setHasCarefreeMelody }}>{props.children}</CharmTogglesContext.Provider>;
}
