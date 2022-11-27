import React from "react";
import styled from "@emotion/styled";
import generateHPImageArray from "../functions/calculateHP";
import Button from "../styled/Button";

const MaskSelector = ({ baseHP, setBaseHP }) => {
    function decHP() {
        if (baseHP > 5) {
            setBaseHP((curr) => curr - 1);
        }
    }
    function incHP() {
        if (baseHP < 9) {
            setBaseHP((curr) => curr + 1);
        }
    }

    return (
        <>
            <div>
                <Button plusMinus onClick={decHP}>
                    –
                </Button>
                {" Masks "}
                <Button plusMinus onClick={incHP}>
                    +
                </Button>
            </div>
            <div>
                {generateHPImageArray(baseHP, []).map((m, idx) => (
                    <MaskImg key={idx} src={m} />
                ))}
            </div>
        </>
    );
};

export default MaskSelector;

const MaskImg = styled("img")({
    height: "40px",
    "@media (min-width: 600px)": {
        height: "60px",
    },
    "@media (min-width: 900px)": {
        height: "80px",
    },
});
