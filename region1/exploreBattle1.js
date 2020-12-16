const exploreOpponents1 = [
    {name: 'Sewer Rat', image: '<img src="images/balder.png" style="height: 100%; width: 100%;">', lvlMax: 20, hp: 100, damage: 10, armor: 0.1, dodge: 22},
    {name: 'Goblin', image: '<img src="images/balder.png" style="height: 100%; width: 100%;">', lvlMax: 20, hp: 80, damage: 12, armor: 0.1, dodge: 22},
    {name: 'Wolf', image: '<img src="images/balder.png" style="height: 100%; width: 100%;">', lvlMax: 20, hp: 60, damage: 15, armor: 0.1, dodge: 22},
    {name: 'Small Moose', image: '<img src="images/balder.png" style="height: 100%; width: 100%;">', lvlMax: 20, hp: 100, damage: 10, armor: 0.1, dodge: 22},
    {name: 'Hungry Bear', image: '<img src="images/balder.png" style="height: 100%; width: 100%;">', lvlMax: 20, hp: 200, damage: 10, armor: 0.1, dodge: 22},
    {name: 'Bandit', image: '<img src="images/balder.png" style="height: 100%; width: 100%;">', lvlMax: 20, hp: 120, damage: 10, armor: 0.1, dodge: 22},
    {name: 'Mugger', image: '<img src="images/balder.png" style="height: 100%; width: 100%;">', lvlMax: 20, hp: 80, damage: 10, armor: 0.1, dodge: 22},
];


function showBattle1() {
    let explorer1Div = document.getElementById('explore1Div');
    explorer1Div.innerHTML =  `<div>
                <div id="playerExploreBattle1">
                    <div>${username}</div>
                    <div>LvL ${playerStats.level}</div>
                    <div style="width: 10vw; height: 2vh;">
                        <div style="height: 100%; width: ${playerHpBar}%; background-color: green;">${playerBattleHp}</div>
                    </div>
                    <div style="height: 18vh; width: 10vw; margin-top: 2vh;">${characterAvatar}</div>
                </div>
                <div id="npcExploreBattle1">
                    <div>${exploreOpponents1[opponent].name}</div>
                    <div>LvL ${exploreOpponents1[opponent].lvlMax > playerStats.level ? playerStats.level : exploreOpponents1[opponent].lvlMax}</div>
                    <div style="width: 10vw; height: 2vh;">
                        <div style="height: 100%; width: ${npcHpBar}%; background-color: green;">${npcBattleHp}</div>
                    </div>
                    <div style="height: 18vh; width: 10vw; margin-top: 2vh;">${exploreOpponents1[opponent].image}</div>
                </div>
                <div id="exploreBattle1Attacks">
                    <div id="normalAttack1" ${playersTurn ? 'onclick="normalAttack1()"' : ''}>Normal Attack</div>
                    <div id="hardAttack1" ${playersTurn ? 'onclick="hardAttack1()"' : ''}>Hard Attack</div>
                </div>
            </div>
    `;
    
}
let npcDodge;
let damage;
function calcPlayerDamage1(opponent) {
    if (mainAttribute == 'strength') {
        damage = playerStats.damage + playerStats.strength;
    }
    else if (mainAttribute == 'agility') {
        damage = playerStats.damage + playerStats.agility;
    }
    else if (mainAttribute == 'intellect') {
        damage = playerStats.damage + playerStats.intellect;
    }
    else {
        console.log('error! exploreBattle1.js line 51');
    }

    damage = damage - (damage * exploreOpponents1[opponentIndex].armor);
    npcDodge = exploreOpponents1[opponentIndex].dodge;

    let y = 1+ Math.floor(Math.random()*100);
    if (y <= npcDodge) {
        damage = 0;
    }
    else {
        let damageVariation = 1+ Math.floor(Math.random() * damage) - damage/2;
        damage += damageVariation;
        console.log(damage);
    }
}


let opponentIndex;
let playersTurn = true;
function readyUpBattle1() {
    opponentIndex = Math.floor(Math.random() * exploreOpponents1.length);
    playerBattleHp = playerStats.hp;
    playerBattleHpMax = playerStats.hp;
    playerHpBar = 100;
    playersTurn = true;

    npcBattleHp = exploreOpponents1[opponentIndex].hp;
    npcBattleHpMax = exploreOpponents1[opponentIndex].hp;
    npcDamage = exploreOpponents1[opponentIndex].damage;
    npcHpBar = 100;
    showBattle1();
}

function normalAttack1() {
    calcPlayerDamage1();
    playersTurn = false;
    if (npcBattleHp - damage <= 0) {
        npcBattleHp = 0;
        npcHpBar = 0;
        showBattle1();
    }
    else {
        npcBattleHp -= damage;
        npcHpBar = npcBattleHp/npcBattleHpMax * 100;
        showBattle1();

        setTimeout(selectNpcAttack1, 500);
    }
}
function hardAttack1() {
    calcPlayerDamage1();
    playersTurn = false;
    if (npcBattleHp - damage <= 0) {
        npcBattleHp = 0;
        npcHpBar = 0;
        showBattle1();
    }
    else {
        npcBattleHp -= damage;
        npcHpBar = npcBattleHp/npcBattleHpMax * 100;
        showBattle1();

        setTimeout(selectNpcAttack1, 500);
    }
}

function selectNpcAttack1() {
    playersTurn = true;
    x = Math.floor(Math.random() * 2);
    if (x == 0) {
        npcNormalAttack1();
    }
    else if (x == 1) {
        npcHardAttack1();
    }
}

function npcNormalAttack1() {
    if (playerBattleHp - npcDamage <= 0) {
        playerBattleHp = 0;
        playerHpBar = 0;
        showBattle1();
    }
    else {
        playerBattleHp -= npcDamage;
        playerHpBar = playerBattleHp/playerBattleHpMax * 100;
        showBattle1();
    }
}
function npcHardAttack1() {
    if (playerBattleHp - npcDamage <= 0) {
        playerBattleHp = 0;
        playerHpBar = 0;
        showBattle1();
    }
    else {
        playerBattleHp -= npcDamage;
        playerHpBar = playerBattleHp/playerBattleHpMax * 100;
        showBattle1();
    }
}
