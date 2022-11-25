import CharmSelector from "../shared/components/CharmSelector";

import React from "react";
import CurrentCharms from "../shared/components/CurrentCharms";
import InfoPanel from "../shared/components/InfoPanel";
import { useNavigate } from "react-router-dom";

//TODO: figure out how exactly we want the info displayed - all options and charm picker at top, then selected notches and info panel below? or keep current charms + info panel at top, with selector at the bottom (sort of how it's layed out in the game)?

const MainPage = () => {
    let navigate = useNavigate();
    const goToOptionsPage = () => {
        navigate("/options");
    };
    return (
        <>
            <button onClick={(e) => goToOptionsPage()}>Return to options</button>
            <CharmSelector />
            <CurrentCharms />
            <InfoPanel />
        </>
    );
};

export default MainPage;
