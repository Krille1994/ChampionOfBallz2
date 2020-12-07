// Alle variabler som kan bli endret vil ligge i en liste med mange objekter.
// Dette er for å kunne lagre fremgang og hente det når man starter spillet igjen
// etter hvert vil den bli omgjort til en JSON fil for å spare plass.


const saveProgress = [
    // alle playerstats
    {
        playerStats:
            { health: 100, damage: 20, level: 2 }
    },
    // alle items som player har skaffet seg
    {
        inventory: [
            { inventorySlot1: 'rusty sword' },
            { inventorySlot2: 'rusty sword' },
            { inventorySlot3: 'rusty sword' },
            { inventorySlot4: 'rusty sword' },
            { inventorySlot5: 'rusty sword' },
        ]
    },

    {
        equipment: [
            { rightHand: 'Berthas Axe' },
            { leftHand: 'Berthas Axe' },
            { rightRing: 'Ring of Vitality' },
            { leftRing: 'Berserkers Ring' },
            { rightTrinket: 'Carrot on a Stick' },
            { leftTrinket: 'Vial of Troll Blood' },
            { head: 'Golden Helmet of Krogon' },
            { neck: 'Teeth on a Rope' },
            { back: 'Hide of the Dragon' },
            { chest: 'Chest of the Elven King' },
            { hands: 'Gloves of Thanos' },
            { belt: 'Belt of the Arena Champion' },
            { legs: '' },
            { feet: 'Crocs' },
        ]
    },

    {
        championsBeaten: [
            { championsBeatenRegion1: [0, 1] },
            { championsBeatenRegion2: [0, 1] },
        ]
    },

    {
        storeItems: [
            { firstTownStock: { 'stone': 10, 'bomb': 1, 'sword_of_the_legends': 'Unique' } },
            { secondTownStock: { 'stone': 10, 'bomb': 1, 'sword_of_the_legends': 'Unique' } },
        ]
    },

    // make a variable to save the site you are on

];
