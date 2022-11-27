import React from "react";
import OptionsMenu from "../shared/components/OptionsMenu";
import { useNavigate } from "react-router-dom";
import Button from "../shared/styled/Button";
import styled from "@emotion/styled";

const OptionsPage = () => {
    let navigate = useNavigate();
    const goToMainPage = () => {
        navigate("/main");
    };

    return (
        <>
            <OptionsMenu />
            <Div>
                <Button large onClick={(e) => goToMainPage()}>
                    Go to stats
                </Button>
            </Div>
        </>
    );
};

export default OptionsPage;

const Div = styled("div")(() => ({
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
}));
