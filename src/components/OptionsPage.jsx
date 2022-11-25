import React from "react";
import OptionsMenu from "../shared/components/OptionsMenu";
import { useNavigate } from "react-router-dom";

const OptionsPage = () => {
    let navigate = useNavigate();
    const goToMainPage = () => {
        navigate("/main");
    };

    return (
        <>
            <OptionsMenu />
            <button onClick={(e) => goToMainPage()}>Go to stats</button>
        </>
    );
};

export default OptionsPage;
