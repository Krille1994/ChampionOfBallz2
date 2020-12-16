const champions1 = [
    { name: 'Balder', stats: [2, 220, 1, 2, 2], unlocked: true, alive: true, gold: 100, experience: 100, character: ['<img src="bilder/balder.png">', '<img src="bilder/balderDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Seronicus', stats: [5, 520, 2, 5, 7], unlocked: false, alive: true, gold: 250, experience: 250, character: ['<img src="bilder/seronicus.png">', '<img src="bilder/seronicusDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Bertrix', stats: [10, 1200, 4, 7, 0], unlocked: false, alive: true, gold: 500, experience: 500, character: ['<img src="bilder/bertrix.png">', '<img src="bilder/bertrixDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Foll', stats: [15, 1800, 10, 2, 15], unlocked: false, alive: true, gold: 750, experience: 750, character: ['<img src="bilder/foll.png">', '<img src="bilder/follDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Hank', stats: [20, 2220, 20, 2, 2], unlocked: false, alive: true, gold: 1000, experience: 1000, character: ['<img src="bilder/hank.png">', '<img src="bilder/hankDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Whaler', stats: [25, 2800, 15, 5, 7], unlocked: false, alive: true, gold: 1250, experience: 1250, character: ['<img src="bilder/whaler.png">', '<img src="bilder/whalerDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Crank', stats: [35, 4000, 30, 2, 2], unlocked: false, alive: true, gold: 1750, experience: 1750, character: ['<img src="bilder/crank.png">', '<img src="bilder/crankDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Frank', stats: [50, 6000, 35, 5, 7], unlocked: false, alive: true, gold: 2500, experience: 2500, character: ['<img src="bilder/frank.png">', '<img src="bilder/frankDead.png">', '<img src="bilder/characterLocked.png">'] },
    { name: 'Rixus', stats: [100, 12000, 50, 20, 20], unlocked: false, alive: true, gold: 5000, experience: 5000, character: ['<img src="bilder/rixus.png">', '<img src="bilder/rixusDead.png">', '<img src="bilder/characterLocked.png">'] }
];

function createTournament1() {
    let html = `<div id="arenaBackgroundDiv">
    <div id="tournament">`;

    for (let i = 0; i < champions1.length; i++) {
        html += `
        <div class="championBox ${'championBox' + i}">
            <div>
                <div class="champions1tats">
                    <div>${champions1[i].name}</div>
                    <div>Lvl ${champions1[i].stats[0]}</div>
                    <div>HP ${champions1[i].stats[1]}</div>
                    <div>Damage legg til damage eller damage funksjon</div>
                    <div>Critical Bonus ${champions1[i].stats[3]}</div>
                    <div>Dodge Bonus ${champions1[i].stats[4]}</div>
                </div>
                <div class="championImage">
                    ${champion1ImageDisplay(i)}
                </div>
            </div>
        </div>
        `;
    }
    html += `</div>
    <div onclick="show('region1')">leave</div>
    </div>
    `;
    app.innerHTML = html;
}

function champion1ImageDisplay(index) {
    if (!champions1[index].unlocked) {
        return champions1[index].character[2];
    }
    else if (champions1[index].unlocked && champions1[index].alive) {
        return champions1[index].character[0];
    }
    else if (!champions1[index].alive) {
        return champions1[index].character[1];
    }
}