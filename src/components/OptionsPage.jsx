import React from "react";
import OptionsMenu from "../shared/components/OptionsMenu";
import { useNavigate } from "react-router-dom";
import Button from "../shared/styled/Button";
import styled from "@emotion/styled";
import TitleContainer from "../shared/styled/TitleContainer";
import TitleTextDiv from "../shared/styled/TitleTextDiv";
import TitleImg from "../shared/styled/TitleImg";
import TopRightButtonContainer from "../shared/styled/TopRightButtonContainer";
const topBorder = require("../shared/images/test.png");

const OptionsPage = () => {
    let navigate = useNavigate();
    const goToMainPage = () => {
        navigate("/main");
    };

    return (
        <>
            <TopRightButtonContainer>
                <Button onClick={(e) => goToMainPage()}>Go to stats</Button>
            </TopRightButtonContainer>
            <TitleContainer>
                <TitleTextDiv>HK Charm Builder</TitleTextDiv>
                <TitleImg src={topBorder} />
            </TitleContainer>
            <OptionsMenu />
            <Div>
                <Button large onClick={(e) => goToMainPage()}>
                    Go to stats
                </Button>
            </Div>
        </>
    );
};

export default OptionsPage;

const Div = styled("div")(() => ({
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
}));
