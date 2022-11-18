import React, { useContext } from "react";
import { charmList } from "../../charmList";
import styled from "@emotion/styled";
import { useCharmContext } from "../context/CharmContext";

//grid with all 40some charms
//hover gives popup with info?
//would need to implement something for mobile
//tap once acts as hover
//tap twice acts as click
//click on charm:
//  if already equipped: nothing
//  if not equipped:
//      check for notches available
//      if enough notches free, add to charm list
//      if >=1 notch available and notchcost >=1
//          ask user if want to overcharm
//          if yes, go ahead (and add to status somehow)
//          if no, cancel (put charm back in selector pool)
//      if full notches (or already overcharmed)
//          notify user somehow

const CharmSelector = () => {
    const { charms, addCharm, removeCharm, notchCount } = useCharmContext();

    function handleCharmClick(charm) {
        if (charms.find((c) => c.id === charm.id)) {
            removeCharm(charm.id);
            return;
        }
        addCharm(charm);
        return;
    }

    console.log(charms);
    //import charminfo
    //loop thru and generate div (or whatever) for every charm
    return (
        <CharmSelectionContainer>
            {charmList.map((charm) => {
                return (
                    <Div key={charm.id} onClick={(e) => handleCharmClick(charm)}>
                        {charm.id}
                    </Div>
                );
            })}
        </CharmSelectionContainer>
    );
};

export default CharmSelector;

const CharmSelectionContainer = styled("div")((props) => ({
    border: "1px solid blue",
    display: "flex",
    flexFlow: "row wrap",
}));

const Div = styled("span")((props) => ({
    border: "1px solid black",
    overflowWrap: "break-word",
    fontSize: "12px",
    height: "75px",
    width: "75px",
}));
