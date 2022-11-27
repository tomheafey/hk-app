import styled from "@emotion/styled";

const Button = styled("button")((props) => ({
    fontSize: props.large ? "20px" : "15px",
    border: props.large ? "2px solid grey" : "1px solid grey",
    borderRadius: "5px",
    "&:hover": {
        borderColor: "white",
    },
    width: props.plusMinus ? "20px" : "",
    textAlign: props.plusMinus ? "center" : "",
    padding: props.plusMinus ? "0px" : "",
}));

export default Button;
