import styled from "@emotion/styled";

const HR = styled("hr")(() => ({
    height: "1px",
    width: "80%",
    border: "0",
    color: "white",
    backgroundImage: "linear-gradient(to right, rgb(255,255,255,0), rgba(255,255,255, 1), rgba(255,255,255,0))",
}));

export default HR;
