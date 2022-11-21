export const masterCharmList = [
    {
        id: "waywardCompass",
        name: "Wayward Compass",
        pngName: "Wayward_Compass",
        notches: 1,
        flavorText: "Whispers its location to the bearer whenever a map is open, allowing wanderers to pinpoint their current location.",
        effectText: "Shows Knight's location on map",
    },
    {
        id: "gatheringSwarm",
        name: "Gathering Swarm",
        pngName: "Gathering_Swarm",
        notches: 1,
        flavorText: "A swarm will follow the bearer and gather up any loose Geo. Useful for those who can't bear to leave anything behind, no matter how insignificant.",
        effectText: "Collects dropped Geo",
    },
    {
        id: "stalwartShell",
        name: "Stalwart Shell",
        pngName: "Stalwart_Shell",
        notches: 2,
        flavorText: "Builds resilience. When recovering from damage, the bearer will remain invulnerable for longer. Makes it easier to escape from dangerous situations.",
        effectText:
            "Increases invincibility duration after being hit by ~35% [Without any Charms, the invulnerability time is 1.3 seconds. With Stalwart Shell, it is 1.75 seconds.]. Reduces hit recoil (no input time) after being hit by 60% [Without any Charms, the recoil duration is 0.2 seconds. With Stalwart Shell, it is 0.08 seconds.]",
    },

    {
        id: "soulCatcher",
        name: "Soul Catcher",
        pngName: "Soul_Catcher",
        notches: 2,
        flavorText: "Used by shamans to draw more Soul from the world around them. Increases the amount of Soul gained when striking an enemy with the nail.",
        effectText: "Gain +3 additional SOUL with each hit for main Soul Vessel (base: 11) Gain +2 for reserve Soul Vessels (base: 6)",
    },
    {
        id: "shamanStone",
        name: "Shaman Stone",
        pngName: "Shaman_Stone",
        notches: 3,
        flavorText: "Said to contain the knowledge of past generations of shaman. Increases the power of spells, dealing more damage to foes.",
        effectText:
            "Increases Vengeful Spirit/Shade Soul damage by 33%. Increases Desolate Dive damage by 51% and Descending Dark damage by 47%. Increases Howling Wraiths/Abyss Shriek damage by 50%. Increases the size of Vengeful Spirit/Shade Soul. [The width of the projectile is increased by 30% and the height by 60%.]",
    },
    {
        id: "soulEater",
        name: "Soul Eater",
        pngName: "Soul_Eater",
        notches: 4,
        flavorText: "Forgotten shaman artifact, used to draw Soul from still-living creatures. Greatly increases the amount of Soul gained when striking an enemy with the nail.",
        effectText: "Gain +8 additional SOUL with each hit for main Soul Vessel (base: 11). Gain +6 for reserve Soul Vessels (base: 6)",
    },
    {
        id: "dashmaster",
        name: "Dashmaster",
        pngName: "Dashmaster",
        notches: 2,
        flavorText:
            "Bears the likeness of an eccentric bug known only as 'The Dashmaster'.The bearer will be able to dash more often as well as dash downwards. Perfect for those who want to move around as quickly as possible.",
        effectText:
            "Reduces the Mothwing Cloak cooldown by 33%[Without any Charms, the Mothwing Cloak has a cooldown of 0.6 seconds. With Dashmaster, it has a cooldown of 0.4 seconds.]. Allows dashing downwards by holding DOWN",
    },
    {
        id: "sprintmaster",
        name: "Sprintmaster",
        pngName: "Sprintmaster",
        notches: 1,
        flavorText: "Bears the likeness of a strange bug known only as 'The Sprintmaster'. Increases the running speed of the bearer, allowing them to avoid danger or overtake rivals.",
        effectText: "Increases run speed by ~20%. [Without any Charms, the Knight's speed is 8.3. With Sprintmaster, it is 10. With Sprintmaster and Dashmaster, it is 11.5.]",
    },
    {
        id: "grubsong",
        name: "Grubsong",
        pngName: "Grubsong",
        notches: 1,
        flavorText: "Contains the gratitude of freed grubs. Gain Soul when taking damage.",
        effectText: "Gain 15 SOUL when taking damage",
    },
    {
        id: "grubberflysElegy",
        name: "Grubberfly's Elegy",
        pngName: "Grubberflys_Elegy",
        notches: 3,
        flavorText:
            "Contains the gratitude of grubs who will move to the next stage of their lives. Imbues weapons with a holy strength.When the bearer is at full health, they will fire beams of white-hot energy from their nail.",
        effectText:
            "When at full Masks, Nail attacks fire a projectile dealing 50% Nail damage per hit. [The damage is rounded to the nearest integer, or nearest even integer if halfway between two. This results in 2/4/6/8/10 damage at Nail upgrades 0/1/2/3/4.]",
    },
    // {
    //     id: "fragileHeart",
    //     name: "Fragile Heart",
    //     pngName: "Fragile_Heart",
    //     notches: 2,
    //     flavorText: "Increases the health of the bearer, allowing them to take more damage. This charm is fragile, and will break if its bearer is killed.",
    //     effectText: "Adds two Masks of health. Breaks upon death. Can be given to Divine to turn it Unbreakable",
    //     maskInc: 2,
    // },
    {
        id: "unbreakableHeart",
        name: "Unbreakable Heart",
        pngName: "Unbreakable_Heart",
        notches: 2,
        flavorText: "Increases the health of the bearer, allowing them to take more damage. This charm is unbreakable.",
        effectText: "Adds two Masks of health",
    },
    // {
    //     id: "fragileGreed",
    //     name: "Fragile Greed",
    //     pngName: "Fragile_Greed",
    //     notches: 2,
    //     flavorText: "Causes the bearer to find more Geo when defeating enemies. This charm is fragile, and will break if its bearer is killed.",
    //     effectText: "Enemies drop 20-100% more Geo[The amount of each Geo type (1, 5, or 25 Geo) is increased by 20%, rounded up.] Breaks upon death. Can be given to Divine to make it Unbreakable",
    // },
    {
        id: "unbreakableGreed",
        name: "Unbreakable Greed",
        pngName: "Unbreakable_Greed",
        notches: 2,
        flavorText: "Causes the bearer to find more Geo when defeating enemies. This charm is unbreakable.",
        effectText: "Enemies drop 20-100% more Geo. The amount of each Geo type (1, 5, or 25 Geo) is increased by 20%, rounded up",
    },
    // {
    //     id: "fragileStrength",
    //     name: "Fragile Strength",
    //     pngName: "Fragile_Strength",
    //     notches: 3,
    //     flavorText: "Strengthens the bearer, increasing the damage they deal to enemies with their nail. This charm is fragile, and will break if its bearer is killed.",
    //     effectText:
    //         "Increases Nail damage by 50%[The damage is rounded to the nearest integer, or to the nearest even integer if halfway between two. This results in 8/14/20/26/32 damage at Nail upgrades 0/1/2/3/4.] Breaks upon death. Can be given to Divine to turn it Unbreakable",
    //     nailDmg: 0.5,
    // },
    {
        id: "unbreakableStrength",
        name: "Unbreakable Strength",
        pngName: "Unbreakable_Strength",
        notches: 3,
        flavorText: "Strengthens the bearer, increasing the damage they deal to enemies with their nail. This charm is unbreakable.",
        effectText:
            "Increases Nail damage by 50%[The damage is rounded to the nearest integer, or to the nearest even integer if halfway between two. This results in 8/14/20/26/32 damage at Nail upgrades 0/1/2/3/4.]",
    },
    {
        id: "spellTwister",
        name: "Spell Twister",
        pngName: "Spell_Twister",
        notches: 2,
        flavorText: "Reflecting the desires of the Soul Sanctum for mastery over Soul, it improves the bearer's ability to cast spells.Reduces the Soul cost of casting spells.",
        effectText: "Reduces SOUL cost of Spells to 24 from 33.",
    },
    {
        id: "steadyBody",
        name: "Steady Body",
        pngName: "Steady_Body",
        notches: 1,
        flavorText: "Keeps its bearer from recoiling backwards when they strike an enemy with a nail.Allows one to stay steady and keep attacking.",
        effectText: "Removes all knockback/recoil from hitting enemies",
    },
    {
        id: "heavyBlow",
        name: "Heavy Blow",
        pngName: "Heavy_Blow",
        notches: 2,
        flavorText: "Formed from the nails of fallen warriors.Increases the force of the bearer's nail, causing enemies to recoil further when hit.",
        effectText:
            "Increases Nail attack knockback by 75% [Does not affect the knockback of Nail attacks made while wall-sliding.] Increases Great Slash knockback by 33%. Godmaster content Reduces number of hits needed to stagger a boss by 1",
    },
    {
        id: "quickSlash",
        name: "Quick Slash",
        pngName: "Quick_Slash",
        notches: 3,
        flavorText: "Born from imperfect, discarded nails that have fused together. The nails still long to be wielded.Allows the bearer to slash much more rapidly with their nail.",
        effectText:
            "Decreases Nail attack duration (How long the hitbox is active) by 20% [Without any Charms, attack duration is 0.35 seconds. With Quick Slash, it is 0.28 seconds.]. Decreases Nail attack cooldown (Total time between attacks) by ~39%. [Without any Charms, attack cooldown is 0.41 seconds. With Quick Slash, it is 0.25 seconds.]",
    },
    {
        id: "longnail",
        name: "Longnail",
        pngName: "Longnail",
        notches: 2,
        flavorText: "Increases the range of the bearer's nail, allowing them to strike foes from further away.",
        effectText: "Increases Nail range by 15% [Does not affect the range of Nail attacks made while wall-sliding.]",
    },
    {
        id: "markOfPride",
        name: "Mark of Pride",
        pngName: "Mark_of_Pride",
        notches: 3,
        flavorText: "Freely given by the Mantis Tribe to those they respect.Greatly increases the range of the bearer's nail, allowing them to strike foes from further away.",
        effectText: "Increases Nail range by 25% [Does not affect the range of Nail attacks made while wall-sliding.]",
    },
    {
        id: "furyOfTheFallen",
        name: "Fury of the Fallen",
        pngName: "Fury_of_the_Fallen",
        notches: 2,
        flavorText: "Embodies the fury and heroism that comes upon those who are about to die. When close to death, the bearer's strength will increase.",
        effectText:
            "Increases Nail damage by 75% when at 1 Mask[The damage is rounded to the nearest integer, or nearest even integer if halfway between two. This results in 9/16/23/30/37 damage with Nail upgrades 0/1/2/3/4.]. This effect is also applied to Nail Arts",
    },
    {
        id: "thornsOfAgony",
        name: "Thorns of Agony",
        pngName: "Thorns_of_Agony",
        notches: 1,
        flavorText: "Senses the pain of its bearer and lashes out at the world around them. When taking damage, sprout thorny vines that damage nearby foes.",
        effectText: "Damages nearby enemies for the base Nail damage when hit",
    },
    {
        id: "baldurShell",
        name: "Baldur Shell",
        pngName: "Baldur_Shell",
        notches: 2,
        flavorText: "Protects its bearer with a hard shell while focusing Soul.The shell is not indestructible and will shatter if it absorbs too much damage.",
        effectText: "Block up to 4 hits while using Focus.",
    },
    {
        id: "flukenest",
        name: "Flukenest",
        pngName: "Flukenest",
        notches: 3,
        flavorText: "Living charm born in the gut of a Flukemarm.Transforms the Vengeful Spirit spell into a horde of volatile baby flukes.",
        effectText:
            "Replaces Vengeful Spirit with 9 flukes, and Shade Soul with 16 flukes. Each fluke does 4 damage, resulting in a total damage of 36 with Vengeful Spirit and 64 with Shade Soul. Unlocks a new interaction with Godmaster content Fluke Hermit",
    },
    {
        id: "defendersCrest",
        name: "Defender's Crest",
        pngName: "Defenders_Crest",
        notches: 1,
        flavorText: "Unique charm bestowed by the King of Hallownest to his most loyal knight. Scratched and dirty, but still cared for.Causes the bearer to emit a heroic odour.",
        effectText:
            "Spawns toxic clouds that deal ~3 damage and last 1.1 seconds.[Clouds spawned by Defender's Crest deal damage every 0.3 seconds. The Spore Shroom synergy deals damage every 0.15 seconds, the Glowing Womb synergy every 0.2 seconds, the Flukenest synergy every 0.1 seconds, and the Flukenest and Shaman Stone synergy every 0.075 seconds.] A new one spawns at the Knight's location every 0.75 seconds. Unlocks new interactions with certain NPCs",
    },
    {
        id: "glowingWomb",
        name: "Glowing Womb",
        pngName: "Glowing_Womb",
        notches: 2,
        flavorText: "Drains the Soul of its bearer and uses it to birth hatchlings.The hatchlings have no desire to eat or live, and will sacrifice themselves to protect their parent.",
        effectText: "Spawns Hatchlings for 8 SOUL each, that deal 9 damage to enemies on contact. A Hatchling spawns every 4 seconds with a maximum of 4 Hatchlings at a time",
    },
    {
        id: "quickFocus",
        name: "Quick Focus",
        pngName: "Quick_Focus",
        notches: 3,
        flavorText: "A charm containing a crystal lens.Increases the speed of focusing Soul, allowing the bearer to heal damage faster.",
        effectText:
            "Focus ~33% faster[Without any Charms, and ignoring the 0.25 second startup time, it takes 0.891 seconds to Focus. With Quick Focus, it takes 0.594 seconds. With both Deep Focus and Quick Focus, it takes 0.9801 seconds.]",
    },
    {
        id: "deepFocus",
        name: "Deep Focus",
        pngName: "Deep_Focus",
        notches: 4,
        flavorText: "Naturally formed within a crystal over a long period. Draws in Soul from the surrounding air.The bearer will focus Soul at a slower rate, but the healing effect will double.",
        effectText:
            "Focus heals 2 Masks of Health while increasing Focus time by 65%[Without any Charms, and ignoring the 0.25 second startup time, it takes 0.891 seconds to Focus. With Deep Focus, it takes 1.47015 seconds. With both Deep Focus and Quick Focus, it takes 0.9801 seconds.]",
    },
    {
        id: "lifebloodHeart",
        name: "Lifeblood Heart",
        pngName: "Lifeblood_Heart",
        notches: 2,
        flavorText:
            "Contains a living core that seeps precious lifeblood.When resting, the bearer will gain a coating of lifeblood that protects from a modest amount of damage. (Sitting at a bench grants 2 temporary bonus Masks.)",
        effectText: "Adds 2 Lifeblood Masks when resting.",
    },
    {
        id: "lifebloodCore",
        name: "Lifeblood Core",
        pngName: "Lifeblood_Core",
        notches: 3,
        flavorText:
            "Contains a living core that bleeds precious lifeblood.When resting, the bearer will gain a coating of lifeblood that protects from a large amount of damage. (Sitting at a bench grants 4 temporary bonus Masks.)",
        effectText: "Adds 4 Lifeblood Masks when resting.",
    },
    {
        id: "jonisBlessing",
        name: "Joni's Blessing",
        pngName: "Jonis_Blessing",
        notches: 4,
        flavorText:
            "Blessed by Joni, the kindly heretic. Transfigures vital fluids into blue lifeblood.The bearer will have a healthier shell and can take more damage, but they will not be able to heal themselves by focusing Soul.",
        effectText:
            "Increase Masks by 40% (rounded up), all Masks become Lifeblood. Causes Lifeseeds to flock to the Knight instead of running away. ***The 40% increase in Masks granted by Joni's Blessing only takes into account the base Masks and the two Masks added by Fragile/Grimm Troupe content Unbreakable Heart. Masks added by Lifeblood Heart and Lifeblood Core are not included in the calculation.***",
    },
    {
        id: "hiveblood",
        name: "Hiveblood",
        pngName: "Hiveblood",
        notches: 4,
        flavorText: "Golden nugget of the Hive's precious hardened nectar.Heals the bearer's wounds over time, allowing them to regain health without focusing Soul.",
        effectText: "Passively heals the last unit of health lost after 10 seconds without taking further damage. Makes the enemies inside the Hive passive",
    },
    {
        id: "sporeShroom",
        name: "Spore Shroom",
        pngName: "Spore_Shroom",
        notches: 1,
        flavorText:
            "Composed of living fungal matter. Scatters spores when exposed to Soul.When focusing Soul, emit a spore cloud that slowly damages enemies. (Secondary effect: grants the bearer the ability to speak with Mister Mushroom, read fungal Lore Tablets)",
        effectText:
            "Focus releases a cloud of spores dealing ~26 damage over 4.1 seconds.[Without any Charms, Spore Shroom deals damage every 0.15 seconds. With Defender's Crest, it deals 2 damage every 0.2 seconds.] It cannot be used again until either 4.25 seconds pass or the Knight takes damage. Able to understand the dialogue of Mister Mushroom. Able to read certain Lore Tablets found in Fungal Wastes and one in Kingdom's Edge",
    },
    {
        id: "sharpShadow",
        name: "Sharp Shadow",
        pngName: "Sharp_Shadow",
        notches: 2,
        flavorText: "Contains a forbidden spell that transforms shadows into deadly weapons.When using Shadow Dash, the bearer's body will sharpen and damage enemies.",
        effectText:
            "Damages enemies for 1 x Nail damage when dashing through them. When using Shade Cloak, increases shadow dash length by 40% (does not affect the regular Mothwing Cloak dashes)[Without any Charms, dash length is 5.6. With Sharp Shadow, it is 7.84.]",
    },
    {
        id: "shapeOfUnn",
        name: "Shape of Unn",
        pngName: "Shape_of_Unn",
        notches: 2,
        flavorText: "Reveals the form of Unn within the bearer.While focusing Soul, the bearer will take on a new shape and can move freely to avoid enemies.",
        effectText: "Allows moving while focusing, and reduces hitbox height.",
    },
    {
        id: "nailmastersGlory",
        name: "Nailmaster's Glory",
        pngName: "Nailmasters_Glory",
        notches: 1,
        flavorText: "Contains the passion, skill and regrets of a Nailmaster.Increases the bearer's mastery of Nail Arts, allowing them to focus their power faster and unleash arts sooner.",
        effectText:
            "Reduces the charge time of Nail Arts by ~44%[Without any Charms, Nail Art charge time is 1.35 seconds. With Nailmaster's Glory, it is 0.75 seconds.] Unlocks new interactions with certain NPCs",
    },
    {
        id: "weaversong",
        name: "Weaversong",
        pngName: "Weaversong",
        notches: 2,
        flavorText:
            "Silken charm containing a song of farewell, left by the Weavers who departed Hallownest for their old home.Summons weaverlings to give the lonely bearer some companionship and protection.",
        effectText: "Summons 3 small Weaverlings that attack enemies for 3 damage per hit. Unlocks new interactions with Midwife",
    },
    {
        id: "dreamWielder",
        name: "Dream Wielder",
        pngName: "Dream_Wielder",
        notches: 1,
        flavorText: "Transient charm created for those who wield the Dream Nail and collect Essence.Allows the bearer to charge the Dream Nail faster and collect more Soul when striking foes.",
        effectText:
            "Gain +33 additional SOUL when hitting enemies with the Dream Nail (33 to 66). Reduces the time needed to attack with the Dream Nail by ~37.5%[Without any Charms, using the Dream Nail takes ~1.75 seconds. With Dream Wielder, it takes ~1.1 seconds.] Hidden Dreams content Increases the likelihood of receiving Essence when killing enemies by 50%",
    },
    {
        id: "dreamshield",
        name: "Dreamshield",
        pngName: "Dreamshield",
        notches: 3,
        flavorText: "Defensive charm once wielded by a tribe that could shape dreams. Conjures a shield that follows the bearer and attempts to protect them.",
        effectText: "Conjures a shield that slowly rotates around the Knight's position, blocks certain projectiles, and deals 1x Nail damage when colliding with an enemy",
    },
    // {
    //     id: "grimmchild",
    //     name: "Grimmchild",
    //     pngName: "Grimmchild",
    //     notches: 2,
    //     flavorText:
    //         "Worn by those who take part in the Grimm Troupe's RitualThe bearer must seek the Grimmkin and collect their flames. Uncollected flames will appear on the bearer's map. (Summons a flying creature which will deal damage to enemies. Damage dealt scales with number of flames collected.)",
    //     effectText: "Summons a flying companion that deals 11 damage per shot",
    // },
    // {
    //     id: "carefreeMelody",
    //     name: "Carefree Melody",
    //     pngName: "Carefree_Melody",
    //     notches: 3,
    //     flavorText: "Token commemorating the start of a friendship.Contains a song of protections that may defend the bearer from damage.",
    //     effectText: "Has a chance to block incoming damage. [The average block chance is ~22.46%.] ***https://hollowknight.fandom.com/wiki/Carefree_Melody#Probability",
    // },
    // {
    //     id: "voidHeart",
    //     name: "Void Heart",
    //     pngName: "Void_Heart",
    //     notches: 0,
    //     flavorText:
    //         "An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will.This charm is a part of its bearer and can not be unequipped. (Secondary Effect: Grants access to multiple endings, locks out all other endings. Removes hostility from some enemy types.)",
    //     effectText:
    //         "Unlocks 4 endings. Prevents the non-Void Heart ending for the save file. Renders the Siblings, Void Tendrils and Shade passive. Allows access to the Radiance. Allows access to the Godmaster content Pantheon of Hallownest. Unlocks new interactions with certain NPCs",
    // },
    // {
    //     id: "kingsoul",
    //     name: "Kingsoul",
    //     pngName: "Kingsoul",
    //     notches: 5,
    //     flavorText:
    //         "Holy charm symbolising a union between higher beings.The bearer will slowly absorb the limitless Soul contained within. Opens the way to a birthplace. (Secondary Effect: Grants access to the Birthplace in the southern Abyss.)",
    //     effectText: "Slowly generates 4 SOUL every 2 seconds. Opens a secret area within the Abyss. Unlocks a new interaction with the White Lady",
    // },
];

export const carefreeMelody = {
    id: "carefreeMelody",
    name: "Carefree Melody",
    pngName: "Carefree_Melody",
    notches: 3,
    flavorText: "Token commemorating the start of a friendship.Contains a song of protections that may defend the bearer from damage.",
    effectText: "Has a chance to block incoming damage. [The average block chance is ~22.46%.] ***https://hollowknight.fandom.com/wiki/Carefree_Melody#Probability",
};

export const grimmchild = {
    id: "grimmchild",
    name: "Grimmchild",
    pngName: "Grimmchild",
    notches: 2,
    flavorText:
        "Worn by those who take part in the Grimm Troupe's RitualThe bearer must seek the Grimmkin and collect their flames. Uncollected flames will appear on the bearer's map. (Summons a flying creature which will deal damage to enemies. Damage dealt scales with number of flames collected.)",
    effectText: "Summons a flying companion that deals 11 damage per shot",
};

export const voidHeart = {
    id: "voidHeart",
    name: "Void Heart",
    pngName: "Void_Heart",
    notches: 0,
    flavorText:
        "An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will.This charm is a part of its bearer and can not be unequipped. (Secondary Effect: Grants access to multiple endings, locks out all other endings. Removes hostility from some enemy types.)",
    effectText:
        "Unlocks 4 endings. Prevents the non-Void Heart ending for the save file. Renders the Siblings, Void Tendrils and Shade passive. Allows access to the Radiance. Allows access to the Godmaster content Pantheon of Hallownest. Unlocks new interactions with certain NPCs",
};
export const kingsoul = {
    id: "kingsoul",
    name: "Kingsoul",
    pngName: "Kingsoul",
    notches: 5,
    flavorText:
        "Holy charm symbolising a union between higher beings.The bearer will slowly absorb the limitless Soul contained within. Opens the way to a birthplace. (Secondary Effect: Grants access to the Birthplace in the southern Abyss.)",
    effectText: "Slowly generates 4 SOUL every 2 seconds. Opens a secret area within the Abyss. Unlocks a new interaction with the White Lady",
};
