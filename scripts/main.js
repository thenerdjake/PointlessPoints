/*jslint browser: true*/
/*global window*/
/*global document*/
//"use strict";

//Declaring Variables
var i, clickPower, totalPoints, pointlessPoints, pointlesserPoints, autoPoint, autoPointValue, autoPointer, autoPointerValue,  manualClickPointlessPoints, tempPointlessPoints, tempPointlesserPoints, autoPointCost, clickPowerCost;


function update() {
    tempPointlessPoints = 0;
    tempPointlesserPoints = 0;
    
    tempPointlessPoints += ( manualClickPointlessPoints * clickPower);
    manualClickPointlessPoints = 0;
    
    for (i = 0; i < autoPoint; i++) {
        tempPointlessPoints += autoPointValue/16;
    }
    for (i = 0; i < autoPointer; i++) {
        tempPointlesserPoints += autoPointerValue/16;
    }
    
    tempPointlessPoints += ( manualClickPointlessPoints * clickPower);
    manualClickPointlessPoints = 0;
    
    pointlessPoints += tempPointlessPoints;
    pointlesserPoints += tempPointlesserPoints;
    totalPoints += (tempPointlessPoints + tempPointlesserPoints);
    

    document.getElementById("totalPoints").innerHTML = totalPoints.toFixed(0);
    document.getElementById("pointlessPoints").innerHTML = pointlessPoints.toFixed(0);
    document.getElementById("pointlesserPoints").innerHTML = pointlesserPoints.toFixed(0);
    document.getElementById("autoPoint").innerHTML = autoPoint;
    document.getElementById("autoPointCost").innerHTML = autoPointCost.toFixed(0);
    document.getElementById("clickPowerCost").innerHTML = clickPowerCost.toFixed(0);

}

function manualClickPointless(){
    manualClickPointlessPoints++;
}

function buyAutoPoint(){
    if (pointlessPoints >= autoPointCost){
        autoPoint++;
    pointlessPoints = pointlessPoints - autoPointCost;
    autoPointCost += autoPointCost/5;
    }
}

function increaseClickPower(){
    if (pointlessPoints >= clickPowerCost){
        clickPower = clickPower*10;
        pointlessPoints -= clickPowerCost;
        clickPowerCost = clickPowerCost*15;
    }
}

function setup() {
    clickPower = 1;
    totalPoints = 0;
    pointlessPoints = 100;
    pointlesserPoints = 0;
    manualClickPointlessPoints = 0;
    autoPoint=0;
    autoPointValue = 1;
    autoPointCost = 5;
    clickPowerCost = 50;
}

setup();

//document.getElementById("basicClick").addEventListener("click", manualClick += 1);
window.setInterval(update, 1000/16);


//clicktobuyer