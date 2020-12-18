let inventoryOpen = false;
let inventoryCanOpen = false;
const inventoryOnPerson = [
    { item: '', category: 'Head' }, { item: '', category: 'Neck' },
    { item: '', category: 'Shoul' }, { item: '', category: 'Back' },
    { item: '', category: 'Chest' }, { item: '', category: 'Wrist' },
    { item: '', category: 'Hand' }, { item: '', category: 'Waist' },
    { item: '', category: 'Legs' }, { item: '', category: 'Feet' },
    { item: '', category: 'Finger' }, { item: '', category: 'Finger2' },
    { item: '', category: 'Trinket' }, { item: '', category: 'Trinket2' },
];
const inventoryItems = [
    { item: '<img id="Armor_Head_Common_LthrHelm" src="itemsImages/Armor_Head_Common_LthrHelm.png" style="width:100%; height:100%;" draggable="true" ondragstart="dragBlack(event)">', locked: false },
    { item: '<img id="Armor_Chest_Common_LthrChst" src="itemsImages/Armor_Chest_Common_LthrChst.png" style="width:100%; height:100%;" draggable="true" ondragstart="dragBlack(event)">', locked: false },
    { item: '<img id="Armor_Chest_Common_LthrChst" src="itemsImages/Armor_Chest_Common_LthrChst.png" style="width:100%; height:100%;" draggable="true" ondragstart="dragBlack(event)">', locked: false },
    { item: '<img id="Armor_Chest_Common_LthrChst" src="itemsImages/Armor_Chest_Common_LthrChst.png" style="width:100%; height:100%;" draggable="true" ondragstart="dragBlack(event)">', locked: false },
    { item: '', locked: false },
    { item: '', locked: false },
    { item: '', locked: false },
    { item: '', locked: false },

    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },

    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },

    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },

    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },

    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },

    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
    { item: '', locked: true },
];

let inventoryButton1 = 'disabled';
let inventoryButton2 = 'disabled';
let inventoryButton3 = 'disabled';
let inventoryButton4 = 'disabled';
function displayInventory() {
    if (inventoryOpen === false) {
        inventoryOpen = true;

        document.getElementById('inventoryDiv').outerHTML = '<div id="inventoryDiv" class="displayInventory"></div>';
        let html = '';




        html += `<div id="inventoryStatsArea">
        <div id="inventoryStatsName">${username}<br>${chosenRace} ${chosenClass}<br>LvL ${playerStats.level}</div>
        <div id="inventoryStatsPack">
            <div id="inventoryOnPersonLeftItems">`;
        for (let i = 0; i < inventoryOnPerson.length / 2; i++) {
            html += `<div class="inventoryOnPersonItem">${inventoryOnPersonHelper(i)}</div>`;
        }

        html += `</div>
            <div>
                <div id="characterImageDiv"><img id="inventoryCharacterDisplay" src="images/balder.png"></div>
                <div id="inventoryPlayerStats">
                    <div id="topInventoryPlayerStats">
                        <div>1a</div>
                        <div>2a</div>
                        <div>3a</div>
                    </div>
                    <div id="bottomInventoryPlayerStats">
                        <div>1b</div>
                        <div>2b</div>
                        <div>3b</div>
                    </div>
                </div>
            </div>

            <div id="inventoryOnPersonRightItems">`;
        for (let i = inventoryOnPerson.length / 2; i < inventoryOnPerson.length; i++) {
            html += `<div class="inventoryOnPersonItem">${inventoryOnPersonHelper(i)}</div>`;
        }
        html += `</div><div></div>
                    `;

        html += `</div></div>
        
        
        
        
        
        
        <div id="inventoryItemsArea">`;
        for (let i = 0; i < inventoryItems.length; i++) {
            if (!inventoryItems[i].locked) {
                html += `<div class="inventoryItems itemsUnlocked">${inventoryHelper(i)}</div>`;
            }
            else {
                html += `<div class="inventoryItems"></div>`;
            }
        }

        html += `<div id="inventoryButtons">
                <button ${inventoryButton1}>Use</button>
                <button ${inventoryButton2} onclick="equipFromInventory()">Equip</button>
                <button ${inventoryButton3} onclick="unequipFromInventory()">Unequip</button>
                <button ${inventoryButton4} onclick="removeFromInventory()">Drop</button>
                </div>
                </div>`;
        document.getElementById('inventoryDiv').innerHTML = html;
    }
    else {
        inventoryOpen = false;
        document.getElementById('inventoryDiv').outerHTML = '<div id="inventoryDiv"></div>';
    }
}
function inventoryHelper(i) {
    if (inventoryItems[i].item) {
        return inventoryItems[i].item.substring(0, inventoryItems[i].item.length -1) + ' onclick="chooseInventoryItem(this.id, '+[i]+', 0)"' + inventoryItems[i].item.substring(inventoryItems[i].item.length -1, inventoryItems[i].item.length);
    }
    else {return '';}
}
function inventoryOnPersonHelper(i) {
    if (inventoryOnPerson[i].item) {
        return inventoryOnPerson[i].item.substring(0, inventoryOnPerson[i].item.length -1) + ' onclick="chooseInventoryItem(this.id, '+[i]+', 1)"' + inventoryOnPerson[i].item.substring(inventoryOnPerson[i].item.length -1, inventoryOnPerson[i].item.length);
    }
    else {return '';}
}

window.onkeydown = function (e) {
    if (inventoryCanOpen) {
        if (e.keyCode === 73) {
            displayInventory();
        }
    }
}
let chosenInventoryItem;
function chooseInventoryItem(imgId, invIndex, onOff) {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].ID === imgId) {
            chosenInventoryItem = [i, invIndex, onOff];
            whichInventoryButtonsActive(i, onOff);
        }
    }
}
function whichInventoryButtonsActive(allIndex, onOff) {
    if (allItems[allIndex].Type == 'Consumable') {
        inventoryButton1 = '';
    }
    else if (allItems[allIndex].Type == 'Armor' || allItems[allIndex].Type == 'Weapon') {
        if (onOff == 0) {
            inventoryButton2 = ''; 
        }
        else if (onOff == 1) {
            inventoryButton3 = ''; 
        }
    }
    inventoryButton4 = '';
    inventoryOpen = false;
    displayInventory();
}
function deactivateInventoryButtons() {
    inventoryButton1 = 'disabled';
    inventoryButton2 = 'disabled';
    inventoryButton3 = 'disabled';
    inventoryButton4 = 'disabled';
}
function removeFromInventory() {
    if (chosenInventoryItem[2] == 1) {
        inventoryOnPerson[chosenInventoryItem[1]].item = '';
    }
    else {
        inventoryItems[chosenInventoryItem[1]].item = '';
    }
    inventoryOpen = false;
    deactivateInventoryButtons();
    displayInventory();
}
function equipFromInventory() {
    for (let i = 0; i < inventoryOnPerson.length; i++) {
        if (allItems[chosenInventoryItem[0]].Category == inventoryOnPerson[i].category) {
            let tempItem = inventoryOnPerson[i].item;
            inventoryOnPerson[i].item = allItems[chosenInventoryItem[0]].Disp_Art;
            inventoryItems[chosenInventoryItem[1]].item = tempItem;
            deactivateInventoryButtons();
            inventoryOpen = false;
            displayInventory();
            break;
        }
    }
}
function unequipFromInventory() {
    for (let i = 0; i < inventoryItems.length; i++) {
        if (inventoryItems[i].item == '' && inventoryItems[i].locked == false) {
            inventoryItems[i].item = allItems[chosenInventoryItem[0]].Disp_Art;
            inventoryOnPerson[chosenInventoryItem[1]].item = '';
            deactivateInventoryButtons();
            inventoryOpen = false;
            displayInventory();
            break;
        }
    }
}