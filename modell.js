
let username = '';
let chosenRace = 'Human';
let chosenClass = 'Warrior';
let mainAttribute = '';
let characterAvatar = '<img src="images/balder.png" style="height: 100%; width: 100%;">';
const startRaceAndClassStats = [
    { characterRace: 'Human', characterClass: 'Warrior', mainAtr: 'strength', hp: 110, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Human', characterClass: 'Rogue', mainAtr: 'agility', hp: 120, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Human', characterClass: 'Mage', mainAtr: 'intellect', hp: 130, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Human', characterClass: 'Ranger', mainAtr: 'agility', hp: 140, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },

    { characterRace: 'Dwarf', characterClass: 'Warrior', mainAtr: 'strength', hp: 210, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Dwarf', characterClass: 'Rogue', mainAtr: 'agility', hp: 220, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Dwarf', characterClass: 'Mage', mainAtr: 'intellect', hp: 230, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Dwarf', characterClass: 'Ranger', mainAtr: 'agility', hp: 240, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },

    { characterRace: 'Elf', characterClass: 'Warrior', mainAtr: 'strength', hp: 310, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Elf', characterClass: 'Rogue', mainAtr: 'agility', hp: 320, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Elf', characterClass: 'Mage', mainAtr: 'intellect', hp: 330, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Elf', characterClass: 'Ranger', mainAtr: 'agility', hp: 340, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },

    { characterRace: 'Ogre', characterClass: 'Warrior', mainAtr: 'strength', hp: 410, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Ogre', characterClass: 'Rogue', mainAtr: 'agility', hp: 420, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Ogre', characterClass: 'Mage', mainAtr: 'intellect', hp: 430, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
    { characterRace: 'Ogre', characterClass: 'Ranger', mainAtr: 'agility', hp: 440, damage: 7, crit: 1, dodge: 2, strength: 1, agility: 1, intellect: 1 },
]

// Player Stats
const playerStats =
    { level: 1, xp: 0, gold: 0, hp: 0, damage: 0, crit: 0, dodge: 0, strength: 0, agility: 0, intellect: 0 };

// Battle

let playerBattleHp = 0;
let playerBattleHpMax = 0;
let playerHpBar = 100;

let npcBattleHp = 0;
let npcBattleHpMax = 0;
let npcHpBar = 100;

let npcDamage = 0;

let opponent = 0;

// Variables for different pages
let rememberSite;
let startMenu = '';
let optionsMenu = '';
let customizeNewCharacter = '';
let region1 = '';
let shop1 = '';
let arena1 = '';
let explore1 = '';
let blacksmith = '';


// Inventory variables
let isInventoryOpen = false;