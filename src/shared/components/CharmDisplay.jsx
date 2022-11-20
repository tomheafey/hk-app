import React from "react";

const CharmDisplay = ({ charm }) => {
    console.log(charm.pngName);

    return (
        <>
            <img src={require(`../images/${charm.pngName}.png`)} />
        </>
    );
};

export default CharmDisplay;
// ("C:Users\tmheaDocumentsMCAhk-appsrcsharedimagesWayward_Compass.png");
