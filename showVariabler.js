function startMenuFunction() {
    startMenu = `
    <div id="startMenuFrame">
        <div class="MainMenuButton" id="newGameButton" onclick="show('customizeNewCharacter')">New Game</div>
        <div class="MainMenuButton" id="loadGameButton">Load Game</div>
        <div class="MainMenuButton" id="optionsButton" onclick="show('optionsMenu')">Settings</div>
    </div>
    `;
}
function optionsMenuFunction() {
    optionsMenu = `
    <div onclick="show(rememberSite)">Return</div>
    <div>A bunch of options</div>
    `;
}
function customizeNewCharacterFunction() {
    setCharacter();
    customizeNewCharacter = `
    <div id="showCharacterCreation">
        <div id="displayCharacterCreationStatsAndAttributes">
            <div id="displayCharacterCreationStats">
                <div>Name: ${username}</div>
                <div>Race: ${chosenRace}</div>
                <div>Class: ${chosenClass}</div>
                <div id="displayCharacterCreationStatsHeader">Stats</div>
                <div>HP: ${playerStats.hp}</div>
                <div>Damage: ${playerStats.damage}</div>
                <div>Crit Chance: ${playerStats.crit}</div>
                <div>Dodge Chance: ${playerStats.dodge}</div>
            </div>
            <br>
            <div id="displayCharacterCreationAttributes">
                <div id="displayCharacterCreationAttributesHeader">Attributes</div>
                <div>Strength: ${playerStats.strength}</div>
                <div>Agility: ${playerStats.agility}</div>
                <div>Intellect: ${playerStats.intellect}</div>
            </div>
        
        <br>
            <div id="displayCharacterCreationAvatar">${characterAvatar}</div>
        </div>

        <div id="characterCreationOptions">
            <label for="name">Name:</label>
            <input id="name" type="text" maxlength="20" value="${username}" placeholder="Write Your Name" oninput="inputValue = this.value" onblur="setUsername()" >
            <br><br>
            <div>Choose your character race</div>
            <div>
                <select onfocus="this.size=4;" onblur="this.size=1;" onchange="this.size=1; this.blur();">
                    <option ${chosenRace == 'Human' ? 'selected' : ''} onclick="setChosenRace(this)">Human</option>
                    <option ${chosenRace == 'Dwarf' ? 'selected' : ''} onclick="setChosenRace(this)">Dwarf</option>
                    <option ${chosenRace == 'Elf' ? 'selected' : ''} onclick="setChosenRace(this)">Elf</option>
                    <option ${chosenRace == 'Ogre' ? 'selected' : ''} onclick="setChosenRace(this)">Ogre</option>
                </select>
            </div>
            <br>
            <div>Choose your characters class</div>
            <div>
            <select onfocus="this.size=4;" onblur="this.size=1;" onchange="this.size=1; this.blur();">
                <option ${chosenClass == 'Warrior' ? 'selected' : ''} onclick="setChosenClass(this)">Warrior</option>
                <option ${chosenClass == 'Rouge' ? 'selected' : ''} onclick="setChosenClass(this)">Rogue</option>
                <option ${chosenClass == 'Mage' ? 'selected' : ''} onclick="setChosenClass(this)">Mage</option>
                <option ${chosenClass == 'Ranger' ? 'selected' : ''} onclick="setChosenClass(this)">Ranger</option>
            </select>
            </div>

        </div>

        <div id="startAdventure" onclick="startNewAdventure()">Start Your Adventure</div>
    </div>

    `;
}
// place for what happens when you load game

// region 1
function region1Function() {
    region1 = `
    <div id="region1">
        <div id="inventoryDiv"></div>
        <div id="arena1" onclick="createTournament1()">arena</div>
        <div onclick="show('blacksmith')" >blacksmith</div>
        <div onclick="show('shop1')">store</div>
        <div onclick="show('explore1')" >explore</div>
        <div id="optionsButton" onclick="show('optionsMenu')">Settings</div>
    </div>
    `;
}

function shop1Function() {
    shop1 = `
    <div id="inventoryDiv"></div>
    <div id="shop1Goods">${shop1Stock}</div>
    <div onclick="show('region1')" >leave</div>
    `;
}
function explore1Function() {
    explore1 = `
        <div id="inventoryDiv"></div>
        <div id="explore1Div"></div>
        <div id="explore1Continue" onclick="exploreRegion1()">continue</div>
    `;
}
function blacksmithFunction() {
    blacksmith = `<div id="inventoryDiv"></div>
    <div id=blacksmithingTable></div>
    <div id="upgradeCost"></div>`


        blacksmith += `<div id="blacksmithDisplayInventory"> 
        <div id="inventoryStatsArea">
        <div id="inventoryStatsName">${username}<br>${chosenRace} ${chosenClass}<br>LvL ${playerStats.level}</div>
        <div id="inventoryStatsPack">
            <div id="inventoryOnPersonLeftItems">`;
        for (let i = 0; i < inventoryOnPerson.length / 2; i++) {
            blacksmith += `<div class="inventoryOnPersonItem">${inventoryOnPerson[i].item}</div>`;
        }

        blacksmith += `</div>
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
            blacksmith += `<div class="inventoryOnPersonItem">${inventoryOnPerson[i].item}</div>`;
        }
        blacksmith += `</div><div></div>
                    `;

        blacksmith += `</div></div>
        
        
        
        
        
        
        <div id="inventoryItemsArea">`;
        for (let i = 0; i < inventoryItems.length; i++) {
            if (!inventoryItems[i].locked) {
                blacksmith += `<div class="inventoryItems itemsUnlocked">${inventoryItems[i].item}</div>`;
            }
            else {
                blacksmith += `<div class="inventoryItems"></div>`;
            }
        }

        blacksmith += `</div>`;
        document.getElementById('inventoryDiv').innerHTML = blacksmith;
    }