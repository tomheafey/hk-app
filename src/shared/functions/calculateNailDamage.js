export default function calculateNailDamage(baseDmg, charms) {
    //only charm that affects always is frag/ub strength
    //incr by 50%
    //rounded to nearest integer
    //  or nearest even integer if halfway
    let dmg = baseDmg;
    if (charms.some((c) => c.id === "unbreakableStrength" || c.id === "fragileStrength")) {
        dmg = 2 * Math.round((dmg * 1.5) / 2);
    }

    return dmg;
}
