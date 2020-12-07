function startMenuFunction() {
    startMenu = `
    <div id="startMenuFrame">
        <div id="newGameButton" onclick="show('customizeNewCharacter')">New Game</div>
        <div id="loadGameButton">Load Game</div>
        <div id="optionsButton" onclick="show('optionsMenu')">Settings</div>
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
                    <option ${chosenRace == 'Human' ? 'selected': ''} onclick="setChosenRace(this)">Human</option>
                    <option ${chosenRace == 'Dwarf' ? 'selected': ''} onclick="setChosenRace(this)">Dwarf</option>
                    <option ${chosenRace == 'Elf' ? 'selected': ''} onclick="setChosenRace(this)">Elf</option>
                    <option ${chosenRace == 'Ogre' ? 'selected': ''} onclick="setChosenRace(this)">Ogre</option>
                </select>
            </div>
            <br>
            <div>Choose your characters class</div>
            <div>
            <select onfocus="this.size=4;" onblur="this.size=1;" onchange="this.size=1; this.blur();">
                <option ${chosenClass == 'Warrior' ? 'selected': ''} onclick="setChosenClass(this)">Warrior</option>
                <option ${chosenClass == 'Rouge' ? 'selected': ''} onclick="setChosenClass(this)">Rogue</option>
                <option ${chosenClass == 'Mage' ? 'selected': ''} onclick="setChosenClass(this)">Mage</option>
                <option ${chosenClass == 'Ranger' ? 'selected': ''} onclick="setChosenClass(this)">Ranger</option>
            </select>
            </div>

        </div>

        <div id="startAdventure" onclick="startNewAdventure()">Start Your Adventure</div>
    </div>

    `;
}
// place for what happens when you load game
function region1Function() {
    region1 = `
    <div id="region1">
        <div id="inventoryDiv"></div>
        <div id="arena1">arena</div>
        <div>blacksmith</div>
        <div>store</div>
        <div>exsplore</div>
        <div id="optionsButton" onclick="show('optionsMenu')">Settings</div>
    </div>
    `;
}

