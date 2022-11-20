import React, { useContext, useEffect, useMemo } from "react";
import { charmList } from "../../charmList";
import styled from "@emotion/styled";
import { useCharmContext } from "../context/CharmContext";
import CharmDisplay from "./CharmDisplay";
import { useNotchesContext } from "../context/NotchesContext";

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
    const { charms, addCharm, removeCharm } = useCharmContext();
    const { notchTotal, notchCount, setNotchCount, notchesArray } = useNotchesContext();

    // let isOvercharmed = notchCount <= notchTotal ? false : true;
    // if (isOvercharmed) {
    //     for (let i = 1; i <= notchCount; i++) {
    //         if (i <= notchTotal) {
    //             notchesArray.push("c");
    //         } else {
    //             notchesArray.push("!");
    //         }
    //     }
    // } else {
    //     for (let i = 1; i <= notchTotal; i++) {
    //         if (i <= notchCount) {
    //             notchesArray.push("c");
    //         } else {
    //             notchesArray.push("O");
    //         }
    //     }
    // }

    useEffect(() => {
        let count = 0;
        charms.forEach((c) => (count += c.notches));
        console.log(count);
        setNotchCount(count);
        return;
    }, [charms]);

    // const notchCount = useMemo(() => {
    //     let count = 0;
    //     charms.forEach((c) => (count += c.notches));
    //     console.log(count);
    //     return count;
    // }, [charms]);

    function handleCharmClick(charm) {
        //TODO: logic for preventing add at notch max

        if (charms.find((c) => c.id === charm.id)) {
            removeCharm(charm.id);
            return;
        }

        //if enough notches available, just add
        if (notchCount + charm.notches <= notchTotal) {
            addCharm(charm);
            return;
        }

        //if notch available do overcharm logic
        if (notchCount < notchTotal) {
            //TODO: figure out how to handle overcharming
            addCharm(charm);
            return;
        }

        if (notchCount >= notchTotal) {
            //! if already at max or overcharmed, do nothing
            //! possibly add indication
        }

        return;
    }

    return (
        <CharmSelectionContainer>
            {charmList.map((charm) => {
                return (
                    <Div key={charm.id} onClick={(e) => handleCharmClick(charm)}>
                        {charm.name}
                        {/* <CharmDisplay charm={charm} /> */}
                        <br />
                        <br />
                        {charm.notches}
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
    textAlign: "center",
    overflowWrap: "break-word",
    fontSize: "12px",
    height: "75px",
    width: "75px",
}));
