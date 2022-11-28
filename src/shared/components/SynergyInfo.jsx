import styled from "@emotion/styled";
import React from "react";
import SubheaderDiv from "../styled/SubheaderDiv";

const SynergyInfo = ({ synergies }) => {
    return (
        <>
            <SubheaderDiv>Charm Synergies</SubheaderDiv>
            {synergies.length === 0 && "No charm synergies."}
            {synergies.map((s, idx) => {
                return (
                    <SynergyContainer key={idx}>
                        <SynergyCharmImg src={s.firstCharmSrc} /> <SynergyCharmImg src={s.secondCharmSrc} />
                        <SynergyTextSpan>{s.effect}</SynergyTextSpan>
                    </SynergyContainer>
                );
            })}
        </>
    );
};

export default SynergyInfo;

const Div = styled("div")(() => ({
    fontSize: "25px",
    marginBottom: "10px",
}));

const SynergyCharmImg = styled("img")(() => ({
    height: "25px",
    marginRight: "5px",
}));

const SynergyTextSpan = styled("span")(() => ({
    marginLeft: "10px",
    fontSize: "12px",
}));

const SynergyContainer = styled("div")(() => ({
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
}));
