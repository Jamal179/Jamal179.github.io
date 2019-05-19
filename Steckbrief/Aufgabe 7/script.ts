window.addEventListener("load", geladen);
function geladen (){
    let hufeisen : string = "Seidentofu wurde geladen"
    let elementErstellenZwei : HTMLDivElement = document.createElement("div");
    document.getElementById("Fischkrrr").appendChild(elementErstellenZwei)
    let variableY : string = `<p> ${hufeisen}</p>`
    elementErstellenZwei.innerHTML = variableY
}



console.log("Valar Morghulis");

window.onload = function () {
    console.log("Valar Dohaeris");
  

//function changeIt() {
   // ('Warum verstehst du das wort >NICHT< nicht?!');

//}
//changeIt()


function berechnen(){
    let zahl : number = 26;
    let zahlen : number = 17;
    zahlen = 16;
    let summe : number = zahl + zahlen; 
    console.log(summe);
    let elementErstellen : HTMLDivElement = document.createElement("div");
    document.getElementById("zahleeen").appendChild(elementErstellen)
    let variableX : string = `<p> ${summe}</p>`
    elementErstellen.innerHTML = variableX
}
berechnen()

function schrift(){
let text : string = "Steingabelfuß ";
let texte : string = "Siamesischer Kampffisch";
var beide : string = text + texte;
console.log(beide);
let elementErstellenZwei : HTMLDivElement = document.createElement("div");
document.getElementById("zahleeen").appendChild(elementErstellenZwei)
let variableY : string = `<p> ${beide}</p>`
elementErstellenZwei.innerHTML = variableY

}
schrift()

document.getElementById("Banane").addEventListener("click", aenderung);
function aenderung(){
   
    document.getElementById("Hus").innerHTML = "";
    let texter : string = "Baumus";
    console.log(texter);
    let elementErstellenZwei : HTMLDivElement = document.createElement("div");
    document.getElementById("Hus").appendChild(elementErstellenZwei)
    let variableY : string = `<p> ${texter}</p>`
    elementErstellenZwei.innerHTML = variableY

}

function neu(){
document.getElementById("zusatz")
let zzz : string = "Noch ein Button"
let elementErstellenVier : HTMLButtonElement = document.createElement("button");
document.getElementById("zahleeen").appendChild(elementErstellenVier)
let variableY : string = `<p> ${zzz}</p>`
elementErstellenVier.innerHTML = variableY
document.getElementById("zusatz").addEventListener("click", funk);
}
neu()

function funk(){
    document.getElementById("zusatz").innerHTML = "";    
    let XXX : string = "Geändert";
    let elementErstellenFunf : HTMLDivElement = document.createElement("div");
    document.getElementById("zusatz").appendChild(elementErstellenFunf);
let variableQ : string = `<p> ${XXX}</p>`;
elementErstellenFunf.innerHTML = variableQ
}

}
/*
document.getElementById("Wald").addEventListener("click", aenderungs);
function aenderungs(){
   
    document.getElementById("Kalt").innerHTML = "";
    let texters : string = "Baumus";
    console.log(texters);
    let elementErstellenDrei : HTMLButtonElement = document.createElement("button");
    document.getElementById("Kalt").appendChild(elementErstellenDrei);
    let variableZ : string = `<button> ${texters}</button>`;
    elementErstellenDrei.innerHTML = variableZ;
    */



   /* Typescript is dark and full of terror */
