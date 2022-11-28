import styled from "@emotion/styled";

const TitleImg = styled("img")(() => ({
    // border: "1px solid white",
    width: "85%",
    maxWidth: "1000px",
    backgroundColor: "transparent",
    marginTop: "-3px",
    "@media (min-width: 600px)": {
        marginTop: "-10px",
    },
    "@media (min-width: 900px)": {
        marginTop: "-15px",
    },
}));

export default TitleImg;
