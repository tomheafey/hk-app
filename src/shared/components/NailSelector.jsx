import styled from "@emotion/styled";
import React from "react";

const pureNail = require("../images/pure nail.png");
const coiledNail = require("../images/coiled nail.png");
const channelledNail = require("../images/channelled nail.png");
const sharpenedNail = require("../images/sharpened nail.png");
const oldNail = require("../images/old nail.png");

const pureNailVertical = require("../images/pure nail vertical.png");
const coiledNailVertical = require("../images/coiled nail vertical.png");
const channelledNailVertical = require("../images/channelled nail vertical.png");
const sharpenedNailVertical = require("../images/sharpened nail vertical.png");
const oldNailVertical = require("../images/old nail vertical.png");

// const nailLevels = [
//     { val: "pure", label: "Pure", src: pureNail, dmg: 21 },
//     { val: "coiled", label: "Coiled", src: coiledNail, dmg: 17 },
//     { val: "channelled", label: "Channelled", src: channelledNail, dmg: 13 },
//     { val: "sharpened", label: "Sharpened", src: sharpenedNail, dmg: 9 },
//     { val: "old", label: "Old", src: oldNail, dmg: 5 },
// ];

const nailLevels = [
    { val: "pure", label: "Pure", src: pureNailVertical, dmg: 21 },
    { val: "coiled", label: "Coiled", src: coiledNailVertical, dmg: 17 },
    { val: "channelled", label: "Channelled", src: channelledNailVertical, dmg: 13 },
    { val: "sharpened", label: "Sharpened", src: sharpenedNailVertical, dmg: 9 },
    { val: "old", label: "Old", src: oldNailVertical, dmg: 5 },
];

const NailSelector = ({ nailLevel, setNailLevel }) => {
    function handleClick(e) {
        if (nailLevel !== e.currentTarget.value) {
            setNailLevel(e.currentTarget.value);
        }
    }

    return (
        <>
            <div>Select Nail</div>
            <NailSelectContainer>
                {nailLevels.map((n) => (
                    <Button key={n.val} value={n.val} disabled={n.val === nailLevel} onClick={(e) => handleClick(e)}>
                        <ButtonImg src={n.src} />
                        <br />
                        {n.label}
                    </Button>
                ))}
            </NailSelectContainer>
        </>
    );
};

export default NailSelector;
// const NailSelector = ({ setNailLevel, nailLevel }) => {
//     return (
//         <>
//             <NailSelectContainer>
//                 <div>
//                     <label htmlFor="nail-level">Select Nail</label>
//                     <div>
//                         <select id="nail-level" value={nailLevel} onChange={(e) => setNailLevel(e.target.value)}>
//                             {nailLevels.map((n) => (
//                                 <option key={n.val} value={n.val}>
//                                     {`${n.label} (${n.dmg} damage)`}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//                 <div>
//                     <NailImg src={nailLevels.find((n) => n.val === nailLevel).src} />
//                 </div>
//             </NailSelectContainer>
//         </>
//     );
// };

// export { NailToggleGroup, NailSelector };

const NailSelectContainer = styled("div")(() => ({
    display: "flex",
    flexFlow: "row nowrap",
}));

const Button = styled("button")(() => ({
    width: "60px",
    height: "80px",
    fontSize: "10px",
    margin: "0px 2px",

    "@media (min-width: 600px)": {
        width: "75px",
        height: "100px",
        fontSize: "12px",
        margin: "0px 4px",
    },
    "@media (min-width: 900px)": {
        width: "100px",
        height: "133px",
        fontSize: "14px",
        margin: "0px 6px",
    },

    border: "1px solid white",
    color: "white",
    borderRadius: "5px",
    opacity: ".5",
    "&:disabled": {
        border: "2px solid white",
        opacity: "1",
    },
    "&:hover": {
        border: "2px solid white",
    },
}));

const ButtonImg = styled("img")(() => ({
    height: "50%",
    marginBottom: "5px",
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
