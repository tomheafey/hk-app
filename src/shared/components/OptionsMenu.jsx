//probably a better name for this
//! may want to move this onto an 'intro page' to not clutter the main page

//select nail level
//radios? for
//  kingsoul vs voidheart
//  grimm vs carefree
//possibly radios for
//  vengeful spirit vs shade soul
//  desolate dive vs descending dark
//  howling wraiths vs abyss shriek
//should DEFAULT everything to 112% completion status

//TODO: create functional components for dropdowns and radio groups

import React, { useEffect, useState } from "react";
import { useCharmContext } from "../context/CharmContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";
import { useHPContext } from "../context/HPContext";
import { useNailContext } from "../context/NailContext";
import { useNotchesContext } from "../context/NotchesContext";
import { useSpellsContext } from "../context/SpellsContext";
import { voidHeart } from "../../charmList";

const OptionsMenu = () => {
    const { setBaseNailDamage } = useNailContext();
    const { baseHP, setBaseHP } = useHPContext();
    const { charms, removeCharm, addCharm, clearCharms } = useCharmContext();
    const { notchTotal, setNotchTotal } = useNotchesContext();
    const { baseFireballDamage, setBaseFireballDamage, baseDiveDamage, setBaseDiveDamage, baseShriekDamage, setBaseShriekDamage } = useSpellsContext();
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
    return (
        <>
            <button onClick={(e) => setIsHidden(!isHidden)}>{isHidden ? "unhide" : "hide"} options</button>
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

                    {/* <div>
                        <input type="radio" name="ss-vs" id="shade-soul" defaultChecked />
                        <label htmlFor="shade-soul">Shade Soul</label>
                        <input type="radio" name="ss-vs" id="vengeful-spirit" />
                        <label htmlFor="vengeful-spirit">Vengeful Spirit</label>
                    </div> */}

                    <div>
                        <input
                            type="radio"
                            name="ss-vs"
                            id="shade-soul"
                            value={30}
                            onChange={(e) => {
                                setBaseFireballDamage(parseInt(e.target.value));
                            }}
                            checked={baseFireballDamage === 30}
                        />
                        <label htmlFor="shade-soul">Shade Soul</label>
                        <input
                            type="radio"
                            name="ss-vs"
                            id="vengeful-spirit"
                            value={15}
                            onChange={(e) => {
                                setBaseFireballDamage(parseInt(e.target.value));
                            }}
                            checked={baseFireballDamage === 15}
                        />
                        <label htmlFor="vengeful-spirit">Vengeful Spirit</label>
                    </div>

                    {/* <div>
                        <input type="radio" name="dd-dd" id="descending-dark" defaultChecked />
                        <label htmlFor="descending-dark">Descending Dark</label>
                        <input type="radio" name="dd-dd" id="desolate-dive" />
                        <label htmlFor="desolate-dive">Desolate Dive</label>
                    </div> */}
                    <div>
                        <input
                            type="radio"
                            name="dd-dd"
                            id="descending-dark"
                            value={65}
                            onChange={(e) => {
                                setBaseDiveDamage(parseInt(e.target.value));
                            }}
                            checked={baseDiveDamage === 65}
                        />
                        <label htmlFor="descending-dark">Descending Dark</label>
                        <input
                            type="radio"
                            name="dd-dd"
                            id="desolate-dive"
                            value={35}
                            onChange={(e) => {
                                setBaseDiveDamage(parseInt(e.target.value));
                            }}
                            checked={baseDiveDamage === 35}
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
                            value={80}
                            onChange={(e) => {
                                setBaseShriekDamage(parseInt(e.target.value));
                            }}
                            checked={baseShriekDamage === 80}
                        />
                        <label htmlFor="abyss-shriek">Abyss Shriek</label>
                        <input
                            type="radio"
                            name="as-hw"
                            id="howling-wraiths"
                            value={39}
                            onChange={(e) => {
                                setBaseShriekDamage(parseInt(e.target.value));
                            }}
                            checked={baseShriekDamage === 39}
                        />
                        <label htmlFor="howling-wraiths">Howling Wraiths</label>
                    </div>
                </div>
            )}
        </>
    );
};

export default OptionsMenu;
