const allItems = [
    {
        ID: 'Armor_Helmet_Legendary_HOTG',
        Disp_Name: 'Helmet of the Gods',
        Disp_Desc: 'Stories tell that the helmet once belonged to a powerfull godslayer',
        Disp_Art: "URL: Armor_Helmet_Legendary_HOTG.png",
        Type: 'Armor',
        Category: 'Helmet',
        Rarity: 'Legendary',
        Price: 1000,

        // Attributes
        Strenght: 100,
        Agility: 25,
        Intellect: 50,

        // Stats
        Damage: 0,
        PhysicalArmor: 50,
        MagicArmor: 25,
        HP: 250,
        HPR: 5,
        MP: 500,
        MPR: 10,
        TurnSpeed: 2,
    },

    {
        ID: 'Armor_Helmet_Common_BrzHelm',
        Disp_Name: 'Bronze Helmet',
        Disp_Desc: 'A simple helmet of bronze.',
        Disp_Art: "URL: Armor_Helmet_Common_BrzHelm.png",
        Type: 'Armor',
        Category: 'Helmet',
        Rarity: 'Common',
        Price: 50,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 5,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Chest_Common_BrzChst',
        Disp_Name: 'Bronze Cuirass',
        Disp_Desc: 'A simple cuirass of bronze.',
        Disp_Art: "URL: Armor_Chest_Common_BrzChst.png",
        Type: 'Armor',
        Category: 'Chest',
        Rarity: 'Common',
        Price: 100,

        // Attributes
        Strenght: 1,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 1,
        MagicArmor: 0,
        HP: 10,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Chest_Common_BrzLegs',
        Disp_Name: 'Bronze Greaves',
        Disp_Desc: 'Simple greaves of bronze.',
        Disp_Art: "URL: Armor_Chest_Common_BrzChst.png",
        Type: 'Armor',
        Category: 'Chest',
        Rarity: 'Common',
        Price: 75,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 10,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Helmet_Common_LthrHelm',
        Disp_Name: 'Leather Cap',
        Disp_Desc: 'A simple cap of leather.',
        Disp_Art: "URL: Armor_Helmet_Common_LthrHelm.png",
        Type: 'Armor',
        Category: 'Helmet',
        Rarity: 'Common',
        Price: 50,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 1,
        MagicArmor: 0,
        HP: 2,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Chest_Common_LthrChst',
        Disp_Name: 'Leather Jerkin',
        Disp_Desc: 'A simple jerkin of leather.',
        Disp_Art: "URL: Armor_Chest_Common_BrzChst.png",
        Type: 'Armor',
        Category: 'Chest',
        Rarity: 'Common',
        Price: 100,

        // Attributes
        Strenght: 0,
        Agility: 1,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 1,
        MagicArmor: 0,
        HP: 5,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Chest_Common_LthrLegs',
        Disp_Name: 'Leather Pants',
        Disp_Desc: 'Simple pants of leather.',
        Disp_Art: "URL: Armor_Chest_Common_LthrLegs.png",
        Type: 'Armor',
        Category: 'Legs',
        Rarity: 'Common',
        Price: 75,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 1,
        MagicArmor: 0,
        HP: 5,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Helmet_Common_LinenHood',
        Disp_Name: 'Linen Hood',
        Disp_Desc: 'A simple hood of linen.',
        Disp_Art: "URL: Armor_Helmet_Common_LinenHood.png",
        Type: 'Armor',
        Category: 'Helmet',
        Rarity: 'Common',
        Price: 50,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 0,
        HPR: 0,
        MP: 5,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Chest_Common_LinenRobe',
        Disp_Name: 'Linen Robe',
        Disp_Desc: 'A simple robe of linen.',
        Disp_Art: "URL: Armor_Chest_Common_LinenRobe.png",
        Type: 'Armor',
        Category: 'Chest',
        Rarity: 'Common',
        Price: 100,

        // Attributes
        Strenght: 1,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 1,
        MagicArmor: 0,
        HP: 10,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Armor_Chest_Common_BrzLegs',
        Disp_Name: 'Bronze Greaves',
        Disp_Desc: 'Simple greaves of bronze.',
        Disp_Art: "URL: Armor_Chest_Common_BrzChst.png",
        Type: 'Armor',
        Category: 'Chest',
        Rarity: 'Common',
        Price: 75,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 10,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Cons_Potion_Common_Healing',
        Disp_Name: 'Healing Potion',
        Disp_Desc: 'A simple potion for simple problems',
        Disp_Art: "URL: Cons_Potion_Common_Healing.png",
        Type: 'Consumable',
        Category: 'Potion',
        Rarity: 'Common',
        Price: 9,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 50,
        HPR: 15,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Cons_Potion_Common_Mana',
        Disp_Name: 'Mana Potion',
        Disp_Desc: 'A simple potion for simple problems',
        Disp_Art: "URL: Cons_Potion_Common_Mana.png",
        Type: 'Consumable',
        Category: 'Potion',
        Rarity: 'Common',
        Price: 6,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 0,
        HPR: 0,
        MP: 50,
        MPR: 15,
        TurnSpeed: 0,
    },

    {
        ID: 'Cons_Potion_Uncommon_Restoration',
        Disp_Name: 'Restoration Potion',
        Disp_Desc: 'A concotion able to restore your body and spirit.',
        Disp_Art: "URL: Cons_Potion_Common_Mana.png",
        Type: 'Consumable',
        Category: 'Potion',
        Rarity: 'Common',
        Price: 6,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 25,
        HPR: 15,
        MP: 25,
        MPR: 15,
        TurnSpeed: 0,
    },

    {
        ID: 'Misc_Craft_Common_LinClth',
        Disp_Name: 'Linen Cloth',
        Disp_Desc: 'The simplest of cloths',
        Disp_Art: "URL: Misc_Craft_Common_LinClth.png",
        Type: 'Misc',
        Category: 'Craft',
        Rarity: 'Common',
        Price: 2,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 0,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },

    {
        ID: 'Misc_Junk_Common_BrkTth',
        Disp_Name: 'Broken Tooth',
        Disp_Desc: 'Someone might be missing a tooth',
        Disp_Art: "URL: Misc_Junk_Common_BrkTth.png",
        Type: 'Misc',
        Category: 'Junk',
        Rarity: 'Common',
        Price: 4,

        // Attributes
        Strenght: 0,
        Agility: 0,
        Intellect: 0,

        // Stats
        Damage: 0,
        PhysicalArmor: 0,
        MagicArmor: 0,
        HP: 0,
        HPR: 0,
        MP: 0,
        MPR: 0,
        TurnSpeed: 0,
    },
];