
let username = '';
let chosenRace = 'Human';
let chosenClass = 'Warrior';
let characterAvatar = '';
const startRaceAndClassStats = [
    {characterRace: 'Human', characterClass: 'Warrior', hp: 11,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Human', characterClass: 'Rogue', hp: 12,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Human', characterClass: 'Mage', hp: 13,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Human', characterClass: 'Ranger', hp: 14,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},

    {characterRace: 'Dwarf', characterClass: 'Warrior', hp: 21,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Dwarf', characterClass: 'Rogue', hp: 22,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Dwarf', characterClass: 'Mage', hp: 23,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Dwarf', characterClass: 'Ranger', hp: 24,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},

    {characterRace: 'Elf', characterClass: 'Warrior', hp: 31,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Elf', characterClass: 'Rogue', hp: 32,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Elf', characterClass: 'Mage', hp: 33,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Elf', characterClass: 'Ranger', hp: 34,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},

    {characterRace: 'Ogre', characterClass: 'Warrior', hp: 41,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Ogre', characterClass: 'Rogue', hp: 42,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Ogre', characterClass: 'Mage', hp: 43,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
    {characterRace: 'Ogre', characterClass: 'Ranger', hp: 44,damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1},
]

// Player Stats
const playerStats = 
    {level: 1, xp: 0, gold: 0, hp: 0, damage: 0, crit: 0, dodge: 0, strength: 0, agility: 0, intellect: 0};

// Variables for different pages
let rememberSite;
let startMenu = '';
let optionsMenu = '';
let customizeNewCharacter = '';
let region1 = '';


// Inventory variables
let isInventoryOpen = false;