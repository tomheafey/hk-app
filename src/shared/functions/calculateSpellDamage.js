//only charm that affects spell dmg is shaman stone

export function calculateFireballDamage(baseDmg, charms) {
    let dmg = baseDmg;
    if (charms.some((c) => c.id === "shamanStone")) {
        dmg = Math.round(baseDmg * 1.33);
    }
    return dmg;
}

export function calculateDiveDamage(baseDmg, charms) {
    //+51% for desolate dive
    //+47% for descending dark
    //! seems to actually be ~1.354%
    let dmg = baseDmg;
    if (charms.some((c) => c.id === "shamanStone")) {
        if (baseDmg === 35) {
            dmg = 53;
        } else {
            dmg = 88;
        }
    }
    return dmg;
}

export function calculateShriekDamage(baseDmg, charms) {
    let dmg = baseDmg;
    if (charms.some((c) => c.id === "shamanStone")) {
        if (baseDmg === 39) {
            //weird rounding issue - it's 3 waves of 13, so 39 total becomes
            //60 even with shaman stone
            dmg = 60;
        } else {
            dmg = 120;
        }
    }
    return dmg;
}
