const dashmasterImage = require("../images/Dashmaster.png");
const sharpShadowImage = require("../images/Sharp_Shadow.png");
const sprintmasterImage = require("../images/Sprintmaster.png");
const furyOfTheFallenImage = require("../images/Fury_of_the_Fallen.png");
const defendersCrestImage = require("../images/Defenders_Crest.png");
const markOfPrideImage = require("../images/Mark_of_Pride.png");
const glowingWombImage = require("../images/Glowing_Womb.png");
const grubberflysElegyImage = require("../images/Grubberflys_Elegy.png");
const flukenestImage = require("../images/Flukenest.png");
const sporeShroomImage = require("../images/Spore_Shroom.png");
const quickFocusImage = require("../images/Quick_Focus.png");
const deepFocusImage = require("../images/Deep_Focus.png");
const grubsongImage = require("../images/Grubsong.png");
const jonisBlessingImage = require("../images/Jonis_Blessing.png");
const hivebloodImage = require("../images/Hiveblood.png");
const weaversongImage = require("../images/Weaversong.png");
const nailmastersGloryImage = require("../images/Nailmasters_Glory.png");
const shapeOfUnnImage = require("../images/Shape_of_Unn.png");
const dreamWielderImage = require("../images/Dream_Wielder.png");
const dreamshieldImage = require("../images/Dreamshield.png");
const shamanStoneImage = require("../images/Shaman_Stone.png");

export default function charmSynergies(charms) {
    const charmsWithSynergy = [
        "dashmaster",
        "sharpShadow",
        "sprintmaster",
        "furyOfTheFallen",
        "defendersCrest",
        "markOfPride",
        "glowingWomb",
        "grubberflysElegy",
        "flukenest",
        "sporeShroom",
        "quickFocus",
        "deepFocus",
        "grubsong",
        "jonisBlessing",
        "hiveblood",
        "weaversong",
        "nailmastersGlory",
        "shapeOfUnn",
        "dreamWielder",
        "dreamshield",
        "shamanStone",
    ];

    const equippedSynCharms = [];

    let synergyStrings = [];

    charmsWithSynergy.forEach((x) => {
        if (charms.some((c) => c.id === x)) {
            equippedSynCharms.push(x);
        }
    });

    //dashmaster
    if (equippedSynCharms.some((c) => c === "dashmaster")) {
        //  + sharp shadow: incr damage of sharp shadow to 1.5x nail damage
        if (equippedSynCharms.some((c) => c === "sharpShadow")) {
            synergyStrings.push({
                firstCharmSrc: dashmasterImage,
                secondCharmSrc: sharpShadowImage,
                effect: "Increases damage of Sharp Shadow to 1.5x nail damage.",
            });
        }
        //  + sprintmaster: incr move speed from +~20% to +35%
        //      base: 8.3
        //      sprint: 10
        //      sprint+dash: 11.5
        if (equippedSynCharms.some((c) => c === "sprintmaster")) {
            synergyStrings.push({ firstCharmSrc: dashmasterImage, secondCharmSrc: sprintmasterImage, effect: "Increases move speed to +35% (from +20%)" });
        }
    }

    //fury
    if (equippedSynCharms.some((c) => c === "furyOfTheFallen")) {
        //  + glowing womb: incr hatchling contact dmg by 5
        if (equippedSynCharms.some((c) => c === "glowingWomb")) {
            synergyStrings.push({ firstCharmSrc: furyOfTheFallenImage, secondCharmSrc: glowingWombImage, effect: "Increases hatchlings' contact damage by 5." });
        }
        //  + grubberfly: incr projecting dmg from 50% naildmg to ~67.5%
        //      base: 2/4/6/8/10
        //      w/ grubberfly: 3/6/9/12/15
        if (equippedSynCharms.some((c) => c === "grubberflysElegy")) {
            synergyStrings.push({ firstCharmSrc: furyOfTheFallenImage, secondCharmSrc: grubberflysElegyImage, effect: "Increases projectile damage to 67.5% of nail damage (from 50%)" });
        }
    }

    //mark of pride
    if (equippedSynCharms.some((c) => c === "markOfPride")) {
        //  + grubberfly: incr size of projectile by 35%
        if (equippedSynCharms.some((c) => c === "grubberflysElegy")) {
            synergyStrings.push({ firstCharmSrc: markOfPrideImage, secondCharmSrc: grubberflysElegyImage, effect: "Increases the size of the projectiles from Grubberfly's Elegy by 35%." });
        }
    }

    //defenders crest
    if (equippedSynCharms.some((c) => c === "defendersCrest")) {
        //  + flukenest: repl flukes w/ 1 big fluke, 3 impact dmg, explodes into cloud that does 1dmg/tick for 23 ticks
        if (equippedSynCharms.some((c) => c === "flukenest")) {
            synergyStrings.push({
                firstCharmSrc: defendersCrestImage,
                secondCharmSrc: flukenestImage,
                effect: "Replaces the horde of flukes with one massive, volatile fluke that does 3 impact damage and explodes into a dung cloud that does 1 damage per tick for 23 ticks.",
            });
        }

        //  + glowing womb: lowers hachling contact dmg by 5, adds 1-sec cloud w/ 4-5dmg
        if (equippedSynCharms.some((c) => c === "glowingWomb")) {
            synergyStrings.push({
                firstCharmSrc: defendersCrestImage,
                secondCharmSrc: glowingWombImage,
                effect: "Lowers Hatchling contact damage by 5, adding it back in the form of a 1-second dung cloud that does on average 4-5 damage.",
            });
        }

        //  + spore shroom: incr spore cloud to 2dmg/tick duration 4.1sec, reduces tick freq for 20 ticks (40 total damage)
        if (equippedSynCharms.some((c) => c === "sporeShroom")) {
            synergyStrings.push({
                firstCharmSrc: defendersCrestImage,
                secondCharmSrc: sporeShroomImage,
                effect: "Increases the damage of the spore cloud to 2 damage per tick and duration to 4.1 seconds. Tick frequency is decreased, allowing for only 20 ticks (40 total damage).",
            });
        }
    }

    //quick focus
    if (equippedSynCharms.some((c) => c === "quickFocus")) {
        //  + shape of unn: doubles move speed of shape of unn (from 6 to 12)
        if (equippedSynCharms.some((c) => c === "shapeOfUnn")) {
            synergyStrings.push({ firstCharmSrc: quickFocusImage, secondCharmSrc: shapeOfUnnImage, effect: "Doubles the move speed of Shape of Unn." });
        }
    }

    //deep focus
    if (equippedSynCharms.some((c) => c === "deepFocus")) {
        //  + spore shroom: incr spore cloud radius by 35%
        if (equippedSynCharms.some((c) => c === "sporeShroom")) {
            synergyStrings.push({ firstCharmSrc: deepFocusImage, secondCharmSrc: sporeShroomImage, effect: "Increases the spore cloud's radius by 35%." });
        }
    }

    //jonis blessing
    if (equippedSynCharms.some((c) => c === "jonisBlessing")) {
        //  + hiveblood: hiveblood regens lifeblood masks from jonis, takes 20s instead of 10s
        if (equippedSynCharms.some((c) => c === "hiveblood")) {
            synergyStrings.push({
                firstCharmSrc: jonisBlessingImage,
                secondCharmSrc: hivebloodImage,
                effect: "Hiveblood regenerates Lifeblood Masks granted directly by Joni's Blessing, though it takes twice as long (20 seconds).",
            });
        }
    }

    //grubsong
    if (equippedSynCharms.some((c) => c === "grubsong")) {
        //  + grubberfly: soul recd from taking dmg increases from 15 to 25
        if (equippedSynCharms.some((c) => c === "grubberflysElegy")) {
            synergyStrings.push({ firstCharmSrc: grubsongImage, secondCharmSrc: grubberflysElegyImage, effect: "Soul received from taking damage increases to 25 (from 15)." });
        }
        //  + weaversong: weaverlings collect 3 soul from hitting enemy
        if (equippedSynCharms.some((c) => c === "weaversong")) {
            synergyStrings.push({ firstCharmSrc: grubsongImage, secondCharmSrc: weaversongImage, effect: "Weaverlings collect 3 soul from hitting enemies." });
        }
    }

    //dream wielder
    if (equippedSynCharms.some((c) => c === "dreamWielder")) {
        //  + dreamshield: shield is 15% larger
        if (equippedSynCharms.some((c) => c === "dreamshield")) {
            synergyStrings.push({ firstCharmSrc: dreamWielderImage, secondCharmSrc: dreamshieldImage, effect: "Shield is 15% larger." });
        }
    }

    //weaversong
    if (equippedSynCharms.some((c) => c === "weaversong")) {
        //  + sprintmaster: weaverling movespeed + 50%, jump further
        if (equippedSynCharms.some((c) => c === "sprintmaster")) {
            synergyStrings.push({ firstCharmSrc: weaversongImage, secondCharmSrc: sprintmasterImage, effect: "Weaverlings move 50% faster and jump further." });
        }
    }

    //flukenest
    if (equippedSynCharms.some((c) => c === "flukenest")) {
        //  + shaman stone: incr size & damage of spell maggots
        if (equippedSynCharms.some((c) => c === "shamanStone")) {
            synergyStrings.push({ firstCharmSrc: flukenestImage, secondCharmSrc: shamanStoneImage, effect: "Increases the size and damage of the Vengeful Spirit/Shade Soul flukes." });
        }
    }

    //TODO: deep focus + quick focus?
    //Without any Charms, and ignoring the 0.25 second startup time, it takes 0.891 seconds to Focus. With Quick Focus, it takes 0.594 seconds. With both Deep Focus and Quick Focus, it takes 0.9801 seconds.]
    return synergyStrings;
}
