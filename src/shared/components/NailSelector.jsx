import styled from "@emotion/styled";
import { fontSize } from "@mui/system";
import React from "react";

const pureNail = require("../images/pure nail.png");
const coiledNail = require("../images/coiled nail.png");
const channelledNail = require("../images/channelled nail.png");
const sharpenedNail = require("../images/sharpened nail.png");
const oldNail = require("../images/old nail.png");

const nailLevels = [
    { val: "pure", label: "Pure", src: pureNail, dmg: 21 },
    { val: "coiled", label: "Coiled", src: coiledNail, dmg: 17 },
    { val: "channelled", label: "Channelled", src: channelledNail, dmg: 13 },
    { val: "sharpened", label: "Sharpened", src: sharpenedNail, dmg: 9 },
    { val: "old", label: "Old", src: oldNail, dmg: 5 },
];

const NailSelector = ({ setNailLevel, nailLevel }) => {
    return (
        <>
            <NailSelectContainer>
                <div>
                    <label htmlFor="nail-level">Select Nail</label>
                    <div>
                        <select id="nail-level" value={nailLevel} onChange={(e) => setNailLevel(e.target.value)}>
                            {nailLevels.map((n) => (
                                <option key={n.val} value={n.val}>
                                    {`${n.label} (${n.dmg} damage)`}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <NailImg src={nailLevels.find((n) => n.val === nailLevel).src} />
                </div>
            </NailSelectContainer>
        </>
    );
};

export default NailSelector;

const NailSelectContainer = styled("div")(() => ({
    display: "flex",
    flexFlow: "row nowrap",
}));
const NailContainer = styled("div")(() => ({
    width: "150px",
    height: "25px",
    fontSize: "10px",
}));

const NailImg = styled("img")(() => ({
    width: "150px",
    // filter: "brightness(50%)"
}));
