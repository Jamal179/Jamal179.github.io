

interface Monster {
    monsterName : string; 
    monsterHealthPoints : number; 
    monsterExperience : number; 
    monsterModifier : string []; 
    monsterLebensraum : string;
    monsterBild : string;
    monsterLevel : number;
}




let monsterHolder : string = "monsterHoldingCell";                                  // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName : string = "Spielername";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP : number =0;                                                          // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel : number = 1000;                                                // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.


let prefix : string[] = ["todesmutiger", "schrumpfhörniger", "nach Käse schnüffelnder ", "knallrümpfiger", "Gelbfüßiger", "Salzleckstein begehrender", "Waschmittel inhalierender", " pyromanischer", " Flamingo reitender", " im Kühlschrank vergessener", ];
let monsterName : string[] = [" Guhl", " Schlickschlupf", " Göttling", " Gabelschwanz", " Shinigami", " Eselsbrückeningenieur", " Waldschrat", " Busch", " Sandalenträger", " Kaugummi", " Killerjoghurt",]; 
let suffix : string[] = [" aus dem Buckelsumpf", " der im dunkeln Leuchtet", " mit Seifenspender-Funktion", " mit Wackelpudding Phobie", " mit implantierten Hosenbein", " der Affenfußarmee", " der denkt er sei ein Radiergummi", " mit neuer Hüfte" , " mit Paradontose" , " der ohne Helm Fahrrad fährt", " der seine gallenblase verlegt hat" , " mit psychopatischer Fliege im Kopf"]; 

let monsterModifers : string[] = ["wasserfest", "Analphabet", "hat Angst vor Göffel-Zinken", "stinkt", "stubenrein", "spielsüchtig", "aggressiv", "elegant", "rassistisch", "menschenscheu", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterLebensraum: string[] = ["Hochebene" , "Mordor", "Velen", "Westeros", "Namek", "Vertania-City",]
let monsterBild: string[] = ["imgs/ga.JPG", "imgs/g.JPG", "imgs/gu.JPG" , "imgs/sch.JPG",  "imgs/e.JPG", "imgs/pok.JPG", "imgs/goll.JPG", "imgs/poki.JPG" , "imgs/mosk.JPG",  ]
let monsterLevel : number [] = [1, 2, 3, 4, ,5 ,6, ,7, 8, 9, 10, 11, 12, 13 ,14 ,15 ,16 , 17, 18, 19, 20];





let monsterArray : Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray ); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.


window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log("" + document.getElementById("monsterSpawner").innerHTML); 
}




function generateMonster()
{
    let newNr: number = getRNGNumber(4) ;

    for (let i: number = 0; i < newNr; i++) {
    let newMonsterName :string = generateMonsterName();          
    let newMonsterModifier :string[] = generateMonsterModifer();      
    let newMonsterLebensraum :string = generateMonsterLebensraum()
    let newMonsterBild :string = generateMonsterBild()
    let newMonsterHP :number = generateMonsterHitPoints();         
    let newMonsterXP :number = generateMonsterXP();  
    let newMonsterLevel : number = generateMonsterLevel() 

    

    let newMonster : Monster = {                      
        monsterName : newMonsterName, 
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        monsterBild : newMonsterBild,
        monsterLebensraum : newMonsterLebensraum,
        monsterLevel : newMonsterLevel,
    
    };

    monsterArray.push(newMonster);                                 
    updateHTML();  
    console.log(monsterArray[0].monsterExperience);                                             
    
}

}

function getMonsterCount(): number {
    return monsterArray.length;
}

function updateHTML() {
    clearMonsterCell();
    monsterGenerateHTMLAll();
    console.log( getMonsterCount() + " Monster sind Momentan im Spiel");
}


function monsterGenerateHTMLAll(){
for(let i:number=0;i < getMonsterCount(); 
i++) {

monsterGenerateHTML(i);
}
}

function clearMonsterCell() {
    let monsterChild:HTMLElement= document.getElementById
    (monsterHolder);
    while (monsterChild.firstChild) 
    {
        monsterChild.removeChild(monsterChild.firstChild);
    }

}



function monsterGenerateHTML(i : number)
{

    let monsterZähler: number = i;
    console.log("Momentan gibt es: " + monsterZähler + "Monster")

    let holdingDiv : HTMLElement = document.createElement("div"); 
    holdingDiv.setAttribute("class", "monster");      
    holdingDiv.setAttribute("id", "monster" + i);     
                        
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"

    let monsterName : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[i].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let levels : HTMLElement = document.createElement("p");
    levels.innerHTML = "Level:" + monsterArray[i].monsterLevel;
    holdingDiv.appendChild(levels);

    let monsterLeb : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterLeb.innerHTML = monsterArray[i].monsterLebensraum
    holdingDiv.appendChild(monsterLeb);

    let monsterMod : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[i].monsterModifier[0] + ", " +  monsterArray[i].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterImg : HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", monsterArray[i].monsterBild); 

    let HP : HTMLElement = document.createElement("p");
    HP.innerHTML = "Health Points:" + monsterArray[i].monsterHealthPoints;
    holdingDiv.appendChild(HP);

    let XP : HTMLElement = document.createElement("p");
    XP.innerHTML = "Experience:" + monsterArray[i].monsterExperience;
    holdingDiv.appendChild(XP);

   

  
    
    
    monsterImg.setAttribute("alt", "Schreckliches Monster");            // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg);                                 // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)

    let monsterBtn : HTMLElement = document.createElement("BUTTON"); 
                                                               // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);   
                                                               // Füge den Button zu dem holding-div hinzu.

    let monsterCount : number = i;                    // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
        'click', function() {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(monsterCount);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);                                                      // Ignoriert das false.

        let kampfButton : HTMLElement = document.getElementById("alleMonsterKampfId")
        kampfButton.addEventListener(                                        
            'click', function() {                                           
                fightEveryMonster(monsterCount);                               
            }, false);  

            let schwachKampf : HTMLElement = document.getElementById("schwacheMonsterKampfId")
            schwachKampf.addEventListener(                                        
                'click', function() {                                           
                    fightEveryMonster(monsterCount);                               
                }, false); 
}





function getRNGNumber(_maxNumber : number) : number
{
    return Math.floor ( Math.random ()*  _maxNumber) ;       
}                                                 


function generateMonsterName() : string
{
    let generatedMonsterName : string = ""; 

    // Monster-Vorname
    let rngNumber : number = getRNGNumber(prefix.length);               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                             // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


function generateMonsterBild(): string {
    let bildErstellen: string;
    bildErstellen = monsterBild[getRNGNumber(monsterBild.length)];

    return bildErstellen;
}

function generateMonsterLebensraum(): string {
    let lebensraumErstellen: string;
    lebensraumErstellen = monsterLebensraum[getRNGNumber(monsterLebensraum.length)];

    return lebensraumErstellen;
}


function generateMonsterHitPoints() : number
{
    let tempMonsterHP : number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}



function generateMonsterXP() : number
{

    let tempMonsterXP : number = 300 + getRNGNumber(500);
    return tempMonsterXP;
}

function generateMonsterLevel() : number
{

    let tempMonsterLevel : number = 1 + getRNGNumber(20);
    return tempMonsterLevel;
}
generateMonsterLevel()


function generateMonsterModifer() : string[]
{
    let tempMonsterMod : string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}



function fightMonster(_index : number)
{
 
    playerXP += monsterArray[_index ].monsterExperience;                  
    monsterArray.splice(_index ,1);
    updateHTML(); 
 

    updatePlayerLevel();
}

function fightEveryMonster(_indexe : number)
{
 
    playerXP += monsterArray[_indexe ].monsterExperience;                  
    monsterArray.splice(_indexe ,99999999999);
    updateHTML(); 
 

    updatePlayerLevel();
}

function fightweakMonster()
{
 let schwachesMonster : string = " "
   

    if (monsterLevel < monsterLevel){
        generateMonsterLevel = schwachesMonster

    }
   
    updateHTML(); 
 

    updatePlayerLevel();
}


function updatePlayerLevel()
{
    let tempLevel : number = Math.floor(playerXP / playerXPperLevel);                                                                           // Spieler-Level = XP / XPproLevel

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.
}

function lebensraumErweitern(){

    console.log ("gleich wird der lebensraum der Monster erweitert werden")
    monsterLebensraum.push("Verbotener Wald");
    monsterLebensraum.push("Kaukasus");
    monsterLebensraum.push("Hyrule");
    monsterLebensraum.push("Kyoto");
    monsterLebensraum.push("Haselnusstortenland");
    monsterLebensraum.push("Landdörfchenbergstadt");
    console.log ("Nun werde die Monster Artgerecht gehalten und die Monsterschutzorganisationen können sich nicht mehr über Monster aus Bodenhaltung beschweren.")
    
 
   
}
lebensraumErweitern()
console.log(monsterLebensraum)

