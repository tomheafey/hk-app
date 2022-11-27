import CharmSelector from "../shared/components/CharmSelector";

import React from "react";
import CurrentCharms from "../shared/components/CurrentCharms";
import InfoPanel from "../shared/components/InfoPanel";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import HR from "../shared/styled/HR";
import Button from "../shared/styled/Button";

const MainPage = () => {
    let navigate = useNavigate();
    const goToOptionsPage = () => {
        navigate("/options");
    };
    return (
        <>
            <Div>
                <Button onClick={(e) => goToOptionsPage()}>Return to options</Button>
            </Div>
            <CharmSelector />
            <HR />
            <CurrentCharms />
            <InfoPanel />
        </>
    );
};

export default MainPage;

const Div = styled("div")(() => ({
    display: "flex",
    justifyContent: "right",
}));
