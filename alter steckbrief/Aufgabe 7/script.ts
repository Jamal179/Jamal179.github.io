window.addEventListener("load", geladen);
function geladen (){
    window.prompt("Hast du Lust zwei unnötige Spiele zu spielen?");
    let hochHa : string = "Baue ein Hochhaus!";
    console.log("Seidentofu wurde geladen");
    let elementErstellenZwei : HTMLDivElement = document.createElement("div");
    document.getElementById("Fischkrrr").appendChild(elementErstellenZwei);
    let variableY : string = `<h1> ${hochHa}</h1>`;
    elementErstellenZwei.innerHTML = variableY;
    document.getElementById('classever').addEventListener('click', changeHTMLClass);
}
function changeHTMLClass(){
    document.getElementById("classever").className = "neueKlasse";
}




console.log("Valar Morghulis");


window.onload = function () {
    console.log("Valar Dohaeris");
  



function Aaa (){
    let hufeisen : string = "Die Anwort auf alles ist:";
    let elementErstellenZwei : HTMLDivElement = document.createElement("div");
    document.getElementById("zahleeen").appendChild(elementErstellenZwei);
    let variableY : string = `<p> ${hufeisen}</p>`;
    elementErstellenZwei.innerHTML = variableY;
}

function Muh(numeroUno=12, numeroDos=20 ){
    let summee:number = numeroUno + numeroDos; 
    console.log(summee)
    return summee;
   
}
Muh()




function Neuu(){
    document.getElementById("booBut").addEventListener("click", Neuu);
    let nochNeZahl : Number = 15;
    let nochEineZahl : Number = 100;
    let variBo : Boolean = (nochEineZahl > nochNeZahl);
    console.log(variBo);
  
}
Neuu()


Aaa()

function berechnen(){
    let zahl : number = 26;
    let zahlen : number = 17;
    zahlen = 16;
    let summe : number = zahl + zahlen; 
    console.log(summe);
    let elementErstellen : HTMLDivElement = document.createElement("div");
    document.getElementById("zahleeen").appendChild(elementErstellen);
    let variableX : string = `<p> ${summe}</p>`;
    elementErstellen.innerHTML = variableX;
}


berechnen()

function schrift(){
let text : string = "Versuche den Button zu  ";
let texte : string = "zu fangen!";
var beide : string = text + texte;
console.log(beide);
let elementErstellenZwei : HTMLDivElement = document.createElement("div");
document.getElementById("divTwo").appendChild(elementErstellenZwei);
let variableY : string = `<h2> ${beide}</h2>`;
elementErstellenZwei.innerHTML = variableY;

}


schrift()

document.getElementById("ButtonUno").addEventListener("click", aenderung);
function aenderung(){
   
    document.getElementById("Hus").innerHTML = "";
    let texter : string = "GAME OVER";
    console.log("Du warst du langsam! Du hast Verloren");
    let elementErstellenZwei : HTMLDivElement = document.createElement("div");
    document.getElementById("Hus").appendChild(elementErstellenZwei);
    let variableY : string = `<p> ${texter}</p>`;
    elementErstellenZwei.innerHTML = variableY;

}
function schriftZahl(){
    let Zahlie : number = 3 ;
    let Schriftie : string = " Chinesen mit nem' Kontrabass";
    console.log(Zahlie + Schriftie);
}
schriftZahl()

document.getElementById("ButtonDos").addEventListener("click", butti);
function butti(){
   
    document.getElementById("Fus").innerHTML = "";
    let butt : HTMLButtonElement = document.createElement("button");
    let stang : string = "☐ ☐ ☐ ☐ ☐ ☐";
    console.log("Glückwunsch! Du hast ein neues Stockwerk gebaut");
    let elementErstellene : HTMLDivElement = document.createElement("div");
    document.getElementById("ButtonDres").appendChild(elementErstellene);
    let variabler : string = `<p> ${stang}</p>`;
    elementErstellene.innerHTML = variabler;
}
butti ()

function neu(){
document.getElementById("zusatz");
let zzz : string = "Fang mich!";
let elementErstellenVier : HTMLButtonElement = document.createElement("button");
document.getElementById("zusatz").appendChild(elementErstellenVier);
let variableY : string = `<p> ${zzz}</p>`;
elementErstellenVier.innerHTML = variableY;
document.getElementById("zusatz").addEventListener("click", funk);


}
neu()


function funk(){
   
    document.getElementById("zusatz").innerHTML = "";
    let texter : string = "Daneben!";
    console.log(texter);
    let elementErstellenFunf : HTMLDivElement = document.createElement("div");
    document.getElementById("Hus").appendChild(elementErstellenFunf);
    let variableQ : string = `<p> ${texter}</p>`;
    elementErstellenFunf.innerHTML = variableQ;
    document.getElementById("zusatz").addEventListener("click", butti);


}



}





   /* Typescript is dark and full of terror */



