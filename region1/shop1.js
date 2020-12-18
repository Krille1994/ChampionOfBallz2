const store1SpecialItems = [
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
];
const store1BasicItems = [
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
    { name: 'Leather Cap' },
];
const storeStock1 = [
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
    {name: '', soldOut: false},
];
shop1Restock();
function shop1Restock() {
    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * store1SpecialItems.length);
        storeStock1[i].name = store1SpecialItems[x].name;
    }
    for (let i = 0; i < 8; i++) {
        let y = Math.floor(Math.random() * store1BasicItems.length);
        storeStock1[i+3].name = store1BasicItems[y].name;
    }
}
let shop1Stock = '';
function createShop1Stock() {
    shop1Stock = '';
    for (let i = 0; i < storeStock1.length; i++) {
        
        if (storeStock1[i].soldOut == true) {
            shop1Stock += `
            <div style="float: left; margin-left: 1vw;">
            ${createShop1StockHelper(i)}</div>
            `; 
        }
        else {
            shop1Stock += `
            <div style="float: left; margin-left: 1vw;" 
            onclick="showStoreItem('${storeStock1[i].name}', ${i})">
            ${createShop1StockHelper(i)}</div>
            `;
        }
    }
}
function createShop1StockHelper(index) {
    let x = storeStock1[index].name;
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].Disp_Name == x) {
            if (storeStock1[index].soldOut == false) {
                return `
                        <div>${allItems[i].Disp_Name}</div>
                        <div class="shop1Stock">${allItems[i].Disp_Art}</div>
                        <div>${allItems[i].Price} Gold</div>
                `;
            }
            else {
                return `
                        <div>${allItems[i].Disp_Name}</div>
                        <div class="shop1Stock">${allItems[i].Disp_Art}</div>
                        <div>Sold Out</div>
                `;
            }
        } 
    }
}
createShop1Stock();

function showStoreItem(name, index) {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].Disp_Name == name) {
            document.getElementById('shop1DisplayItemStats').innerHTML = `
                <div>${allItems[i].Disp_Name}</div>
                <div style="width: 10vw; height: 12vh;">
                    ${allItems[i].Disp_Art}</div>
                <div>${allItems[i].Disp_Desc}</div>
                <div>Type: ${allItems[i].Type}</div>
                <div>Rarity: ${allItems[i].Rarity}</div><br>
                <div>Strength: ${allItems[i].Strenght}</div>
                <div>Agility: ${allItems[i].Agility}</div>
                <div>Intellect: ${allItems[i].Intellect}</div><br>
                <div>Damage: ${allItems[i].Damage}</div>
                <div>Physical Armor: ${allItems[i].PhysicalArmor}</div>
                <div>Magic Armor: ${allItems[i].MagicArmor}</div>
                <div>Health Points: ${allItems[i].HP}</div>
                <div>HP Regeneration: ${allItems[i].HPR}</div>
                <div>Mana: ${allItems[i].MP}</div>
                <div>Mana Regeneration: ${allItems[i].MPR}</div>
                <div>Turnspeed Bonus: ${allItems[i].TurnSpeed}</div>
                <button onclick="buyItemFromShop1(${i}, ${index})" ${playerStats.gold >= allItems[i].Price ?
                 '' : 'disabled'}>Buy for ${allItems[i].Price} Gold</button>
            `;
        }
    }
}
function buyItemFromShop1(index, storeIndex) {
    for (let i = 0; i < inventoryItems. length; i++) {
        if (inventoryItems[i].item == '' && inventoryItems[i].locked == false) {
            playerStats.gold -= allItems[index].Price;
            inventoryItems[i].item = allItems[index].Disp_Art;
            storeStock1[storeIndex].soldOut = true;
            createShop1Stock();
            show('shop1');
            break;
        }
    }
}