import styled from "@emotion/styled";

const TitleTextDiv = styled("div")(() => ({
    // border: "1px solid white",

    fontSize: "15px",
    "@media (min-width: 600px)": {
        fontSize: "20px",
    },
    "@media (min-width: 900px)": {
        fontSize: "25px",
    },

    // fontSize: "3vw",
    // backgroundColor: "transparent",
}));

export default TitleTextDiv;
