window.addEventListener("load", geladen);
function geladen() {
    let hufeisen = "Seidentofu wurde geladen";
    let elementErstellenZwei = document.createElement("div");
    document.getElementById("Fischkrrr").appendChild(elementErstellenZwei);
    let variableY = `<p> ${hufeisen}</p>`;
    elementErstellenZwei.innerHTML = variableY;
}
console.log("Valar Morghulis");
window.onload = function () {
    console.log("Valar Dohaeris");
    //function changeIt() {
    // ('Warum verstehst du das wort >NICHT< nicht?!');
    //}
    //changeIt()
    function berechnen() {
        let zahl = 26;
        let zahlen = 17;
        zahlen = 16;
        let summe = zahl + zahlen;
        console.log(summe);
        let elementErstellen = document.createElement("div");
        document.getElementById("zahleeen").appendChild(elementErstellen);
        let variableX = `<p> ${summe}</p>`;
        elementErstellen.innerHTML = variableX;
    }
    berechnen();
    function schrift() {
        let text = "Steingabelfuß ";
        let texte = "Siamesischer Kampffisch";
        var beide = text + texte;
        console.log(beide);
        let elementErstellenZwei = document.createElement("div");
        document.getElementById("zahleeen").appendChild(elementErstellenZwei);
        let variableY = `<p> ${beide}</p>`;
        elementErstellenZwei.innerHTML = variableY;
    }
    schrift();
    document.getElementById("Banane").addEventListener("click", aenderung);
    function aenderung() {
        document.getElementById("Hus").innerHTML = "";
        let texter = "Baumus";
        console.log(texter);
        let elementErstellenZwei = document.createElement("div");
        document.getElementById("Hus").appendChild(elementErstellenZwei);
        let variableY = `<p> ${texter}</p>`;
        elementErstellenZwei.innerHTML = variableY;
    }
    function neu() {
        document.getElementById("zusatz");
        let zzz = "Noch ein Button";
        let elementErstellenVier = document.createElement("button");
        document.getElementById("zahleeen").appendChild(elementErstellenVier);
        let variableY = `<p> ${zzz}</p>`;
        elementErstellenVier.innerHTML = variableY;
        document.getElementById("zusatz").addEventListener("click", funk);
    }
    neu();
    function funk() {
        document.getElementById("zusatz").innerHTML = "";
        let XXX = "Geändert";
        let elementErstellenFunf = document.createElement("div");
        document.getElementById("zusatz").appendChild(elementErstellenFunf);
        let variableQ = `<p> ${XXX}</p>`;
        elementErstellenFunf.innerHTML = variableQ;
    }
};
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
//# sourceMappingURL=script.js.map