import styled from "@emotion/styled";
import React from "react";

const MaskInfo = ({ baseHP, charms, generateHPImageArray }) => {
    return (
        <>
            <MaskInfoContainer>
                <HPTextDiv>Masks</HPTextDiv>
                <MasksContainer>
                    {generateHPImageArray(baseHP, charms).map((m, idx) => (
                        <MaskImg key={idx} src={m} />
                    ))}
                </MasksContainer>
            </MaskInfoContainer>
        </>
    );
};

export default MaskInfo;

const MaskInfoContainer = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
}));

const MasksContainer = styled("div")((props) => ({
    display: "flex",
    flexFlow: "row wrap",
    // alignItems: "center",
}));

const HPTextDiv = styled("div")((props) => ({
    marginRight: "10px",
}));

const MaskImg = styled("img")((props) => ({
    height: "20px",
    marginLeft: "2px",
}));
