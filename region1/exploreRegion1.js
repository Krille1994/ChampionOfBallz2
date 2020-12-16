let region1ExploreNumber = 0;

function exploreRegion1() {
    if (region1ExploreNumber != 9) {
        let x = 1 + Math.floor(Math.random() * 100);
        if (x <= 40) {
            
        }
        else if (x <= 70) {
            itemDropRegion1();
        }
        else {
            readyUpBattle1();
            
        }
        region1ExploreNumber++;
    }
    else {
        region1ExploreNumber = 0;
        show('region1');
    }
}   


function itemDropRegion1() {
    let x = 1 + Math.floor(Math.random() * 1000);
    let explorer1Div = document.getElementById('explore1Div');

    if (x < 800) {
        item = Math.floor(Math.random() * basicItemsRegion1.length);
        explorer1Div.innerHTML = `
            <div>${basicItemsRegion1[item].image}</div>
            `;
    }
    else {
        item = Math.floor(Math.random() * specialItemsRegion1.length);
        explorer1Div.innerHTML = `
            <div>${specialItemsRegion1[item].image}</div>
            `;
    }
}