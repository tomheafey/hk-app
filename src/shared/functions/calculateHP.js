export default function calculateHP(baseHP, charms) {
    let hp = baseHP;
    let hpArray = Array(baseHP).fill("mask");
    let hasJonis = false;

    //unbreakable heart: adds 2 masks
    if (charms.some((c) => c.id === "unbreakableHeart")) {
        hp = hp + 2;
        hpArray.push("mask", "mask");
    }
    //jonis blessing: incr masks by 40%, converts all to lb
    //accounts for base masks & unbreakable masks
    //does not account for lb heart/core
    if (charms.some((c) => c.id === "jonisBlessing")) {
        hp = Math.ceil(hp * 1.4);
        hpArray = Array(hp).fill("lb");
        hasJonis = true;
    }

    //hiveblood: converts masks to hiveblood
    //note: should notconvert lb heart/core masks to hiveblood
    //hiveblood + jonis: converts non-lb heart/core masks to blue hive masks
    if (charms.some((c) => c.id === "hiveblood")) {
        if (!hasJonis) {
            for (let i = 0; i < hpArray.length; i++) {
                if (hpArray[i] === "mask") {
                    hpArray[i] = "hb";
                }
            }
        } else {
            for (let i = 0; i < hpArray.length; i++) {
                if (hpArray[i] === "lb") {
                    hpArray[i] = "jhb";
                }
            }
        }
    }

    //lifeblood heart: adds 2 lb masks
    if (charms.some((c) => c.id === "lifebloodHeart")) {
        hpArray.push("lb", "lb");
    }

    //lifeblood core: adds 4 lb masks
    if (charms.some((c) => c.id === "lifebloodCore")) {
        hpArray.push("lb", "lb", "lb", "lb");
    }

    return hpArray;
}
