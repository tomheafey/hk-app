import styled from "@emotion/styled";
import React from "react";
import SubheaderDiv from "../styled/SubheaderDiv";

const CharmEffectInfo = ({ charms }) => {
    return (
        <>
            <SubheaderDiv>Charm Effects</SubheaderDiv>

            <EffectsContainer>
                {charms.map((c) => {
                    return (
                        <EffectContainer key={c.id}>
                            <ImgAndNameContainer>
                                <CharmEffectImg src={require(`../images/${c.pngName}.png`)} />
                                <span>{c.name}</span>
                            </ImgAndNameContainer>
                            <UL>
                                {c.effectText.map((e, idx) => {
                                    return <LI key={idx}>{e}</LI>;
                                })}
                            </UL>
                        </EffectContainer>
                    );
                })}
            </EffectsContainer>
        </>
    );
};

export default CharmEffectInfo;

const EffectsContainer = styled("div")(() => ({
    display: "flex",
    flexFlow: "row wrap",
}));

const EffectContainer = styled("div")(() => ({
    flexBasis: "300px",
}));

const ImgAndNameContainer = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
}));

const CharmEffectImg = styled("img")(() => ({
    height: "25px",
    marginRight: "10px",
}));

const UL = styled("ul")(() => ({
    marginTop: "5px",
    listStyle: "outside",
}));

const LI = styled("li")(() => ({
    fontSize: "12px",
    marginBottom: "2px",
}));
