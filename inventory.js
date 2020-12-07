let inventoryOpen = false;
const inventoryOnPerson = [
    {item: 'head'},{item: 'neck'},
    {item: 'shoul'},{item: 'back'},
    {item: 'chest'},{item: 'wrist'},
    {item: 'hand'},{item: 'waist'},
    {item: 'legs'},{item: 'feet'},
    {item: 'finger'},{item: 'finger2'},
    {item: 'trinket'},{item: 'trinket2'},
];
const inventoryItems = [
    {item: 'item', locked: false},
    {item: 'item', locked: false},
    {item: 'item', locked: false},
    {item: '', locked: false},
    {item: '', locked: false},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},

    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},

    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},

    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},

    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},

    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},

    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
    {item: '', locked: true},
];


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
            html += `<div class="inventoryOnPersonItem">${inventoryOnPerson[i].item}</div>`;
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
            html += `<div class="inventoryOnPersonItem">${inventoryOnPerson[i].item}</div>`;
        }
        html += `</div><div></div>
                    `;

        html += `</div></div>
        
        
        
        
        
        
        <div id="inventoryItemsArea">`;
        for (let i = 0; i < inventoryItems.length; i++) {
            if (!inventoryItems[i].locked) {
                html += `<div class="inventoryItems itemsUnlocked">${inventoryItems[i].item}</div>`;
            }
            else {
                html += `<div class="inventoryItems"></div>`;
            }
        }

        html += `</div>`;
        document.getElementById('inventoryDiv').innerHTML = html;
    }
    else {
        inventoryOpen = false;
        document.getElementById('inventoryDiv').outerHTML = '<div id="inventoryDiv"></div>';
    }
}

window.onkeydown = function(e){
    if (e.keyCode === 73) {
        displayInventory();
    }
}