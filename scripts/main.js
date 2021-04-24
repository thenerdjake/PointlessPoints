/*jslint browser: true*/
/*global window*/
/*global document*/
//"use strict";

//Declaring Variables
var i,
manualClickPoints, 
temppoints, 
totalPoints, 
points, 
superPoints,
ultraMegaPoints,
clickPower, 
clickPowerCost,
autoClicker, 
autoClickerCost, 
superClicker,
superClickerCost,
megaClicker,
megaClickerCost,
ultraClicekr,
ultraClickerCost;



function update() {
    temppoints = 0;
    
    // Add manual click points to temp points and reset manual click points
    temppoints += ( manualClickPoints * clickPower);
    manualClickPoints = 0;
    
    //add the autoclicker points to temp points
    temppoints += (autoClicker*clickPower)/16;
    temppoints += (superClicker*3*clickPower)/16;
    temppoints += (megaClicker*10**clickPower)/16;
    temppoints += (ultraClicker*15*clickPower)/16;
    //add temp points to points and total points
    points += temppoints;
    totalPoints += (temppoints);
    
    //update the variables in the html document

    document.getElementById("totalPoints").innerHTML = totalPoints.toFixed(0);
    document.getElementById("points").innerHTML = points.toFixed(0);
    document.getElementById("superPoints").innerHTML = superPoints.toFixed(0);
    document.getElementById("ultraMegaPoints").innerHTML = ultraMegaPoints.toFixed(0);
    document.getElementById("clickPower").innerHTML = clickPower.toFixed(0);
    document.getElementById("clickPowerCost").innerHTML = clickPowerCost.toFixed(0);
    document.getElementById("autoClicker").innerHTML = autoClicker;
    document.getElementById("autoClickerCost").innerHTML = autoClickerCost.toFixed(0);
    document.getElementById("superClicker").innerHTML = superClicker;
    document.getElementById("superClickerCost").innerHTML = superClickerCost.toFixed(0);
    document.getElementById("megaClicker").innerHTML = megaClicker;
    document.getElementById("megaClickerCost").innerHTML = megaClickerCost.toFixed(0);
    document.getElementById("ultraClicker").innerHTML = ultraClicker;
    document.getElementById("ultraClickerCost").innerHTML = ultraClickerCost.toFixed(0);
}

function manualClickPoint(){
    manualClickPoints++;
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

function increaseClickPower(){
    if (points >= clickPowerCost){
        clickPower = clickPower+1;
        points -= clickPowerCost;
        clickPowerCost = clickPowerCost*15;
    }
}

function setup() {
    manualClickPoints = 0;
    temppoints = 0;
    totalPoints = 0;
    points = 100000;
    superPoints = 0;
    ultraMegaPoints = 0;
    clickPower = 1;
    clickPowerCost = 50;
    autoClicker = 0;
    autoClickerCost = 5;
    superClicker = 0;
    superClickerCost = 100;
    megaClicker = 0;
    megaClickerCost = 1000;
    ultraClicker = 0;
    ultraClickerCost = 10000;
}

setup();

//document.getElementById("basicClick").addEventListener("click", manualClick += 1);
window.setInterval(update, 1000/16);


//clicktobuyer