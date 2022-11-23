//only charm that affects spell dmg is shaman stone

export function calculateFireballDamage(baseDmg, charms) {
    let dmg = baseDmg;
    if (charms.some((c) => c.id === "shamanStone")) {
        dmg = Math.round(baseDmg * 1.33);
    }
    return dmg;
}

export function calculateDiveDamage(baseDmg, charms, hasDescendingDark) {
    //+51% for desolate dive
    //+47% for descending dark
    //! seems to actually be ~1.354%
    let dmg = baseDmg;
    if (charms.some((c) => c.id === "shamanStone")) {
        dmg = hasDescendingDark ? 88 : 53;
    }
    return dmg;
}

export function calculateShriekDamage(baseDmg, charms, hasAbyssShriek) {
    let dmg = baseDmg;
    if (charms.some((c) => c.id === "shamanStone")) {
        dmg = hasAbyssShriek ? 120 : 60;
    }
    return dmg;
}
