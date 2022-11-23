const standardMask = require("../images/standard mask transparent.png");
const lifebloodMask = require("../images/lifeblood mask transparent.png");
const hiveMask = require("../images/hive mask transparent.png");
const jonisHiveMask = require("../images/jonis hive mask transparent.png");

export default function generateHPImageArray(baseHP, charms) {
    let hp = baseHP;
    let hpArray = Array(baseHP).fill(standardMask);
    let hasJonis = false;

    //unbreakable heart: adds 2 masks
    if (charms.some((c) => c.id === "unbreakableHeart")) {
        hp = hp + 2;
        hpArray.push(standardMask, standardMask);
    }
    //jonis blessing: incr masks by 40%, converts all to lb
    //accounts for base masks & unbreakable masks
    //does not account for lb heart/core
    if (charms.some((c) => c.id === "jonisBlessing")) {
        hp = Math.ceil(hp * 1.4);
        hpArray = Array(hp).fill(lifebloodMask);
        hasJonis = true;
    }

    //hiveblood: converts masks to hiveblood
    //note: should notconvert lb heart/core masks to hiveblood
    //hiveblood + jonis: converts non-lb heart/core masks to blue hive masks
    if (charms.some((c) => c.id === "hiveblood")) {
        if (!hasJonis) {
            for (let i = 0; i < hpArray.length; i++) {
                if (hpArray[i] === standardMask) {
                    hpArray[i] = hiveMask;
                }
            }
        } else {
            for (let i = 0; i < hpArray.length; i++) {
                if (hpArray[i] === lifebloodMask) {
                    hpArray[i] = jonisHiveMask;
                }
            }
        }
    }

    //lifeblood heart: adds 2 lb masks
    if (charms.some((c) => c.id === "lifebloodHeart")) {
        hpArray.push(lifebloodMask, lifebloodMask);
    }

    //lifeblood core: adds 4 lb masks
    if (charms.some((c) => c.id === "lifebloodCore")) {
        hpArray.push(lifebloodMask, lifebloodMask, lifebloodMask, lifebloodMask);
    }

    return hpArray;
}
