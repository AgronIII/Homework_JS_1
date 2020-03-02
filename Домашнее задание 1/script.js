//задание 1

var preMove = document.getElementById("btn1");
var preChange = document.getElementById("btn2");
var preDel = document.getElementById("btn3");

preMove.onclick = function(){
    document.location.href = "./index2.html"
}

preChange.onclick = function(){
    preMove.style.backgroundColor = "darkred";
    preChange.style.backgroundColor = "blue";
    preDel.style.backgroundColor = "red";
    document.body.style.backgroundColor = "yellow";
}

document.getElementById("light").style.display = "none";

preDel.onclick = function(){
    preMove.style.display = "none";
    preChange.style.display = "none";
    preDel.style.display = "none";
    document.getElementById("light").style.display = "flex";
}

//задание 2

var term = {
    Canada: 4,
    Spain: 22,
    Albania: 14,
    Norway: -6,
    Belarus: 0,
    Iceland: -17,
    southAfrica: 28
}

function mean(data){
    var sum = 0;
    var count = 0;
    for (let salary of Object.values(data)){
        sum += salary;
        count++;
    }
    return sum/count;
}

function maxima(data){
    var maxi = 0;
    for (let salary of Object.values(data)){
        maxi = Math.max(maxi, salary);
    }
    return maxi;
}

document.write("<br \/><br \/> Среднее равно: " + mean(term).toFixed(1) + " градусов. <br \/>");
document.write("<br \/> Максимум равен: " + maxima(term) + " градусов.");
