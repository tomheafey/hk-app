import React from "react";
import styled from "@emotion/styled";
import generateHPImageArray from "../functions/calculateHP";

//use calculateHP (feed empty array for charms)?

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
            <button onClick={decHP}>-</button> Masks <button onClick={incHP}>+</button>
            <div>
                {generateHPImageArray(baseHP, []).map((m, idx) => (
                    <img key={idx} src={m} />
                ))}
            </div>
        </>
    );
};

export default MaskSelector;

const fdsa = styled("div")({});
