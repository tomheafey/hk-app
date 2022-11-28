import CharmSelector from "../shared/components/CharmSelector";

import React from "react";
import CurrentCharms from "../shared/components/CurrentCharms";
import InfoPanel from "../shared/components/InfoPanel";
import { useNavigate } from "react-router-dom";
import HR from "../shared/styled/HR";
import Button from "../shared/styled/Button";
import TopRightButtonContainer from "../shared/styled/TopRightButtonContainer";

const MainPage = () => {
    let navigate = useNavigate();
    const goToOptionsPage = () => {
        navigate("/options");
    };
    return (
        <>
            <TopRightButtonContainer>
                <Button onClick={(e) => goToOptionsPage()}>Return to options</Button>
            </TopRightButtonContainer>
            <CharmSelector />
            <HR />
            <CurrentCharms />
            <InfoPanel />
        </>
    );
};

export default MainPage;
