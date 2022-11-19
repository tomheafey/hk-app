import CharmSelector from "../shared/components/CharmSelector";

import React from "react";
import CurrentCharms from "../shared/components/CurrentCharms";
import OptionsMenu from "../shared/components/OptionsMenu";

const MainPage = () => {
    return (
        <>
            <OptionsMenu />
            <CurrentCharms />
            <CharmSelector />;
        </>
    );
};

export default MainPage;
