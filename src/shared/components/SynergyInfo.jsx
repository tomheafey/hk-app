import styled from "@emotion/styled";
import React from "react";

const SynergyInfo = ({ synergies }) => {
    return (
        <>
            <div>Charm Synergies</div>
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
