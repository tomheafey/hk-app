import styled from "@emotion/styled";
import React from "react";

const CharmEffectInfo = ({ charms }) => {
    return (
        <>
            <Div>Charm Effects</Div>

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

            {/* <div>
                <CharmEffectImg src={require(`../images/${testCharm.pngName}.png`)} />
                <span>{testCharm.name}</span>
                <ul>
                    {testCharm.effectText.map((e, idx) => {
                        return <LI key={idx}>{e}</LI>;
                    })}
                </ul>
            </div> */}
        </>
    );
};

export default CharmEffectInfo;

const Div = styled("div")(() => ({
    fontSize: "25px",
    marginBottom: "10px",
}));

const EffectsContainer = styled("div")(() => ({
    display: "flex",
    flexFlow: "row wrap",
}));

const EffectContainer = styled("div")(() => ({
    flexBasis: "300px",
    // border: "1px solid grey",
}));

const ImgAndNameContainer = styled("div")(() => ({
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
}));

const ImgContainer = styled("div")(() => ({}));

const CharmEffectImg = styled("img")(() => ({
    height: "25px",
    marginRight: "10px",
}));

const UL = styled("ul")(() => ({
    // display: "flex",
    // textAlign: "center",
    marginTop: "5px",
    listStyle: "outside",
}));

const LI = styled("li")(() => ({
    fontSize: "12px",
    // marginLeft: "50px",
    marginBottom: "2px",
}));
