//TODO (maybe): handle overwriting certain standard charm effects somehow

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
            synergyStrings.push("Dashmaster + Sharp Shadow: Increases damage of Sharp Shadow to 1.5x nail damage.");
        }
        //  + sprintmaster: incr move speed from +~20% to +35%
        //      base: 8.3
        //      sprint: 10
        //      sprint+dash: 11.5
        if (equippedSynCharms.some((c) => c === "sprintmaster")) {
            synergyStrings.push("Dashmaster + Sprintmaster: Increases move speed to +35% (from +20%)");
        }
    }

    //fury
    if (equippedSynCharms.some((c) => c === "furyOfTheFallen")) {
        //  + glowing womb: incr hatchling contact dmg by 5
        if (equippedSynCharms.some((c) => c === "glowingWomb")) {
            synergyStrings.push("Fury of the Fallen + Glowing Womb: increases hatchlings' contact damage by 5.");
        }
        //  + grubberfly: incr projecting dmg from 50% naildmg to ~67.5%
        //      base: 2/4/6/8/10
        //      w/ grubberfly: 3/6/9/12/15
        if (equippedSynCharms.some((c) => c === "grubberflysElegy")) {
            synergyStrings.push("Fury of the Fallen + Grubberfly's Elegy: increases projectile damage to 67.5% of nail damage (from 50%)");
        }
    }

    //mark of pride
    if (equippedSynCharms.some((c) => c === "markOfPride")) {
        //  + grubberfly: incr size of projectile by 35%
        if (equippedSynCharms.some((c) => c === "grubberflysElegy")) {
            synergyStrings.push("Mark of Pride + Grubberfly's Elegy: Increases the size of the projectiles from Grubberfly's Elegy by 35%.");
        }
    }

    //defenders crest
    if (equippedSynCharms.some((c) => c === "defendersCrest")) {
        //  + flukenest: repl flukes w/ 1 big fluke, 3 impact dmg, explodes into cloud that does 1dmg/tick for 23 ticks
        if (equippedSynCharms.some((c) => c === "flukenest")) {
            synergyStrings.push(
                "Defender's Crest + Flukenest: Replaces the horde of flukes with one massive, volatile fluke that does 3 impact damage and explodes into a dung cloud that does 1 damage per tick for 23 ticks."
            );
        }

        //  + glowing womb: lowers hachling contact dmg by 5, adds 1-sec cloud w/ 4-5dmg
        if (equippedSynCharms.some((c) => c === "glowingWomb")) {
            synergyStrings.push("Defender's Crest + Glowing Womb: Lowers Hatchling contact damage by 5, adding it back in the form of a 1-second dung cloud that does on average 4-5 damage.");
        }

        //  + spore shroom: incr spore cloud to 2dmg/tick duration 4.1sec, reduces tick freq for 20 ticks (40 total damage)
        if (equippedSynCharms.some((c) => c === "sporeShroom")) {
            synergyStrings.push(
                "Defender's Crest + Spore Shroom: Increases the damage of the spore cloud to 2 damage per tick and makes the cloud last 4.1 seconds. However, tick frequency is decreased, allowing for only 20 ticks (40 total damage)."
            );
        }
    }

    //quick focus
    if (equippedSynCharms.some((c) => c === "quickFocus")) {
        //  + shape of unn: doubles move speed of shape of unn (from 6 to 12)
        if (equippedSynCharms.some((c) => c === "shapeOfUnn")) {
            synergyStrings.push("Quick Focus + Shape of Unn: Doubles the move speed of Shape of Unn.");
        }
    }

    //deep focus
    if (equippedSynCharms.some((c) => c === "deepFocus")) {
        //  + spore shroom: incr spore cloud radius by 35%
        if (equippedSynCharms.some((c) => c === "sporeShroom")) {
            synergyStrings.push("Deep Focus + Spore Shroom: Increases the spore cloud's radius by 35%.");
        }
    }

    //jonis blessing
    if (equippedSynCharms.some((c) => c === "jonisBlessing")) {
        //  + hiveblood: hiveblood regens lifeblood masks from jonis, takes 20s instead of 10s
        if (equippedSynCharms.some((c) => c === "hiveblood")) {
            synergyStrings.push("Joni's Blessing + Hiveblood: Hiveblood regenerates Lifeblood Masks granted directly by Joni's Blessing, though it takes twice as long (20 seconds).");
        }
    }

    //grubsong
    if (equippedSynCharms.some((c) => c === "grubsong")) {
        //  + grubberfly: soul recd from taking dmg increases from 15 to 25
        if (equippedSynCharms.some((c) => c === "grubberflysElegy")) {
            synergyStrings.push("Grubsong + Grubberfly's Elegy: Soul received from taking damage increases to 25 (from 15).");
        }
        //  + weaversong: weaverlings collect 3 soul from hitting enemy
        if (equippedSynCharms.some((c) => c === "weaversong")) {
            synergyStrings.push("Grubsong + Weaversong: Weaverlings collect 3 soul from hitting enemies.");
        }
    }

    //dream wielder
    if (equippedSynCharms.some((c) => c === "dreamWielder")) {
        //  + dreamshield: shield is 15% larger
        if (equippedSynCharms.some((c) => c === "dreamshield")) {
            synergyStrings.push("Dream Wielder + Dreamshield: Shield is 15% larger.");
        }
    }

    //weaversong
    if (equippedSynCharms.some((c) => c === "weaversong")) {
        //  + sprintmaster: weaverling movespeed + 50%, jump further
        if (equippedSynCharms.some((c) => c === "sprintmaster")) {
            synergyStrings.push("Weaversong + Sprintmaster: Weaverlings move 50% faster and jump further.");
        }
    }

    //flukenest
    if (equippedSynCharms.some((c) => c === "flukenest")) {
        //  + shaman stone: incr size & damage of spell maggots
        if (equippedSynCharms.some((c) => c === "shamanStone")) {
            synergyStrings.push("Flukenest + Shaman Stone: Increases the size and damage of the Vengeful Spirit/Shade Soul flukes.");
        }
    }

    //TODO: deep focus + quick focus?
    //Without any Charms, and ignoring the 0.25 second startup time, it takes 0.891 seconds to Focus. With Quick Focus, it takes 0.594 seconds. With both Deep Focus and Quick Focus, it takes 0.9801 seconds.]

    return synergyStrings;
}
