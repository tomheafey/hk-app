import CharmSelector from "../shared/components/CharmSelector";

import React from "react";
import CurrentCharms from "../shared/components/CurrentCharms";
import OptionsMenu from "../shared/components/OptionsMenu";
import InfoPanel from "../shared/components/InfoPanel";

//TODO: figure out how exactly we want the info displayed - all options and charm picker at top, then selected notches and info panel below? or keep current charms + info panel at top, with selector at the bottom (sort of how it's layed out in the game)?

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
