//////////////////////////////////////ANFANG////////////////////////////////////

let hanka: number

function hkartenanzahl(): number {
    let handkarten: string = prompt("Um zu beginnen, Tippe eine 6 ein", "");


    hanka = Number(handkarten);

    if (hanka != 6) {
        alert("Du hast keine 6 eingefügt! Ich gebe dir noch einen Versuch ")
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
}

interface KarteGegner {
    Wert: string;
    Typ: string;
    Reihenfolge: number;
}



//////////////////////////////////////ROT/////////////////////////////////////


let Karte1: Karte = {

    Wert: "1",
    Typ: "Red",
    Reihenfolge: 1,

}

let Karte2: Karte = {

    Wert: "2",
    Typ: "Red",
    Reihenfolge: 2,

}

let Karte3: Karte = {

    Wert: "3",
    Typ: "Red",
    Reihenfolge: 3,

}

let Karte4: Karte = {

    Wert: "4",
    Typ: "Red",
    Reihenfolge: 4,

}

let Karte5: Karte = {

    Wert: "5",
    Typ: "Red",
    Reihenfolge: 5,

}

let Karte6: Karte = {

    Wert: "6",
    Typ: "Red",
    Reihenfolge: 6,

}

let Karte7: Karte = {

    Wert: "7",
    Typ: "Red",
    Reihenfolge: 7,

}

let Karte8: Karte = {

    Wert: "8",
    Typ: "Red",
    Reihenfolge: 8,

}


let Karte9: Karte = {

    Wert: "9",
    Typ: "Red",
    Reihenfolge: 9,

}


let Karte10: Karte = {

    Wert: "10",
    Typ: "Red",
    Reihenfolge: 10,

}




//////////////////////////////////////GELB/////////////////////////////////////





let Karte11: Karte = {

    Wert: "1",
    Typ: "Gelb",
    Reihenfolge: 11,

}

let Karte12: Karte = {

    Wert: "2",
    Typ: "Gelb",
    Reihenfolge: 12,

}

let Karte13: Karte = {

    Wert: "3",
    Typ: "Gelb",
    Reihenfolge: 13,

}

let Karte14: Karte = {

    Wert: "4",
    Typ: "Gelb",
    Reihenfolge: 14,

}

let Karte15: Karte = {

    Wert: "5",
    Typ: "Gelb",
    Reihenfolge: 15,

}

let Karte16: Karte = {

    Wert: "6",
    Typ: "Gelb",
    Reihenfolge: 16,

}

let Karte17: Karte = {

    Wert: "7",
    Typ: "Gelb",
    Reihenfolge: 17,

}

let Karte18: Karte = {

    Wert: "8",
    Typ: "Gelb",
    Reihenfolge: 18,

}


let Karte19: Karte = {

    Wert: "9",
    Typ: "Gelb",
    Reihenfolge: 19,

}


let Karte20: Karte = {

    Wert: "10",
    Typ: "Gelb",
    Reihenfolge: 20,

}




//////////////////////////////////////BLAU/////////////////////////////////////




let Karte21: Karte = {

    Wert: "1",
    Typ: "Blau",
    Reihenfolge: 21,

}

let Karte22: Karte = {

    Wert: "2",
    Typ: "Blau",
    Reihenfolge: 22,

}

let Karte23: Karte = {

    Wert: "3",
    Typ: "Blau",
    Reihenfolge: 23,

}

let Karte24: Karte = {

    Wert: "4",
    Typ: "Blau",
    Reihenfolge: 24,

}

let Karte25: Karte = {

    Wert: "5",
    Typ: "Blau",
    Reihenfolge: 25,

}

let Karte26: Karte = {

    Wert: "6",
    Typ: "Blau",
    Reihenfolge: 26,

}

let Karte27: Karte = {

    Wert: "7",
    Typ: "Blau",
    Reihenfolge: 27,

}

let Karte28: Karte = {

    Wert: "8",
    Typ: "Blau",
    Reihenfolge: 28,

}


let Karte29: Karte = {

    Wert: "9",
    Typ: "Blau",
    Reihenfolge: 29,

}


let Karte30: Karte = {

    Wert: "10",
    Typ: "Blau",
    Reihenfolge: 30,

}

//////////////////////////////////////GRÜN/////////////////////////////////////

let Karte31: Karte = {

    Wert: "1",
    Typ: "Green",
    Reihenfolge: 31,

}

let Karte32: Karte = {

    Wert: "2",
    Typ: "Green",
    Reihenfolge: 32,

}

let Karte33: Karte = {

    Wert: "3",
    Typ: "Green",
    Reihenfolge: 33,

}

let Karte34: Karte = {

    Wert: "4",
    Typ: "Green",
    Reihenfolge: 34,

}

let Karte35: Karte = {

    Wert: "5",
    Typ: "Green",
    Reihenfolge: 35,

}

let Karte36: Karte = {

    Wert: "6",
    Typ: "Green",
    Reihenfolge: 36,

}

let Karte37: Karte = {

    Wert: "7",
    Typ: "Green",
    Reihenfolge: 37,

}

let Karte38: Karte = {

    Wert: "8",
    Typ: "Green",
    Reihenfolge: 38,

}


let Karte39: Karte = {

    Wert: "9",
    Typ: "Green",
    Reihenfolge: 39,

}


let Karte40: Karte = {

    Wert: "10",
    Typ: "Green",
    Reihenfolge: 40,

}







////////////////Gegner/////////////////



let Karte41: Karte = {

    Wert: "1",
    Typ: "Red",
    Reihenfolge: 1,

}

let Karte42: Karte = {

    Wert: "2",
    Typ: "Red",
    Reihenfolge: 2,

}

let Karte43: Karte = {

    Wert: "3",
    Typ: "Red",
    Reihenfolge: 3,

}

let Karte44: Karte = {

    Wert: "4",
    Typ: "Red",
    Reihenfolge: 4,

}

let Karte45: Karte = {

    Wert: "5",
    Typ: "Red",
    Reihenfolge: 5,

}

let Karte46: Karte = {

    Wert: "6",
    Typ: "Red",
    Reihenfolge: 6,

}

let Karte47: Karte = {

    Wert: "7",
    Typ: "Red",
    Reihenfolge: 7,

}

let Karte48: Karte = {

    Wert: "8",
    Typ: "Red",
    Reihenfolge: 8,

}


let Karte49: Karte = {

    Wert: "9",
    Typ: "Red",
    Reihenfolge: 9,

}


let Karte50: Karte = {

    Wert: "10",
    Typ: "Red",
    Reihenfolge: 10,

}




//////////////////////////////////////GELB/////////////////////////////////////





let Karte51: KarteGegner = {

    Wert: "1",
    Typ: "Gelb",
    Reihenfolge: 11,

}

let Karte52: KarteGegner = {

    Wert: "2",
    Typ: "Gelb",
    Reihenfolge: 12,

}

let Karte53: KarteGegner = {

    Wert: "3",
    Typ: "Gelb",
    Reihenfolge: 13,

}

let Karte54: KarteGegner = {

    Wert: "4",
    Typ: "Gelb",
    Reihenfolge: 14,

}

let Karte55: KarteGegner = {

    Wert: "5",
    Typ: "Gelb",
    Reihenfolge: 15,

}

let Karte56: KarteGegner = {

    Wert: "6",
    Typ: "Gelb",
    Reihenfolge: 16,

}

let Karte57: KarteGegner = {

    Wert: "7",
    Typ: "Gelb",
    Reihenfolge: 17,

}

let Karte58: KarteGegner = {

    Wert: "8",
    Typ: "Gelb",
    Reihenfolge: 18,

}


let Karte59: KarteGegner = {

    Wert: "9",
    Typ: "Gelb",
    Reihenfolge: 19,

}


let Karte60: KarteGegner = {

    Wert: "10",
    Typ: "Gelb",
    Reihenfolge: 20,

}




//////////////////////////////////////BLAU/////////////////////////////////////




let Karte61: KarteGegner = {

    Wert: "1",
    Typ: "Blau",
    Reihenfolge: 21,

}

let Karte62: KarteGegner = {

    Wert: "2",
    Typ: "Blau",
    Reihenfolge: 22,

}

let Karte63: KarteGegner = {

    Wert: "3",
    Typ: "Blau",
    Reihenfolge: 23,

}

let Karte64: KarteGegner = {

    Wert: "4",
    Typ: "Blau",
    Reihenfolge: 24,

}

let Karte65: KarteGegner = {

    Wert: "5",
    Typ: "Blau",
    Reihenfolge: 25,

}

let Karte66: KarteGegner = {

    Wert: "6",
    Typ: "Blau",
    Reihenfolge: 26,

}

let Karte67: KarteGegner = {

    Wert: "7",
    Typ: "Blau",
    Reihenfolge: 27,

}

let Karte68: KarteGegner = {

    Wert: "8",
    Typ: "Blau",
    Reihenfolge: 28,

}


let Karte69: KarteGegner = {

    Wert: "9",
    Typ: "Blau",
    Reihenfolge: 29,

}


let Karte70: KarteGegner = {

    Wert: "10",
    Typ: "Blau",
    Reihenfolge: 30,

}

//////////////////////////////////////GRÜN/////////////////////////////////////

let Karte71: KarteGegner = {

    Wert: "1",
    Typ: "Green",
    Reihenfolge: 31,

}

let Karte72: KarteGegner = {

    Wert: "2",
    Typ: "Green",
    Reihenfolge: 32,

}

let Karte73: KarteGegner = {

    Wert: "3",
    Typ: "Green",
    Reihenfolge: 33,

}

let Karte74: KarteGegner = {

    Wert: "4",
    Typ: "Green",
    Reihenfolge: 34,

}

let Karte75: KarteGegner = {

    Wert: "5",
    Typ: "Green",
    Reihenfolge: 35,

}

let Karte76: KarteGegner = {

    Wert: "6",
    Typ: "Green",
    Reihenfolge: 36,

}

let Karte77: KarteGegner = {

    Wert: "7",
    Typ: "Green",
    Reihenfolge: 37,

}

let Karte78: KarteGegner = {

    Wert: "8",
    Typ: "Green",
    Reihenfolge: 38,

}


let Karte79: KarteGegner = {

    Wert: "9",
    Typ: "Green",
    Reihenfolge: 39,

}


let Karte80: KarteGegner = {

    Wert: "10",
    Typ: "Green",
    Reihenfolge: 40,

}

//////////////////////////////////////ARRAY KARTENSTAPEL/////////////////////////////////////

let kartenStapel: Karte[] = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8,
    Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18,
    Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28,
    Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40];
//////////////////////////////////////GEGNER KARTENSTAPEL/////////////////////////////////////
let gegnerKarten: Karte[] = [Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48,
    Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58,
    Karte59, Karte60, Karte61, Karte62, Karte63, Karte6, Karte65, Karte66, Karte67, Karte68,
    Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80]

//////////////////////////////////////HANDKARTEN///////////////////////////////////////////



let kartenHand: Karte[] = [];
let kartenHand1: Karte[] = [];
let gegnerHand: Karte[] = [];
let x: number;
let y: number;
let ablegestapel: Karte[] = [];

////////////////////////////////////// WINDOW ONLOAD/////////////////////////////////////
window.onload = function () {
    var randomCard: Karte = kartenStapel[Math.floor((Math.random() * kartenStapel.length))];
    ablegestapel = [randomCard];
    console.log("bhjbdhjbdjch")
    for (let i: number = 0; i < kartenHand.length; i--) { //Nur die Anzahl im Array wird sotiert, dann hört Schleife auf 
        document.getElementById("kartenHand").innerHTML = "";
        let pprodElement = document.createElement('div');
        document.getElementById("ablagestapel").appendChild(pprodElement);


        let ablegekarte: string = `<div class="${randomCard.Typ}" id="${randomCard.Reihenfolge}"> ${randomCard.Wert}</div>`
        pprodElement.innerHTML = ablegekarte;



        writeHtml(i);
        writeHtml2(i)


    }
}

//////////////////////////////////////KARTEN VERTEILEN/////////////////////////////////////
function verteileKarten(): void {

    for (y = 0; y < hanka; y++) {
        x = Math.floor((Math.random() * kartenStapel.length));

        kartenHand.push(kartenStapel[x]);

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

function writeHtml2(_y: number) {

    let prodElement2 = document.createElement('div');
    document.getElementById("gegner").appendChild(prodElement2);
    let karte: string = `<div class="${kartenHand[_y].Typ}" id="${kartenHand[_y].Reihenfolge}">${kartenHand[_y].Wert}</div>`
    prodElement2.innerHTML = karte;




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

        if (kartenHand[s].Reihenfolge == Number(karteId.getAttribute("id"))) { //Muss von String zur Number werden um beide vergleichen zu können // läuft Karten im Hand Array einmal durch, wenn es zur geklickten ID passt wird es in den Ablagestapel gepushed
            if (kartenHand[s].Typ == ablegestapel[ablegestapel.length - 1].Typ || kartenHand[s].Wert == ablegestapel[ablegestapel.length - 1].Wert )   {
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

                }
            }
        i+=1;//}
        console.log(i);
        }
       
        s++;
    }

}