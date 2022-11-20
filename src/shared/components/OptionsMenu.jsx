//probably a better name for this
//! may want to move this onto an 'intro page' to not clutter the main page
//! or at least make it hideable/collapsible

//select nail level
//radios? for
//  kingsoul vs voidheart
//  grimm vs carefree
//possibly radios for
//  vengeful spirit vs shade soul
//  desolate dive vs descending dark
//  howling wraiths vs abyss shriek
//should DEFAULT everything to 112% completion status

import React, { useEffect, useState } from "react";
import { useNailContext } from "../context/NailContext";

const OptionsMenu = () => {
    const { setNailDamage } = useNailContext();
    const [nailLevel, setNailLevel] = useState("pure");

    useEffect(() => {
        switch (nailLevel) {
            case "pure":
                setNailDamage(21);
                break;
            case "coiled":
                setNailDamage(17);
                break;
            case "channelled":
                setNailDamage(13);
                break;
            case "sharpened":
                setNailDamage(9);
                break;
            case "old":
                setNailDamage(5);
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

    return (
        <>
            <label htmlFor="nail-level">Nail level</label>
            <select id="nail-level" value={nailLevel} onChange={(e) => setNailLevel(e.target.value)}>
                {nailLevels.map((n) => (
                    <option key={n.val} value={n.val}>
                        {n.label}
                    </option>
                ))}
            </select>

            <div>
                <input type="radio" name="vh-ks" id="void-heart" defaultChecked />
                <label htmlFor="void-heart">Void Heart</label>
                <input type="radio" name="vh-ks" id="kingsoul" />
                <label htmlFor="kingsoul">Kingsoul</label>
            </div>

            <div>
                <input type="radio" name="cm-gc" id="carefree-melody" defaultChecked />
                <label htmlFor="carefree-melody">Carefree Melody</label>
                <input type="radio" name="cm-gc" id="grimmchild" />
                <label htmlFor="grimmchild">Grimmchild</label>
            </div>

            <div>
                <input type="radio" name="ss-vs" id="shade-soul" defaultChecked />
                <label htmlFor="shade-soul">Shade Soul</label>
                <input type="radio" name="ss-vs" id="vengeful-spirit" />
                <label htmlFor="vengeful-spirit">Vengeful Spirit</label>
            </div>

            <div>
                <input type="radio" name="dd-dd" id="descending-dark" defaultChecked />
                <label htmlFor="descending-dark">Descending Dark</label>
                <input type="radio" name="dd-dd" id="desolate-dive" />
                <label htmlFor="desolate-dive">Desolate Dive</label>
            </div>

            <div>
                <input type="radio" name="as-hw" id="abyss-shriek" defaultChecked />
                <label htmlFor="abyss-shriek">Abyss Shriek</label>
                <input type="radio" name="as-hw" id="howling-wraiths" />
                <label htmlFor="howling-wraiths">Howling Wraiths</label>
            </div>
        </>
    );
};

export default OptionsMenu;
