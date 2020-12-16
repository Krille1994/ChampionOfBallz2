const store1SpecialItems = [
    { Disp_Name: 'specialItem1' },
    { Disp_Name: 'specialItem2' },
    { Disp_Name: 'specialItem3' },
    { Disp_Name: 'specialItem4' },
    { Disp_Name: 'specialItem5' },
];
const store1BasicItems = [
    { Disp_Name: 'basicItem1' },
    { Disp_Name: 'basicItem2' },
    { Disp_Name: 'basicItem3' },
    { Disp_Name: 'basicItem4' },
    { Disp_Name: 'basicItem5' },
    { Disp_Name: 'basicItem6' },
    { Disp_Name: 'basicItem7' },
    { Disp_Name: 'basicItem8' },
    { Disp_Name: 'basicItem9' },
    { Disp_Name: 'basicItem10' },
    { Disp_Name: 'basicItem11' },
    { Disp_Name: 'basicItem12' },
    { Disp_Name: 'basicItem13' },
    { Disp_Name: 'basicItem14' },
    { Disp_Name: 'basicItem15' },
    { Disp_Name: 'basicItem16' },
    { Disp_Name: 'basicItem17' },
    { Disp_Name: 'basicItem18' },
    { Disp_Name: 'basicItem19' },
    { Disp_Name: 'basicItem20' },
];

let shop1Stock = '';
function shop1Restock() {
    let items = '';

    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * store1SpecialItems.length);
        items += `<div>${store1SpecialItems[x].Disp_Name}</div>`;
    }
    for (let i = 0; i < 8; i++) {
        let y = Math.floor(Math.random() * store1BasicItems.length);
        items += `<div>${store1BasicItems[y].Disp_Name}</div>`;
    }
    shop1Stock = items;
}