function setUsername() {
    username = inputValue;
    show('customizeNewCharacter');
}
function setChosenRace(race) {
    chosenRace = race.innerHTML;
    setCharacter();
    show('customizeNewCharacter');
}
function setChosenClass(thisClass) {
    chosenClass = thisClass.innerHTML;
    setCharacter();
    show('customizeNewCharacter');
}
function startNewAdventure() {
    if (username) {
        setCharacter();
        show('region1');
    }
}

function setCharacter() {
    for (let i = 0; i < startRaceAndClassStats.length; i++) {
        if (startRaceAndClassStats[i].characterRace == chosenRace && startRaceAndClassStats[i].characterClass == chosenClass) {

            playerStats.hp = startRaceAndClassStats[i].hp;
            playerStats.damage = startRaceAndClassStats[i].damage;
            playerStats.crit = startRaceAndClassStats[i].crit;
            playerStats.dodge = startRaceAndClassStats[i].dodge;
            
            playerStats.strength = startRaceAndClassStats[i].strength;
            playerStats.agility = startRaceAndClassStats[i].agility;
            playerStats.intellect = startRaceAndClassStats[i].intellect;
        }
    }
}

