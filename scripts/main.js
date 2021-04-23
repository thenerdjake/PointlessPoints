/*jslint browser: true*/
/*global window*/
/*global document*/
//"use strict";

//Declaring Variables
var i, clickPower, totalPoints, points, pointlesserPoints, autoclick, autoclickValue, autoclicker, autoclickerValue,  manualClickPoints, temppoints, tempPointlesserPoints, autoclickCost, clickPowerCost;


function update() {
    temppoints = 0;
    
    temppoints += ( manualClickPoints * clickPower);
    manualClickPoints = 0;
    
    for (i = 0; i < autoclick; i++) {
        temppoints += autoclickValue/16;
    }

    
    temppoints += ( manualClickPoints * clickPower);
    manualClickPoints = 0;
    
    points += temppoints;
    totalPoints += (temppoints);
    

    document.getElementById("totalPoints").innerHTML = totalPoints.toFixed(0);
    document.getElementById("points").innerHTML = points.toFixed(0);
    document.getElementById("superPoints").innerHTML = pointlesserPoints.toFixed(0);
    document.getElementById("ultraMegaPoints").innerHTML = pointlesserPoints.toFixed(0);
    document.getElementById("autoclick").innerHTML = autoclick;
    document.getElementById("autoclickCost").innerHTML = autoclickCost.toFixed(0);
    document.getElementById("clickPowerCost").innerHTML = clickPowerCost.toFixed(0);
    document.getElementById("clickPower").innerHTML = clickPower.toFixed(0);

}

function manualClickPoint(){
    manualClickPoints++;
}

function buyautoclick(){
    if (points >= autoclickCost){
        autoclick++;
    points = points - autoclickCost;
    autoclickCost += autoclickCost/5;
    }
}

function increaseClickPower(){
    if (points >= clickPowerCost){
        clickPower = clickPower*10;
        points -= clickPowerCost;
        clickPowerCost = clickPowerCost*15;
    }
}

function setup() {
    clickPower = 1;
    totalPoints = 0;
    points = 100;
    pointlesserPoints = 0;
    manualClickPoints = 0;
    autoclick=0;
    autoclickValue = 1;
    autoclickCost = 5;
    clickPowerCost = 50;
}

setup();

//document.getElementById("basicClick").addEventListener("click", manualClick += 1);
window.setInterval(update, 1000/16);


//clicktobuyer