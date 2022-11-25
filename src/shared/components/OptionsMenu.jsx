//! may want to move this onto an 'intro page' to not clutter the main page

//should DEFAULT everything to 112% completion status
//TODO: break this off into an 'intro' page, set up routing for "/intro" (or whatever) and "/main"

//TODO: create functional components for dropdowns and radio groups
//TODO (maybe): replace option buttons with some kind of prettier MUI component
//TODO (maybe): images of diff nails in nail level dropdown
//TODO (maybe): images of spells for spell toggles

import React, { useEffect, useState } from "react";
import { useCharmContext } from "../context/CharmContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";
import { useHPContext } from "../context/HPContext";
import { useNailContext } from "../context/NailContext";
import { useNotchesContext } from "../context/NotchesContext";
import { useSpellsContext } from "../context/SpellsContext";
import { voidHeart } from "../../charmList";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "@emotion/styled";

const OptionsMenu = () => {
    const { setBaseNailDamage } = useNailContext();
    const { baseHP, setBaseHP } = useHPContext();
    const { charms, removeCharm, addCharm, clearCharms } = useCharmContext();
    const { notchTotal, setNotchTotal } = useNotchesContext();
    const { hasShadeSoul, hasDescendingDark, hasAbyssShriek, baseFireballDamage, baseDiveDamage, baseShriekDamage, setHasShadeSoul, setHasDescendingDark, setHasAbyssShriek } = useSpellsContext();
    const { hasVoidHeart, setHasVoidHeart, hasCarefreeMelody, setHasCarefreeMelody } = useCharmTogglesContext();

    const [nailLevel, setNailLevel] = useState("pure");
    const [isHidden, setIsHidden] = useState(false);

    //deal with changing notches total if charms already equipped
    function handleNotchToggle(e) {
        clearCharms();
        setNotchTotal(e.target.value);
    }

    //if user changes carefree/grimm or void/king AND user has one equipped, clear charms out or at least remove it
    function handleCharmToggles(e) {
        if (e.target.value === "carefreeMelody") {
            removeCharm("grimmchild");
            setHasCarefreeMelody(true);
        }
        if (e.target.value === "grimmchild") {
            removeCharm("carefreeMelody");
            setHasCarefreeMelody(false);
        }
        if (e.target.value === "voidHeart") {
            removeCharm("kingsoul");
            setHasVoidHeart(true);
        }
        if (e.target.value === "kingsoul") {
            removeCharm("voidHeart");
            setHasVoidHeart(false);
        }
    }

    //automatically adds void heart if that radio is selected
    useEffect(() => {
        if (hasVoidHeart && !charms.some((c) => c.id === "voidHeart")) {
            addCharm(voidHeart);
        }
    }, [hasVoidHeart]);

    useEffect(() => {
        switch (nailLevel) {
            case "pure":
                setBaseNailDamage(21);
                break;
            case "coiled":
                setBaseNailDamage(17);
                break;
            case "channelled":
                setBaseNailDamage(13);
                break;
            case "sharpened":
                setBaseNailDamage(9);
                break;
            case "old":
                setBaseNailDamage(5);
                break;
            default:
                break;
        }
    }, [nailLevel]);

    const nailLevels = [
        { val: "pure", label: "Pure Nail" },
        { val: "coiled", label: "Coiled Nail" },
        { val: "channelled", label: "Channelled Nail" },
        { val: "sharpened", label: "Sharpened Nail" },
        { val: "old", label: "Old Nail" },
    ];

    let hpOptions = [];
    for (let i = 9; i >= 5; i--) {
        hpOptions.push({ val: i, label: i.toString() });
    }

    let notchOptions = [];
    for (let i = 11; i >= 3; i--) {
        notchOptions.push({ val: i, label: i.toString() });
    }

    // const [testState, setTestState] = useState("1");
    // console.log(testState);
    //TODO: use MUI for alternatives to radios
    //! abandoning this for now - for some reason bg from index.css is overriding the styled button & buttongroup
    return (
        <>
            {/* <StyledToggleButtonGroup sx={{ backgroundColor: "blue", borderColor: "green" }} value={testState} exclusive onChange={(e) => setTestState(e.target.value)}>
                <StyledToggleButton sx={{ color: "red" }} value={1}>
                    test1
                </StyledToggleButton>
                <StyledToggleButton value={2}>test2</StyledToggleButton>
            </StyledToggleButtonGroup> */}

            {/* <button onClick={(e) => setIsHidden(!isHidden)}>{isHidden ? "unhide" : "hide"} options</button> */}
            {!isHidden && (
                <div>
                    {/* these drop-downs could be func comps */}
                    <label htmlFor="nail-level">Nail level</label>
                    <select id="nail-level" value={nailLevel} onChange={(e) => setNailLevel(e.target.value)}>
                        {nailLevels.map((n) => (
                            <option key={n.val} value={n.val}>
                                {n.label}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="base-hp">Base Masks</label>
                    <select id="base-hp" value={baseHP} onChange={(e) => setBaseHP(parseInt(e.target.value))}>
                        {hpOptions.map((opt) => (
                            <option key={opt.val} value={opt.val}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="notches">Notches</label>
                    <select id="notches" value={notchTotal} onChange={(e) => handleNotchToggle(e)}>
                        {notchOptions.map((opt) => (
                            <option key={opt.val} value={opt.val}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    {/* <div>
                        <input type="radio" name="cm-gc" id="carefree-melody" defaultChecked />
                        <label htmlFor="carefree-melody">Carefree Melody</label>
                        <input type="radio" name="cm-gc" id="grimmchild" />
                        <label htmlFor="grimmchild">Grimmchild</label>
                    </div> */}

                    <div>
                        <input
                            type="radio"
                            name="cm-gc"
                            id="carefree-melody"
                            value={"carefreeMelody"}
                            onChange={(e) => {
                                handleCharmToggles(e);
                            }}
                            checked={hasCarefreeMelody}
                        />
                        <label htmlFor="carefree-melody">Carefree Melody</label>

                        <input
                            type="radio"
                            name="cm-gc"
                            id="grimmchild"
                            value={"grimmchild"}
                            onChange={(e) => {
                                handleCharmToggles(e);
                            }}
                            checked={!hasCarefreeMelody}
                        />
                        <label htmlFor="grimmchild">Grimmchild</label>
                    </div>

                    {/* <div>
                        <input type="radio" name="vh-ks" id="void-heart" defaultChecked />
                        <label htmlFor="void-heart">Void Heart</label>
                        <input type="radio" name="vh-ks" id="kingsoul" />
                        <label htmlFor="kingsoul">Kingsoul</label>
                    </div> */}

                    <div>
                        <input
                            type="radio"
                            name="vh-ks"
                            id="void-heart"
                            value={"voidHeart"}
                            onChange={(e) => {
                                handleCharmToggles(e);
                            }}
                            checked={hasVoidHeart}
                        />
                        <label htmlFor="void-heart">Void Heart</label>

                        <input
                            type="radio"
                            name="vh-ks"
                            id="kingsoul"
                            value={"kingsoul"}
                            onChange={(e) => {
                                handleCharmToggles(e);
                            }}
                            checked={!hasVoidHeart}
                        />
                        <label htmlFor="kingsoul">Kingsoul</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="ss-vs"
                            id="shade-soul"
                            onChange={(e) => {
                                setHasShadeSoul(!hasShadeSoul);
                            }}
                            checked={hasShadeSoul}
                        />
                        <label htmlFor="shade-soul">Shade Soul</label>
                        <input
                            type="radio"
                            name="ss-vs"
                            id="vengeful-spirit"
                            onChange={(e) => {
                                setHasShadeSoul(!hasShadeSoul);
                            }}
                            checked={!hasShadeSoul}
                        />
                        <label htmlFor="vengeful-spirit">Vengeful Spirit</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="dd-dd"
                            id="descending-dark"
                            onChange={(e) => {
                                setHasDescendingDark(!hasDescendingDark);
                            }}
                            checked={hasDescendingDark}
                        />
                        <label htmlFor="descending-dark">Descending Dark</label>
                        <input
                            type="radio"
                            name="dd-dd"
                            id="desolate-dive"
                            onChange={(e) => {
                                setHasDescendingDark(!hasDescendingDark);
                            }}
                            checked={!hasDescendingDark}
                        />
                        <label htmlFor="desolate-dive">Desolate Dive</label>
                    </div>

                    {/* <div>
                        <input type="radio" name="as-hw" id="abyss-shriek" defaultChecked />
                        <label htmlFor="abyss-shriek">Abyss Shriek</label>
                        <input type="radio" name="as-hw" id="howling-wraiths" />
                        <label htmlFor="howling-wraiths">Howling Wraiths</label>
                    </div> */}
                    <div>
                        <input
                            type="radio"
                            name="as-hw"
                            id="abyss-shriek"
                            onChange={(e) => {
                                setHasAbyssShriek(!hasAbyssShriek);
                            }}
                            checked={hasAbyssShriek}
                        />
                        <label htmlFor="abyss-shriek">Abyss Shriek</label>
                        <input
                            type="radio"
                            name="as-hw"
                            id="howling-wraiths"
                            onChange={(e) => {
                                setHasAbyssShriek(!hasAbyssShriek);
                            }}
                            checked={!hasAbyssShriek}
                        />
                        <label htmlFor="howling-wraiths">Howling Wraiths</label>
                    </div>
                </div>
            )}
        </>
    );
};

export default OptionsMenu;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    // color: "red",
    // backgroundColor: "black",
    // border: "1px solid white",
}));

const StyledToggleButton = styled(ToggleButton)(() => ({
    // backgroundColor: "blue",
    // color: "red",
    // color: "red",
    // backgroundColor: "black",
    // border: "1px solid white",
}));
