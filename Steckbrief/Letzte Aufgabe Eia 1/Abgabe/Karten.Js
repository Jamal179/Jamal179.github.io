//////////////////////////////////////ANFANG////////////////////////////////////
let hanka;
function hkartenanzahl() {
    let handkarten = prompt("Um zu beginnen, Tippe eine 6 ein", "");
    hanka = Number(handkarten);
    if (hanka != 6) {
        alert("Du hast keine 6 eingefügt! Ich gebe dir noch einen Versuch ");
        hkartenanzahl();
    }
    return hanka;
}
hkartenanzahl();
//////////////////////////////////////ROT/////////////////////////////////////
let Karte1 = {
    Wert: "1",
    Typ: "Red",
    Reihenfolge: 1,
};
let Karte2 = {
    Wert: "2",
    Typ: "Red",
    Reihenfolge: 2,
};
let Karte3 = {
    Wert: "3",
    Typ: "Red",
    Reihenfolge: 3,
};
let Karte4 = {
    Wert: "4",
    Typ: "Red",
    Reihenfolge: 4,
};
let Karte5 = {
    Wert: "5",
    Typ: "Red",
    Reihenfolge: 5,
};
let Karte6 = {
    Wert: "6",
    Typ: "Red",
    Reihenfolge: 6,
};
let Karte7 = {
    Wert: "7",
    Typ: "Red",
    Reihenfolge: 7,
};
let Karte8 = {
    Wert: "8",
    Typ: "Red",
    Reihenfolge: 8,
};
let Karte9 = {
    Wert: "9",
    Typ: "Red",
    Reihenfolge: 9,
};
let Karte10 = {
    Wert: "10",
    Typ: "Red",
    Reihenfolge: 10,
};
//////////////////////////////////////GELB/////////////////////////////////////
let Karte11 = {
    Wert: "1",
    Typ: "Gelb",
    Reihenfolge: 11,
};
let Karte12 = {
    Wert: "2",
    Typ: "Gelb",
    Reihenfolge: 12,
};
let Karte13 = {
    Wert: "3",
    Typ: "Gelb",
    Reihenfolge: 13,
};
let Karte14 = {
    Wert: "4",
    Typ: "Gelb",
    Reihenfolge: 14,
};
let Karte15 = {
    Wert: "5",
    Typ: "Gelb",
    Reihenfolge: 15,
};
let Karte16 = {
    Wert: "6",
    Typ: "Gelb",
    Reihenfolge: 16,
};
let Karte17 = {
    Wert: "7",
    Typ: "Gelb",
    Reihenfolge: 17,
};
let Karte18 = {
    Wert: "8",
    Typ: "Gelb",
    Reihenfolge: 18,
};
let Karte19 = {
    Wert: "9",
    Typ: "Gelb",
    Reihenfolge: 19,
};
let Karte20 = {
    Wert: "10",
    Typ: "Gelb",
    Reihenfolge: 20,
};
//////////////////////////////////////BLAU/////////////////////////////////////
let Karte21 = {
    Wert: "1",
    Typ: "Blau",
    Reihenfolge: 21,
};
let Karte22 = {
    Wert: "2",
    Typ: "Blau",
    Reihenfolge: 22,
};
let Karte23 = {
    Wert: "3",
    Typ: "Blau",
    Reihenfolge: 23,
};
let Karte24 = {
    Wert: "4",
    Typ: "Blau",
    Reihenfolge: 24,
};
let Karte25 = {
    Wert: "5",
    Typ: "Blau",
    Reihenfolge: 25,
};
let Karte26 = {
    Wert: "6",
    Typ: "Blau",
    Reihenfolge: 26,
};
let Karte27 = {
    Wert: "7",
    Typ: "Blau",
    Reihenfolge: 27,
};
let Karte28 = {
    Wert: "8",
    Typ: "Blau",
    Reihenfolge: 28,
};
let Karte29 = {
    Wert: "9",
    Typ: "Blau",
    Reihenfolge: 29,
};
let Karte30 = {
    Wert: "10",
    Typ: "Blau",
    Reihenfolge: 30,
};
//////////////////////////////////////GRÜN/////////////////////////////////////
let Karte31 = {
    Wert: "1",
    Typ: "Green",
    Reihenfolge: 31,
};
let Karte32 = {
    Wert: "2",
    Typ: "Green",
    Reihenfolge: 32,
};
let Karte33 = {
    Wert: "3",
    Typ: "Green",
    Reihenfolge: 33,
};
let Karte34 = {
    Wert: "4",
    Typ: "Green",
    Reihenfolge: 34,
};
let Karte35 = {
    Wert: "5",
    Typ: "Green",
    Reihenfolge: 35,
};
let Karte36 = {
    Wert: "6",
    Typ: "Green",
    Reihenfolge: 36,
};
let Karte37 = {
    Wert: "7",
    Typ: "Green",
    Reihenfolge: 37,
};
let Karte38 = {
    Wert: "8",
    Typ: "Green",
    Reihenfolge: 38,
};
let Karte39 = {
    Wert: "9",
    Typ: "Green",
    Reihenfolge: 39,
};
let Karte40 = {
    Wert: "10",
    Typ: "Green",
    Reihenfolge: 40,
};
////////////////Gegner/////////////////
let Karte41 = {
    Wert: "1",
    Typ: "Red",
    Reihenfolge: 1,
};
let Karte42 = {
    Wert: "2",
    Typ: "Red",
    Reihenfolge: 2,
};
let Karte43 = {
    Wert: "3",
    Typ: "Red",
    Reihenfolge: 3,
};
let Karte44 = {
    Wert: "4",
    Typ: "Red",
    Reihenfolge: 4,
};
let Karte45 = {
    Wert: "5",
    Typ: "Red",
    Reihenfolge: 5,
};
let Karte46 = {
    Wert: "6",
    Typ: "Red",
    Reihenfolge: 6,
};
let Karte47 = {
    Wert: "7",
    Typ: "Red",
    Reihenfolge: 7,
};
let Karte48 = {
    Wert: "8",
    Typ: "Red",
    Reihenfolge: 8,
};
let Karte49 = {
    Wert: "9",
    Typ: "Red",
    Reihenfolge: 9,
};
let Karte50 = {
    Wert: "10",
    Typ: "Red",
    Reihenfolge: 10,
};
//////////////////////////////////////GELB/////////////////////////////////////
let Karte51 = {
    Wert: "1",
    Typ: "Gelb",
    Reihenfolge: 11,
};
let Karte52 = {
    Wert: "2",
    Typ: "Gelb",
    Reihenfolge: 12,
};
let Karte53 = {
    Wert: "3",
    Typ: "Gelb",
    Reihenfolge: 13,
};
let Karte54 = {
    Wert: "4",
    Typ: "Gelb",
    Reihenfolge: 14,
};
let Karte55 = {
    Wert: "5",
    Typ: "Gelb",
    Reihenfolge: 15,
};
let Karte56 = {
    Wert: "6",
    Typ: "Gelb",
    Reihenfolge: 16,
};
let Karte57 = {
    Wert: "7",
    Typ: "Gelb",
    Reihenfolge: 17,
};
let Karte58 = {
    Wert: "8",
    Typ: "Gelb",
    Reihenfolge: 18,
};
let Karte59 = {
    Wert: "9",
    Typ: "Gelb",
    Reihenfolge: 19,
};
let Karte60 = {
    Wert: "10",
    Typ: "Gelb",
    Reihenfolge: 20,
};
//////////////////////////////////////BLAU/////////////////////////////////////
let Karte61 = {
    Wert: "1",
    Typ: "Blau",
    Reihenfolge: 21,
};
let Karte62 = {
    Wert: "2",
    Typ: "Blau",
    Reihenfolge: 22,
};
let Karte63 = {
    Wert: "3",
    Typ: "Blau",
    Reihenfolge: 23,
};
let Karte64 = {
    Wert: "4",
    Typ: "Blau",
    Reihenfolge: 24,
};
let Karte65 = {
    Wert: "5",
    Typ: "Blau",
    Reihenfolge: 25,
};
let Karte66 = {
    Wert: "6",
    Typ: "Blau",
    Reihenfolge: 26,
};
let Karte67 = {
    Wert: "7",
    Typ: "Blau",
    Reihenfolge: 27,
};
let Karte68 = {
    Wert: "8",
    Typ: "Blau",
    Reihenfolge: 28,
};
let Karte69 = {
    Wert: "9",
    Typ: "Blau",
    Reihenfolge: 29,
};
let Karte70 = {
    Wert: "10",
    Typ: "Blau",
    Reihenfolge: 30,
};
//////////////////////////////////////GRÜN/////////////////////////////////////
let Karte71 = {
    Wert: "1",
    Typ: "Green",
    Reihenfolge: 31,
};
let Karte72 = {
    Wert: "2",
    Typ: "Green",
    Reihenfolge: 32,
};
let Karte73 = {
    Wert: "3",
    Typ: "Green",
    Reihenfolge: 33,
};
let Karte74 = {
    Wert: "4",
    Typ: "Green",
    Reihenfolge: 34,
};
let Karte75 = {
    Wert: "5",
    Typ: "Green",
    Reihenfolge: 35,
};
let Karte76 = {
    Wert: "6",
    Typ: "Green",
    Reihenfolge: 36,
};
let Karte77 = {
    Wert: "7",
    Typ: "Green",
    Reihenfolge: 37,
};
let Karte78 = {
    Wert: "8",
    Typ: "Green",
    Reihenfolge: 38,
};
let Karte79 = {
    Wert: "9",
    Typ: "Green",
    Reihenfolge: 39,
};
let Karte80 = {
    Wert: "10",
    Typ: "Green",
    Reihenfolge: 40,
};
//////////////////////////////////////ARRAY KARTENSTAPEL/////////////////////////////////////
let kartenStapel = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8,
    Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18,
    Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28,
    Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40];
//////////////////////////////////////GEGNER KARTENSTAPEL/////////////////////////////////////
let gegnerKarten = [Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48,
    Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58,
    Karte59, Karte60, Karte61, Karte62, Karte63, Karte6, Karte65, Karte66, Karte67, Karte68,
    Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80];
//////////////////////////////////////HANDKARTEN///////////////////////////////////////////
let kartenHand = [];
let kartenHand1 = [];
let gegnerHand = [];
let x;
let y;
let ablegestapel = [];
////////////////////////////////////// WINDOW ONLOAD/////////////////////////////////////
window.onload = function () {
    var randomCard = kartenStapel[Math.floor((Math.random() * kartenStapel.length))];
    ablegestapel = [randomCard];
    console.log("bhjbdhjbdjch");
    for (let i = 0; i < kartenHand.length; i--) { //Nur die Anzahl im Array wird sotiert, dann hört Schleife auf 
        document.getElementById("kartenHand").innerHTML = "";
        let pprodElement = document.createElement('div');
        document.getElementById("ablagestapel").appendChild(pprodElement);
        let ablegekarte = `<div class="${randomCard.Typ}" id="${randomCard.Reihenfolge}"> ${randomCard.Wert}</div>`;
        pprodElement.innerHTML = ablegekarte;
        writeHtml(i);
        writeHtml2(i);
    }
};
//////////////////////////////////////KARTEN VERTEILEN/////////////////////////////////////
function verteileKarten() {
    for (y = 0; y < hanka; y++) {
        x = Math.floor((Math.random() * kartenStapel.length));
        kartenHand.push(kartenStapel[x]);
        writeHtml(y);
        writeHtml2(y);
        kartenStapel.splice(x, 1);
    }
}
verteileKarten();
//////////////////////////////////////KARTEN SORTIEREN/////////////////////////////////////
document.getElementById("sortieren").addEventListener("click", sortiereKarten);
function sortiereKarten() {
    console.log("Works.");
    kartenHand.sort(vergleich);
    //////////////////////////////////////SORTIEREN 2. VERGLEICH/////////////////////////////////////
    document.getElementById("kartenHand").innerHTML = ""; //Alle Karten in dem Div werden gelöscht
    for (let i = 0; i < kartenHand.length; i++) { //Nur die Anzahl im Array wird sotiert, dann hört Schleife auf 
        writeHtml(i);
    }
}
//////////////////////////////////////VERGLEICH/////////////////////////////////////
function vergleich(a, b) {
    let typ1 = a.Typ;
    let typ2 = b.Typ;
    if (typ1 > typ2) {
        return 1;
    }
    if (typ1 < typ2) {
        return -1;
    }
    else {
        return 0;
    }
}
//////////////////////////////////////WRITE HTML 1/////////////////////////////////////
function writeHtml(_y) {
    let prodElement2 = document.createElement('div');
    document.getElementById("kartenHand").appendChild(prodElement2);
    let karte = `<div class="${kartenHand[_y].Typ}" id="${kartenHand[_y].Reihenfolge}">${kartenHand[_y].Wert}</div>`;
    prodElement2.innerHTML = karte;
}
//////////////////////////////////////WRITE HTML 2/////////////////////////////////////
function writeHtml2(_y) {
    let prodElement2 = document.createElement('div');
    document.getElementById("gegner").appendChild(prodElement2);
    let karte = `<div class="${kartenHand[_y].Typ}" id="${kartenHand[_y].Reihenfolge}">${kartenHand[_y].Wert}</div>`;
    prodElement2.innerHTML = karte;
}
//////////////////////////////////////KARTE ZIEHEN/////////////////////////////////////
document.getElementById("stapel").addEventListener("click", zieheEineKarte);
function zieheEineKarte() {
    if (kartenStapel.length > 0) {
        let k;
        k = Math.floor((Math.random() * kartenStapel.length));
        let prodElement = document.createElement('div');
        document.getElementById("kartenHand").appendChild(prodElement);
        kartenHand.push(kartenStapel[k]);
        let karteziehen = `<div class="${kartenStapel[k].Typ}"> ${kartenStapel[k].Typ} ${kartenStapel[k].Wert} </div>`;
        prodElement.innerHTML = karteziehen;
        kartenStapel.splice(k, 1);
        document.getElementById("kartenHand").innerHTML = ""; //leeren um den Array Bereich mit dem erstellten Array erneut zu füllen. Verhindert, dass ich beim Karten ablegen, gezogene Karten vor dem sortieren nicht ablegen kann.
        for (let v = 0; v < kartenHand.length; v++) {
            writeHtml(v);
        }
    }
    else {
        alert("KARTEN SIND LEER");
    }
}
/*Karten ablegen*/
document.getElementById("kartenHand").addEventListener("click", karteAblegen); //Wenn irgendwo im kartenHand Bereich geklickt wird, wird der Auslöser ermittelt
function karteAblegen(event) {
    let s = 0;
    let i = 0;
    while (s < kartenHand.length) {
        let karteId = event.target;
        if (kartenHand[s].Reihenfolge == Number(karteId.getAttribute("id"))) { //Muss von String zur Number werden um beide vergleichen zu können // läuft Karten im Hand Array einmal durch, wenn es zur geklickten ID passt wird es in den Ablagestapel gepushed
            if (kartenHand[s].Typ == ablegestapel[ablegestapel.length - 1].Typ || kartenHand[s].Wert == ablegestapel[ablegestapel.length - 1].Wert) {
                ablegestapel.push(kartenHand[s]);
                // for(let i: number =0; i < ablegestapel.length; i++){
                let prodElement = document.createElement('div');
                document.getElementById("ablagestapel").appendChild(prodElement);
                let ablegekarte = `<div class="${kartenHand[s].Typ}" id="${kartenHand[s].Reihenfolge}"> ${kartenHand[s].Wert}</div>`;
                prodElement.innerHTML = ablegekarte;
                kartenHand.splice(s, 1);
                document.getElementById("kartenHand").innerHTML = "";
                for (let o = 0; o < kartenHand.length; o++) {
                    writeHtml(o); // Der neue KartenHand Bereich/Array muss nun wieder neu dargestellt werden, das sonst die Karte nicht verschwindet
                }
            }
            i += 1; //}
            console.log(i);
        }
        s++;
    }
}
//# sourceMappingURL=Karten.js.map