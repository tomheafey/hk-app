import styled from "@emotion/styled";
import React from "react";
import NotchDisplay from "./NotchDisplay";

const NotchesInfo = ({ isOvercharmed, notchesArray }) => {
    return (
        <>
            <OverCharmedDiv>{isOvercharmed && "OVERCHARMED"} </OverCharmedDiv>
            <NotchesDiv>
                <NotchesTextDiv>Notches</NotchesTextDiv>
                <NotchDisplay notchesArray={notchesArray} />
                {/* {notchesArray.map((n, idx) => (
                    <span key={idx}>{n}</span>
                ))} */}
            </NotchesDiv>
        </>
    );
};

export default NotchesInfo;

const OverCharmedDiv = styled("div")((props) => ({
    height: "35px",
    fontSize: "25px",
    color: "#964294",
    fontFamily: "Trajan Pro",
}));

const NotchesDiv = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
}));

const NotchesTextDiv = styled("div")((props) => ({
    marginRight: "10px",
}));
