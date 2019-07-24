//////////////////////////////////////ANFANG////////////////////////////////////

let hanka: number

function hkartenanzahl(): number {
    let handkarten: string = prompt("Um zu beginnen, Tippe eine 5 ein", "");


    hanka = Number(handkarten);

    if (hanka != 5) {
        alert("Du hast keine 5 eingefügt! Ich gebe dir noch einen Versuch ")
        hkartenanzahl();
    }


    return hanka;
}

hkartenanzahl();

//////////////////////////////////////INTERFACE///////////////////////////////

interface Karte {
    Wert: string;
    Typ: string;
    Reihenfolge: number;
    WunschKarte: Boolean
    Rückseite: string;
}

interface KarteGegner {
    Wert: string;
    Typ: string;
    Reihenfolge: number;
    WunschKarte: Boolean
    Rückseite: string;
}



//////////////////////////////////////ROT/////////////////////////////////////


let Karte1: Karte = {

    Wert: "1",
    Typ: "Red",
    Reihenfolge: 1,
    WunschKarte:false,
     Rückseite: "normal",
    
}

let Karte2: Karte = {

    Wert: "2",
    Typ: "Red",
    Reihenfolge: 2,
    WunschKarte:false,
     Rückseite: "normal",
    
}

let Karte3: Karte = {

    Wert: "3",
    Typ: "Red",
    Reihenfolge: 3,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte4: Karte = {

    Wert: "4",
    Typ: "Red",
    Reihenfolge: 4,
  WunschKarte:false,
   Rückseite: "normal",
}

let Karte5: Karte = {

    Wert: "5",
    Typ: "Red",
    Reihenfolge: 5,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte6: Karte = {

    Wert: "6",
    Typ: "Red",
    Reihenfolge: 6,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte7: Karte = {

    Wert: "7",
    Typ: "Red",
    Reihenfolge: 7,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte8: Karte = {

    Wert: "8",
    Typ: "Red",
    Reihenfolge: 8,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte9: Karte = {

    Wert: "9",
    Typ: "Red",
    Reihenfolge: 9,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte10: Karte = {

    Wert: "10",
    Typ: "Red",
    Reihenfolge: 10,
    WunschKarte:false,
     Rückseite: "normal",
}




//////////////////////////////////////GELB/////////////////////////////////////





let Karte11: Karte = {

    Wert: "1",
    Typ: "Gelb",
    Reihenfolge: 11,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte12: Karte = {

    Wert: "2",
    Typ: "Gelb",
    Reihenfolge: 12,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte13: Karte = {

    Wert: "3",
    Typ: "Gelb",
    Reihenfolge: 13,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte14: Karte = {

    Wert: "4",
    Typ: "Gelb",
    Reihenfolge: 14,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte15: Karte = {

    Wert: "5",
    Typ: "Gelb",
    Reihenfolge: 15,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte16: Karte = {

    Wert: "6",
    Typ: "Gelb",
    Reihenfolge: 16,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte17: Karte = {

    Wert: "7",
    Typ: "Gelb",
    Reihenfolge: 17,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte18: Karte = {

    Wert: "8",
    Typ: "Gelb",
    Reihenfolge: 18,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte19: Karte = {

    Wert: "9",
    Typ: "Gelb",
    Reihenfolge: 19,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte20: Karte = {

    Wert: "10",
    Typ: "Gelb",
    Reihenfolge: 20,
    WunschKarte:false,
     Rückseite: "normal",
}




//////////////////////////////////////BLAU/////////////////////////////////////




let Karte21: Karte = {

    Wert: "1",
    Typ: "Blau",
    Reihenfolge: 21,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte22: Karte = {

    Wert: "2",
    Typ: "Blau",
    Reihenfolge: 22,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte23: Karte = {

    Wert: "3",
    Typ: "Blau",
    Reihenfolge: 23,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte24: Karte = {

    Wert: "4",
    Typ: "Blau",
    Reihenfolge: 24,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte25: Karte = {

    Wert: "5",
    Typ: "Blau",
    Reihenfolge: 25,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte26: Karte = {

    Wert: "6",
    Typ: "Blau",
    Reihenfolge: 26,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte27: Karte = {

    Wert: "7",
    Typ: "Blau",
    Reihenfolge: 27,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte28: Karte = {

    Wert: "8",
    Typ: "Blau",
    Reihenfolge: 28,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte29: Karte = {

    Wert: "9",
    Typ: "Blau",
    Reihenfolge: 29,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte30: Karte = {

    Wert: "10",
    Typ: "Blau",
    Reihenfolge: 30,
    WunschKarte:false,
     Rückseite: "normal",
}

//////////////////////////////////////GRÜN/////////////////////////////////////

let Karte31: Karte = {

    Wert: "1",
    Typ: "Green",
    Reihenfolge: 31,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte32: Karte = {

    Wert: "2",
    Typ: "Green",
    Reihenfolge: 32,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte33: Karte = {

    Wert: "3",
    Typ: "Green",
    Reihenfolge: 33,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte34: Karte = {

    Wert: "4",
    Typ: "Green",
    Reihenfolge: 34,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte35: Karte = {

    Wert: "5",
    Typ: "Green",
    Reihenfolge: 35,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte36: Karte = {

    Wert: "6",
    Typ: "Green",
    Reihenfolge: 36,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte37: Karte = {

    Wert: "7",
    Typ: "Green",
    Reihenfolge: 37,
    WunschKarte:false,
     Rückseite: "normal",
}

let Karte38: Karte = {

    Wert: "8",
    Typ: "Green",
    Reihenfolge: 38,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte39: Karte = {

    Wert: "9",
    Typ: "Green",
    Reihenfolge: 39,
    WunschKarte:false,
     Rückseite: "normal",
}


let Karte40: Karte = {

    Wert: "10",
    Typ: "Green",
    Reihenfolge: 40,
    WunschKarte:false,
     Rückseite: "normal",
}


/////////////////////

let wunschi1: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 37,
    WunschKarte:true,
     Rückseite: "normal",
}

let wunschi2: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 38,
    WunschKarte:true,
    Rückseite: "normal",
}


let wunschi3: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 39,
    WunschKarte:true,
    Rückseite: "normal",
}


let wunschi4: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 40,
    WunschKarte:true,
    Rückseite: "normal",
}

let wunschi5: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 37,
    WunschKarte:true,
    Rückseite: "normal",
}

let wunschi6: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 38,
    WunschKarte:true,
    Rückseite: "normal",
}


let wunschi7: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 39,
    WunschKarte:true,
    Rückseite: "normal",
}


let wunschi8: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 40,
    WunschKarte:true,
    Rückseite: "anders",
}






////////////////Gegner/////////////////



let Karte41: KarteGegner = {

    Wert: "1",
    Typ: "Red",
    Reihenfolge: 1,
    WunschKarte:false,
     Rückseite: "anders",
   
}

let Karte42: KarteGegner = {

    Wert: "2",
    Typ: "Red",
    Reihenfolge: 2,
    WunschKarte:false,
     Rückseite: "anders",
  
}

let Karte43: KarteGegner = {

    Wert: "3",
    Typ: "Red",
    Reihenfolge: 3,
    WunschKarte:false,
     Rückseite: "anders",
    
}

let Karte44: KarteGegner = {

    Wert: "4",
    Typ: "Red",
    Reihenfolge: 4,
    WunschKarte:false,
     Rückseite: "anders",
    
}

let Karte45: KarteGegner = {

    Wert: "5",
    Typ: "Red",
    Reihenfolge: 5,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte46: KarteGegner = {

    Wert: "6",
    Typ: "Red",
    Reihenfolge: 6,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte47: KarteGegner = {

    Wert: "7",
    Typ: "Red",
    Reihenfolge: 7,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte48: KarteGegner = {

    Wert: "8",
    Typ: "Red",
    Reihenfolge: 8,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte49: KarteGegner = {

    Wert: "9",
    Typ: "Red",
    Reihenfolge: 9,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte50: KarteGegner = {

    Wert: "10",
    Typ: "Red",
    Reihenfolge: 10,
    WunschKarte:false,
     Rückseite: "anders",
}




//////////////////////////////////////GELB/////////////////////////////////////





let Karte51: KarteGegner = {

    Wert: "1",
    Typ: "Gelb",
    Reihenfolge: 11,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte52: KarteGegner = {

    Wert: "2",
    Typ: "Gelb",
    Reihenfolge: 12,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte53: KarteGegner = {

    Wert: "3",
    Typ: "Gelb",
    Reihenfolge: 13,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte54: KarteGegner = {

    Wert: "4",
    Typ: "Gelb",
    Reihenfolge: 14,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte55: KarteGegner = {

    Wert: "5",
    Typ: "Gelb",
    Reihenfolge: 15,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte56: KarteGegner = {

    Wert: "6",
    Typ: "Gelb",
    Reihenfolge: 16,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte57: KarteGegner = {

    Wert: "7",
    Typ: "Gelb",
    Reihenfolge: 17,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte58: KarteGegner = {

    Wert: "8",
    Typ: "Gelb",
    Reihenfolge: 18,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte59: KarteGegner = {

    Wert: "9",
    Typ: "Gelb",
    Reihenfolge: 19,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte60: KarteGegner = {

    Wert: "10",
    Typ: "Gelb",
    Reihenfolge: 20,
    WunschKarte:false,
     Rückseite: "anders",
}




//////////////////////////////////////BLAU/////////////////////////////////////




let Karte61: KarteGegner = {

    Wert: "1",
    Typ: "Blau",
    Reihenfolge: 21,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte62: KarteGegner = {

    Wert: "2",
    Typ: "Blau",
    Reihenfolge: 22,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte63: KarteGegner = {

    Wert: "3",
    Typ: "Blau",
    Reihenfolge: 23,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte64: KarteGegner = {

    Wert: "4",
    Typ: "Blau",
    Reihenfolge: 24,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte65: KarteGegner = {

    Wert: "5",
    Typ: "Blau",
    Reihenfolge: 25,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte66: KarteGegner = {

    Wert: "6",
    Typ: "Blau",
    Reihenfolge: 26,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte67: KarteGegner = {

    Wert: "7",
    Typ: "Blau",
    Reihenfolge: 27,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte68: KarteGegner = {

    Wert: "8",
    Typ: "Blau",
    Reihenfolge: 28,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte69: KarteGegner = {

    Wert: "9",
    Typ: "Blau",
    Reihenfolge: 29,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte70: KarteGegner = {

    Wert: "10",
    Typ: "Blau",
    Reihenfolge: 30,
    WunschKarte:false,
     Rückseite: "anders",
}

//////////////////////////////////////GRÜN/////////////////////////////////////

let Karte71: KarteGegner = {

    Wert: "1",
    Typ: "Green",
    Reihenfolge: 31,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte72: KarteGegner = {

    Wert: "2",
    Typ: "Green",
    Reihenfolge: 32,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte73: KarteGegner = {

    Wert: "3",
    Typ: "Green",
    Reihenfolge: 33,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte74: KarteGegner = {

    Wert: "4",
    Typ: "Green",
    Reihenfolge: 34,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte75: KarteGegner = {

    Wert: "5",
    Typ: "Green",
    Reihenfolge: 35,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte76: KarteGegner = {

    Wert: "6",
    Typ: "Green",
    Reihenfolge: 36,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte77: KarteGegner = {

    Wert: "7",
    Typ: "Green",
    Reihenfolge: 37,
    WunschKarte:false,
     Rückseite: "anders",
}

let Karte78: KarteGegner = {

    Wert: "8",
    Typ: "Green",
    Reihenfolge: 38,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte79: KarteGegner = {

    Wert: "9",
    Typ: "Green",
    Reihenfolge: 39,
    WunschKarte:false,
     Rückseite: "anders",
}


let Karte80: KarteGegner = {

    Wert: "10",
    Typ: "Green",
    Reihenfolge: 40,
    WunschKarte:false,
     Rückseite: "anders",
}






let wunschi9: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 37,
    WunschKarte:true,
    Rückseite: "anders",
}

let wunschi10: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 38,
    WunschKarte:true,
    Rückseite: "anders",
}


let wunschi11: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 39,
    WunschKarte:true,
    Rückseite: "anders",
}


let wunschi12: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 40,
    WunschKarte:true,
    Rückseite: "anders",
}

let wunschi13: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 37,
    WunschKarte:true,
    Rückseite: "anders",
}

let wunschi14: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 38,
    WunschKarte:true,
    Rückseite: "anders",
}


let wunschi15: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 39,
    WunschKarte:true,
    Rückseite: "anders",
}


let wunschi16: Karte = {

    Wert: "",
    Typ: "Wish",
    Reihenfolge: 40,
    WunschKarte:true,
    Rückseite: "anders",
}





//////////////////////////////////////ARRAY KARTENSTAPEL/////////////////////////////////////

let kartenStapel: Karte[] = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8,
    Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18,
    Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28,
    Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40 , wunschi1, wunschi2, wunschi3, wunschi4 , wunschi5, wunschi6, wunschi7, wunschi8];
//////////////////////////////////////GEGNER KARTENSTAPEL/////////////////////////////////////
let gegnerKarten: KarteGegner[] = [Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48,
    Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58,
    Karte59, Karte60, Karte61, Karte62, Karte63, Karte6, Karte65, Karte66, Karte67, Karte68,
    Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80, wunschi9, wunschi10 , wunschi11, wunschi12, wunschi13 , wunschi14, wunschi15, wunschi16]

//////////////////////////////////////HANDKARTEN///////////////////////////////////////////



let kartenHand: Karte[] = [];
let kartenHand1: Karte[] = [];
let gegnerHand: KarteGegner[] = [];
let x: number;
let v: number;
let y: number;
let y6: number;
let ablegestapel: Karte[] = [];

////////////////////////////////////// WINDOW ONLOAD/////////////////////////////////////
window.onload = function () {
    var randomCard: Karte = kartenStapel[Math.floor((Math.random() * kartenStapel.length))];
    ablegestapel = [randomCard];
    console.log("bhjbdhjbdjch")
    for (let i: number = kartenHand.length; i > 0 ; i--) { //Nur die Anzahl im Array wird sotiert, dann hört Schleife auf 
        document.getElementById("kartenHand").innerHTML = "";
        let pprodElement = document.createElement('div');
        document.getElementById("ablagestapel").appendChild(pprodElement);


        let ablegekarte: string = `<div class="${randomCard.Typ}" id="${randomCard.Reihenfolge}"> ${randomCard.Wert}</div>`
        pprodElement.innerHTML = ablegekarte;

    

        writeHtml(i);
        writeHtml2(i)

        function Onload2(){
            var randomCard2: KarteGegner = gegnerKarten[Math.floor((Math.random() * gegnerKarten.length ))];
            ablegestapel = [randomCard2];
            console.log("bhjbdhjbdjch")
            for (let i: number = gegnerHand.length; i > 0 ; i++) { //Nur die Anzahl im Array wird sotiert, dann hört Schleife auf 
                document.getElementById("gegner").innerHTML = "";
                let pprodElement = document.createElement('div');
                document.getElementById("ablagestapel").appendChild(pprodElement);
        
        
                let ablegekarten: string = `<div class="${randomCard2.Typ}" id="${randomCard2.Reihenfolge}"> ${randomCard2.Wert}</div>`
                pprodElement.innerHTML = ablegekarten;
               
           }
    
         
        }
    }
    Onload2()
}


//////////////////////////////////////KARTEN VERTEILEN/////////////////////////////////////
function verteileKarten(): void {

    for (y = 0; y < hanka; y++)
    
    
    {
        x = Math.floor((Math.random() * kartenStapel.length));
        v = Math.floor((Math.random() * kartenStapel.length));
        

        kartenHand.push(kartenStapel[x]);
        gegnerHand.push(gegnerKarten[v]);

        writeHtml(y);
        writeHtml2(y)

        kartenStapel.splice(x, 1);

    }
}

verteileKarten();





//////////////////////////////////////KARTEN SORTIEREN/////////////////////////////////////
document.getElementById("sortieren").addEventListener("click", sortiereKarten);

function sortiereKarten() {
    console.log("Works.")
    kartenHand.sort(vergleich);
    //////////////////////////////////////SORTIEREN 2. VERGLEICH/////////////////////////////////////
    document.getElementById("kartenHand").innerHTML = ""; //Alle Karten in dem Div werden gelöscht
    for (let i: number = 0; i < kartenHand.length; i++) { //Nur die Anzahl im Array wird sotiert, dann hört Schleife auf 
        writeHtml(i);
    }
}

//////////////////////////////////////VERGLEICH/////////////////////////////////////
function vergleich(a: Karte, b: Karte): number {



    let typ1 = a.Typ;
    let typ2 = b.Typ;

    if (typ1 > typ2) {
        return 1;
    }

    if (typ1 < typ2) {
        return -1;
    }

    else { return 0 }
}

//////////////////////////////////////WRITE HTML 1/////////////////////////////////////

function writeHtml(_y: number) {

    let prodElement2 = document.createElement('div');
    document.getElementById("kartenHand").appendChild(prodElement2);
    let karte: string = `<div class="${kartenHand[_y].Typ}" id="${kartenHand[_y].Reihenfolge}">${kartenHand[_y].Wert}</div>`
    prodElement2.innerHTML = karte;




}

//////////////////////////////////////WRITE HTML 2/////////////////////////////////////

function writeHtml2(_y1: number) {

    let prodElement3 = document.createElement('div');
    document.getElementById("gegner").appendChild(prodElement3);
    let kartennn: string = `<div class="${gegnerHand[_y1].Typ}" id="${gegnerHand[_y1].Reihenfolge}">${gegnerHand[_y1].Wert}</div>`
    prodElement3.innerHTML = kartennn;




}


//////////////////////////////////////KARTE ZIEHEN/////////////////////////////////////

document.getElementById("stapel").addEventListener("click", zieheEineKarte);





function zieheEineKarte(): void {

    if (kartenStapel.length > 0) {

        let k: number;
        k = Math.floor((Math.random() * kartenStapel.length));

        let prodElement = document.createElement('div');
        document.getElementById("kartenHand").appendChild(prodElement);

        kartenHand.push(kartenStapel[k]);


        let karteziehen: string = `<div class="${kartenStapel[k].Typ}"> ${kartenStapel[k].Typ} ${kartenStapel[k].Wert} </div>`
        prodElement.innerHTML = karteziehen;

        kartenStapel.splice(k, 1);

        document.getElementById("kartenHand").innerHTML = ""; //leeren um den Array Bereich mit dem erstellten Array erneut zu füllen. Verhindert, dass ich beim Karten ablegen, gezogene Karten vor dem sortieren nicht ablegen kann.
        for (let v: number = 0; v < kartenHand.length; v++) {
            writeHtml(v);
        }
    }

    else {
        alert("KARTEN SIND LEER");
    }

}



/*Karten ablegen*/


document.getElementById("kartenHand").addEventListener("click", karteAblegen) //Wenn irgendwo im kartenHand Bereich geklickt wird, wird der Auslöser ermittelt

function karteAblegen(event: MouseEvent): void {


    let s: number = 0;
    let i: number = 0;

    while (s < kartenHand.length) {

        let karteId: HTMLElement = <HTMLElement>event.target;
        console.log(kartenHand.length)                       
        if (ablegestapel.length >3 && kartenHand.length == 0 ){
            alert("Du hast gewonnen!");
            console.log("Du hast gewonnen!")
        }
        else if (ablegestapel.length > 3 && gegnerHand.length ==0){
            alert("Du hast verloren!");
            console.log("Du hast verloren!")
        }

        if (kartenHand[s].Reihenfolge == Number(karteId.getAttribute("id"))) { //Muss von String zur Number werden um beide vergleichen zu können // läuft Karten im Hand Array einmal durch, wenn es zur geklickten ID passt wird es in den Ablagestapel gepushed
            if (kartenHand[s].Typ == ablegestapel[ablegestapel.length - 1].Typ || kartenHand[s].Wert == ablegestapel[ablegestapel.length - 1].Wert || kartenHand[s].WunschKarte != ablegestapel[ablegestapel.length - 1].WunschKarte  )   {
            ablegestapel.push(kartenHand[s]);
           // for(let i: number =0; i < ablegestapel.length; i++){
                
        

                let prodElement = document.createElement('div');
                document.getElementById("ablagestapel").appendChild(prodElement);
                let ablegekarte: string = `<div class="${kartenHand[s].Typ}" id="${kartenHand[s].Reihenfolge}"> ${kartenHand[s].Wert}</div>`
                prodElement.innerHTML = ablegekarte;

                kartenHand.splice(s, 1);
                document.getElementById("kartenHand").innerHTML = "";

                for (let o: number = 0; o < kartenHand.length; o++) {

                    writeHtml(o); // Der neue KartenHand Bereich/Array muss nun wieder neu dargestellt werden, das sonst die Karte nicht verschwindet
                     VariableX  = kartenHand[s]
                }
                computerGegner(VariableX);
            }
        i+=1;//}
        console.log(i);
        }
       
        s++;
    }

}
let VariableX : Karte;
                            
if (kartenHand.length > 0 && ablegestapel.length > 4){
    alert("Du hast gewonnen!");
    console.log("Du hast gewonnen!")
}

function computerGegner(_meineKarte : Karte){console.log(kartenHand.length + "hallo")
    let s: number = 0;
    for(let he : number = 0; he< gegnerHand.length; he++ ){ console.log(gegnerHand + "bla")
        if(gegnerHand[he].Typ == ablegestapel[ablegestapel.length - 1].Typ || gegnerHand[he].Wert == ablegestapel[ablegestapel.length - 1].Wert || gegnerHand[he].WunschKarte != ablegestapel[ablegestapel.length - 1].WunschKarte  ){

            let prodElement = document.createElement('div');
            document.getElementById("ablagestapel").appendChild(prodElement);
            let ablegekarte: string = `<div class="${gegnerHand[he].Typ}" id="${gegnerHand[he].Reihenfolge}"> ${gegnerHand[he].Wert}</div>`
            prodElement.innerHTML = ablegekarte;

            gegnerHand.splice(he, 1);

            var times = 1;
            for(var i=0; i < times; i++){
                doSomething();
            }
            function doSomething(){
           
            document.getElementById("gegner").innerHTML = "";}}
            writeHtml2(s)

          
            
            
console.log("ich bin in der if b.")
        }
        
        {
            
        }
        
    
    
   

    
    
   
    
    
   // if (kartenHand[s].Typ == ablegestapel[ablegestapel.length - 1].Typ || kartenHand[s].Wert == ablegestapel[ablegestapel.length - 1].Wert || kartenHand[s].WunschKarte != ablegestapel[ablegestapel.length - 1].WunschKarte  )   {

    }