/*jslint browser: true*/
/*global window*/
/*global document*/
//"use strict";

//Declaring Variables
var i,
manualClickPoints, 
manualClickSuperPoints,
manualClickUltraMegaPoints,
tempPoints, 
tempSuperPoints,
tempUltraMegaPoints,
totalPoints, 
points, 
superPoints,
ultraMegaPoints,
superPointCost,
clickPower, 
clickPowerCost,
pointPower,
pointPowerCost,
autoClicker, 
autoClickerCost, 
superClicker,
superClickerCost,
megaClicker,
megaClickerCost,
ultraClicekr,
ultraClickerCost,
clickCreator,
clickCreatorCost,
clickerUpgrader,
clickerUpgraderCost,
autoPointer,
autoPointerCost,
superPointer,
superPointerCost,
megaPointer,
megaPointerCost,
ultraPointer,
ultraPointerCost,
pointPump,
pointPumpCost,
pointPiston,
pointPistonCost,
hadronPointlider,
hadronPointliderCost,
pointAlchemist,
pointAlchemistCost,
bigClick,
bigClickCost;



function update() {
    tempPoints = 0;
    tempSuperPoints = 0;
    tempUltraMegaPoints = 0;
    
    // Add manual click points to temp points and reset manual click points
    tempPoints += ( manualClickPoints * clickPower);
    manualClickPoints = 0;
    tempSuperPoints += (manualClickSuperPoints);
    manualClickSuperPoints = 0;
    tempUltraMegaPoints  += (manualClickUltraMegaPoints);
    tempUltraMegaPoints = 0;
    
    //add the autoclicker points to temp points
    tempPoints += (autoClicker*clickPower)/16;
    tempPoints += (superClicker*3*clickPower)/16;
    tempPoints += (megaClicker*10**clickPower)/16;
    tempPoints += (ultraClicker*15*clickPower)/16;

    tempPoints += (autoPointer*1000*pointPower)/16;
    tempSuperPoints += (superPointer*pointPower)/16;
    tempSuperPoints += (megaPointer*10*pointPower)/16;
    tempSuperPoints += (ultraPointer*100*pointPower)/16;


    autoClicker += (clickerCreator)/16;

    if (clickerUpgrader > 0){
        upgradeClickers();
    }

    //add temp points to points and total points
    points += tempPoints;
    superPoints += tempSuperPoints;
    ultraMegaPoints += tempUltraMegaPoints;
    totalPoints += (tempPoints + superPoints + ultraMegaPoints);
    
    //update the variables in the html document

    document.getElementById("totalPoints").innerHTML = totalPoints.toFixed(0);
    document.getElementById("points").innerHTML = points.toFixed(0);
    document.getElementById("superPoints").innerHTML = superPoints.toFixed(0);
    document.getElementById("ultraMegaPoints").innerHTML = ultraMegaPoints.toFixed(0);
    document.getElementById("clickPower").innerHTML = clickPower.toFixed(0);
    document.getElementById("clickPowerCost").innerHTML = clickPowerCost.toFixed(0);
    document.getElementById("autoClicker").innerHTML = autoClicker.toFixed(0);
    document.getElementById("autoClickerCost").innerHTML = autoClickerCost.toFixed(0);
    document.getElementById("superClicker").innerHTML = superClicker.toFixed(0);
    document.getElementById("superClickerCost").innerHTML = superClickerCost.toFixed(0);
    document.getElementById("megaClicker").innerHTML = megaClicker.toFixed(0);
    document.getElementById("megaClickerCost").innerHTML = megaClickerCost.toFixed(0);
    document.getElementById("ultraClicker").innerHTML = ultraClicker.toFixed(0);
    document.getElementById("ultraClickerCost").innerHTML = ultraClickerCost.toFixed(0);
    document.getElementById("clickerCreator").innerHTML = clickerCreator;
    document.getElementById("clickerCreatorCost").innerHTML = clickerCreatorCost.toFixed(0);
    document.getElementById("clickerUpgrader").innerHTML = clickerUpgrader;
    document.getElementById("clickerUpgraderCost").innerHTML = clickerUpgraderCost.toFixed(0);
    document.getElementById("pointPower").innerHTML = pointPower;
    document.getElementById("pointPowerCost").innerHTML = pointPowerCost.toFixed(0);
    document.getElementById("autoPointer").innerHTML = autoPointer;
    document.getElementById("autoPointerCost").innerHTML = autoPointerCost.toFixed(0);
    document.getElementById("superPointer").innerHTML = superPointer;
    document.getElementById("superPointerCost").innerHTML = superPointerCost.toFixed(0);
    document.getElementById("megaPointer").innerHTML = megaPointer;
    document.getElementById("megaPointerCost").innerHTML = megaPointerCost.toFixed(0);
    document.getElementById("ultraPointer").innerHTML = ultraPointer;
    document.getElementById("ultraPointerCost").innerHTML = ultraPointerCost.toFixed(0);
}

function manualClickPoint(){
    manualClickPoints++;
}

function manualClickSuperPoint(){
    if(points >= superPointCost){
        points = points - superPointCost;
        manualClickSuperPoints++;
    }
}

function buyAutoClicker(){
    if (points >= autoClickerCost){
        autoClicker++;
        points = points - autoClickerCost;
        autoClickerCost += autoClickerCost/5;
    }
}

function buySuperClicker(){
    if (points >= superClickerCost){
        superClicker++;
        points = points - superClickerCost;
        superClickerCost += superClickerCost/5;
    }
}

function buyMegaClicker(){
    if (points >= megaClickerCost){
        megaClicker++;
        points = points - megaClickerCost;
        megaClickerCost += megaClickerCost/5;
    }
}

function buyUltraClicker(){
    if (points >= ultraClickerCost){
        ultraClicker++;
        points = points - ultraClickerCost;
        ultraClickerCost += ultraClickerCost/5;
    }
}

function buyClickerCreator(){
    if (superPoints >= clickerCreatorCost){
        clickerCreator++;
        superPoints = superPoints - clickerCreatorCost;
        clickerCreatorCost += clickerCreatorCost/6;
    }
}

function buyClickerUpgrader(){
    if (superPoints >= clickerUpgraderCost){
        clickerUpgrader++;
        superPoints = superPoints - clickerUpgraderCost;
        clickerUpgraderCost += clickerUpgraderCost/5;
    }
}

function increaseClickPower(){
    if (superPoints >= clickPowerCost){
        clickPower++;
        superPoints -= clickPowerCost;
        clickPowerCost = clickPowerCost*5;
    }
}

function buyAutoPointer(){
    if (superPoints >= autoPointerCost){
        autoPointer++;
        superPoints = superPoints - autoPointerCost;
        autoPointerCost += autoPointerCost/15;
    }
}

function buySuperPointer(){
    if (superPoints >= superPointerCost){
        superPointer++;
        superPoints = superPoints - superPointerCost;
        superPointerCost += superPointerCost/15;
    }
}

function buyMegaPointer(){
    if (superPoints >= megaPointerCost){
        megaPointer++;
        superPoints = superPoints - megaPointerCost;
        megaPointerCost += megaPointerCost/15;
    }
}

function buyUltraPointer(){
    if (superPoints >= ultraPointerCost){
        ultraPointer++;
        superPoints = superPoints - ultraPointerCost;
        ultraPointerCost += ultraPointerCost/15;
    }
}

function upgradeClickers(){
    if (autoClicker > clickerUpgrader){
        autoClicker -= (clickerUpgrader/8);
        superClicker += (clickerUpgrader/8);
    }
    if (superClicker > clickerUpgrader){
        superClicker -= (clickerUpgrader/50);
        megaClicker += (clickerUpgrader/50);
    }
    if (megaClicker > clickerUpgrader){
        megaClicker -= (clickerUpgrader/100);
        ultraClicker += (clickerUpgrader/100);
    }
}

function setup() {
    manualClickPoints = 0;
    manualClickSuperPoints = 0;
    tempPoints = 0;
    tempSuperPoints = 0;
    tempUltraPoints = 0;
    totalPoints = 0;
    points = 1000000000;
    superPoints = 100;
    ultraMegaPoints = 0;
    clickPower = 1;
    clickPowerCost = 1;
    pointPower = 1;
    pointPowerCost = 5;
    autoClicker = 0;
    autoClickerCost = 5;
    superClicker = 0;
    superClickerCost = 100;
    megaClicker = 0;
    megaClickerCost = 1000;
    ultraClicker = 0;
    ultraClickerCost = 10000;
    autoPointer = 0;
    autoPointerCost = 2;
    superPointer = 0;
    superPointerCost = 12;
    megaPointer = 0;
    megaPointerCost = 24;
    ultraPointer = 0;
    ultraPointerCost = 36;
    clickerCreator = 0;
    clickerCreatorCost = 5;
    clickerUpgrader = 0;
    clickerUpgraderCost = 5;
    superPointCost = 10000;

}

setup();

//document.getElementById("basicClick").addEventListener("click", manualClick += 1);
window.setInterval(update, 1000/10);


//clicktobuyer