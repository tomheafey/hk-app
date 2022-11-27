import styled from "@emotion/styled";
import React from "react";

const DamageOutputInfo = ({
    hasShadeSoul,
    hasDescendingDark,
    hasAbyssShriek,
    baseNailDamage,
    baseFireballDamage,
    baseDiveDamage,
    baseShriekDamage,
    currentNailDamage,
    currentFireballDamage,
    currentDiveDamage,
    currentShriekDamage,
}) => {
    return (
        <>
            <Div>Damage Output</Div>
            <DamageInfoContainer>
                <DamageLabelsContainer>
                    <div>Nail Damage:</div>
                    <div>{hasShadeSoul ? "Shade Soul" : "Vengeful Spirit"} Damage:</div>
                    <div>{hasDescendingDark ? "Descending Dark" : "Desolate Dive"} Damage:</div>
                    <div>{hasAbyssShriek ? "Abyss Shriek" : "Howling Wraiths"} Damage:</div>
                </DamageLabelsContainer>
                <div>
                    <div>
                        {baseNailDamage < currentNailDamage && (
                            <b>
                                <IncreaseSpan>{currentNailDamage}</IncreaseSpan>
                            </b>
                        )}
                        {!(baseNailDamage < currentNailDamage) && baseNailDamage}
                    </div>

                    <div>
                        {baseFireballDamage < currentFireballDamage && (
                            <b>
                                <IncreaseSpan>{currentFireballDamage}</IncreaseSpan>
                            </b>
                        )}
                        {!(baseFireballDamage < currentFireballDamage) && baseFireballDamage}
                    </div>

                    <div>
                        {baseDiveDamage < currentDiveDamage && (
                            <b>
                                <IncreaseSpan>{currentDiveDamage}</IncreaseSpan>
                            </b>
                        )}
                        {!(baseDiveDamage < currentDiveDamage) && baseDiveDamage}
                    </div>

                    <div>
                        {baseShriekDamage < currentShriekDamage && (
                            <b>
                                <IncreaseSpan>{currentShriekDamage}</IncreaseSpan>
                            </b>
                        )}
                        {!(baseShriekDamage < currentShriekDamage) && baseShriekDamage}
                    </div>
                </div>
            </DamageInfoContainer>
        </>
    );
};

export default DamageOutputInfo;

const Div = styled("div")(() => ({
    fontSize: "25px",
    marginBottom: "10px",
}));

const DamageInfoContainer = styled("div")((props) => ({
    display: "flex",
    flexFlow: "row nowrap",
    // marginLeft: "25px",
}));

const DamageLabelsContainer = styled("div")((props) => ({
    flexBasis: "200px",
}));

const IncreaseSpan = styled("span")((props) => ({
    color: "#17FA40",
}));
