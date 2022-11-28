import styled from "@emotion/styled";
import React from "react";
import SubheaderDiv from "../styled/SubheaderDiv";

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
            <SubheaderDiv>Damage Output</SubheaderDiv>
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

const DamageInfoContainer = styled("div")((props) => ({
    display: "flex",
    flexFlow: "row nowrap",
}));

const DamageLabelsContainer = styled("div")((props) => ({
    flexBasis: "200px",
}));

const IncreaseSpan = styled("span")((props) => ({
    color: "#17FA40",
}));
