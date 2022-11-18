import CharmSelector from "../shared/components/CharmSelector";

import React from "react";
import CurrentCharms from "../shared/components/CurrentCharms";

const MainPage = () => {
    return (
        <>
            <CurrentCharms />
            <CharmSelector />;
        </>
    );
};

export default MainPage;
