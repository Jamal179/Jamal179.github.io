window.addEventListener("load", geladen);
function geladen() {
    window.prompt("Hast du Lust zwei unnötige Spiele zu spielen?");
    let hochHa = "Baue ein Hochhaus!";
    console.log("Seidentofu wurde geladen");
    let elementErstellenZwei = document.createElement("div");
    document.getElementById("Fischkrrr").appendChild(elementErstellenZwei);
    let variableY = `<h1> ${hochHa}</h1>`;
    elementErstellenZwei.innerHTML = variableY;
    document.getElementById('classever').addEventListener('click', changeHTMLClass);
}
function changeHTMLClass() {
    document.getElementById("classever").className = "neueKlasse";
}
console.log("Valar Morghulis");
window.onload = function () {
    console.log("Valar Dohaeris");
    function Aaa() {
        let hufeisen = "Die Anwort auf alles ist:";
        let elementErstellenZwei = document.createElement("div");
        document.getElementById("zahleeen").appendChild(elementErstellenZwei);
        let variableY = `<p> ${hufeisen}</p>`;
        elementErstellenZwei.innerHTML = variableY;
    }
    function Muh(numeroUno = 12, numeroDos = 20) {
        let summee = numeroUno + numeroDos;
        console.log(summee);
        return summee;
    }
    Muh();
    function Neuu() {
        document.getElementById("booBut").addEventListener("click", Neuu);
        let nochNeZahl = 15;
        let nochEineZahl = 100;
        let variBo = (nochEineZahl > nochNeZahl);
        console.log(variBo);
    }
    Neuu();
    Aaa();
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
        let text = "Versuche den Button zu  ";
        let texte = "zu fangen!";
        var beide = text + texte;
        console.log(beide);
        let elementErstellenZwei = document.createElement("div");
        document.getElementById("divTwo").appendChild(elementErstellenZwei);
        let variableY = `<h2> ${beide}</h2>`;
        elementErstellenZwei.innerHTML = variableY;
    }
    schrift();
    document.getElementById("ButtonUno").addEventListener("click", aenderung);
    function aenderung() {
        document.getElementById("Hus").innerHTML = "";
        let texter = "GAME OVER";
        console.log("Du warst du langsam! Du hast Verloren");
        let elementErstellenZwei = document.createElement("div");
        document.getElementById("Hus").appendChild(elementErstellenZwei);
        let variableY = `<p> ${texter}</p>`;
        elementErstellenZwei.innerHTML = variableY;
    }
    function schriftZahl() {
        let Zahlie = 3;
        let Schriftie = " Chinesen mit nem' Kontrabass";
        console.log(Zahlie + Schriftie);
    }
    schriftZahl();
    document.getElementById("ButtonDos").addEventListener("click", butti);
    function butti() {
        document.getElementById("Fus").innerHTML = "";
        let butt = document.createElement("button");
        let stang = "☐ ☐ ☐ ☐ ☐ ☐";
        console.log("Glückwunsch! Du hast ein neues Stockwerk gebaut");
        let elementErstellene = document.createElement("div");
        document.getElementById("ButtonDres").appendChild(elementErstellene);
        let variabler = `<p> ${stang}</p>`;
        elementErstellene.innerHTML = variabler;
    }
    butti();
    function neu() {
        document.getElementById("zusatz");
        let zzz = "Fang mich!";
        let elementErstellenVier = document.createElement("button");
        document.getElementById("zusatz").appendChild(elementErstellenVier);
        let variableY = `<p> ${zzz}</p>`;
        elementErstellenVier.innerHTML = variableY;
        document.getElementById("zusatz").addEventListener("click", funk);
    }
    neu();
    function funk() {
        document.getElementById("zusatz").innerHTML = "";
        let texter = "Daneben!";
        console.log(texter);
        let elementErstellenFunf = document.createElement("div");
        document.getElementById("Hus").appendChild(elementErstellenFunf);
        let variableQ = `<p> ${texter}</p>`;
        elementErstellenFunf.innerHTML = variableQ;
        document.getElementById("zusatz").addEventListener("click", butti);
    }
};
/* Typescript is dark and full of terror */
//# sourceMappingURL=script.js.map