import CharmSelector from "../shared/components/CharmSelector";

import React from "react";
import CurrentCharms from "../shared/components/CurrentCharms";
import OptionsMenu from "../shared/components/OptionsMenu";
import InfoPanel from "../shared/components/InfoPanel";

const MainPage = () => {
    return (
        <>
            <OptionsMenu />
            <CurrentCharms />
            <CharmSelector />
            <InfoPanel />
        </>
    );
};

export default MainPage;
