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
        inventoryCanOpen = true;
        setCharacter();
        shop1Restock();
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
            mainAttribute = startRaceAndClassStats[i].mainAtr;
        }
    }
}

// drag and drop

function allowDropBlack(ev) {
    ev.preventDefault();
}
  
function dragBlack(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function dropBlack(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    getIndexInAllItems(document.getElementById(data).id, ev.target.id);
}
function getIndexInAllItemsByDisp_Name(name) {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].Disp_Name == name) {
            return allItems[i].Disp_Art;
        }
    }
}

// blacksmith functions
function getIndexInAllItems(item, target) {
    let index;
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].ID == item) {
            index = i;
        }
    }
    if (target == 'blacksmithingTable') {
        showBlacksmithCost(index, target);
    }
}
function showBlacksmithCost(index, target) {
    let upgradeCost = document.getElementById('upgradeCost');
    upgradeCost.innerHTML = `<div>${allItems[index].Price / 4} Gold</div>`;
    for (let i = 0; i < allItems[index].Upgrade.length; i++) {
        upgradeCost.innerHTML += `<div style="width: 4vw; height: 6vh;">${getIndexInAllItemsByDisp_Name(allItems[index].Upgrade[i])}</div><div>${allItems[index].Upgrade_Amount[i]}</div>`;
    }
    
}

// needed to change img id
// let y = allItems[index].Disp_Art.indexOf(' ',7);
// let x = allItems[index].Disp_Art.substring(0, y-1) + '_1' + allItems[index].Disp_Art.substring(y-1, allItems[index].Disp_Art.length);
//     console.log(x);