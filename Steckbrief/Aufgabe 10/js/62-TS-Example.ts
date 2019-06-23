

interface Monster {
    monsterName : string; 
    monsterHealthPoints : number; 
    monsterExperience : number; 
    monsterModifier : string []; 
    monsterLebensraum : string;
    monsterBild : string;
    monsterLevel : number;
}



let monsterHolder : string = "monsterHoldingCell";                                  

let booleanFurUpdatePlayer : boolean = false;
let playerName : string = "Spielername";                                           
let playerXP : number =0;                                                          
let playerXPperLevel : number = 1000;     
let playerLevel: number = 1;                                           


let prefix : string[] = ["todesmutiger", "schrumpfhörniger", "nach Käse schnüffelnder ", "knallrümpfiger", "Gelbfüßiger", "Salzleckstein begehrender", "Waschmittel inhalierender", " pyromanischer", " Flamingo reitender", " im Kühlschrank vergessener", ];
let monsterName : string[] = [" Guhl", " Schlickschlupf", " Göttling", " Gabelschwanz", " Shinigami", " Eselsbrückeningenieur", " Waldschrat", " Busch", " Sandalenträger", " Kaugummi", " Killerjoghurt",]; 
let suffix : string[] = [" aus dem Buckelsumpf", " der im dunkeln Leuchtet", " mit Seifenspender-Funktion", " mit Wackelpudding Phobie", " mit implantierten Hosenbein", " der Affenfußarmee", " der denkt er sei ein Radiergummi", " mit neuer Hüfte" , " mit Paradontose" , " der ohne Helm Fahrrad fährt", " der seine gallenblase verlegt hat" , " mit psychopatischer Fliege im Kopf"]; 

let monsterModifers : string[] = ["wasserfest", "Analphabet", "hat Angst vor Göffel-Zinken", "stinkt", "stubenrein", "spielsüchtig", "aggressiv", "elegant", "rassistisch", "menschenscheu", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterLebensraum: string[] = ["Hochebene" , "Mordor", "Velen", "Westeros", "Namek", "Vertania-City",]
let monsterBild: string[] = ["imgs/ga.JPG", "imgs/g.JPG", "imgs/gu.JPG" , "imgs/sch.JPG",  "imgs/e.JPG", "imgs/pok.JPG", "imgs/goll.JPG", "imgs/poki.JPG" , "imgs/mosk.JPG",  ]

let monsterGeburtsort: string[] = ["Nordpol", "Mond", "Mars", "china", "Kambodia", "unknown", "Russland"]





let monsterArray : Monster[] = [];
console.log(monsterArray ); 




window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    document.getElementById("fighteveryone").addEventListener("click", fightAllMonsters, false);

    updatePlayerLevel(0); 
    console.log("" + document.getElementById("monsterSpawner").innerHTML); 

    document.getElementById("kleistesMonster").addEventListener("click", fightWeakestMonster, false);

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
    let newMonsterLevel: number = generateMonsterLevel()
    

    let newMonster : Monster = {                      
        monsterName : newMonsterName, 
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        monsterBild : newMonsterBild,
        monsterLebensraum : newMonsterLebensraum,
        monsterLevel : newMonsterLevel
    
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
                        
    document.getElementById(monsterHolder).appendChild(holdingDiv);    

    let monsterName : HTMLElement = document.createElement("p");        
    monsterName.innerHTML = monsterArray[i].monsterName;                    
    holdingDiv.appendChild(monsterName);                                

    let monsterLeb : HTMLElement = document.createElement("p");     
    monsterLeb.innerHTML = monsterArray[i].monsterLebensraum
    holdingDiv.appendChild(monsterLeb);

    let levels : HTMLElement = document.createElement("p");
    levels.innerHTML = "Level:" + monsterArray[i].monsterLevel;
    holdingDiv.appendChild(levels);

    let monsterMod : HTMLElement = document.createElement("p");       
    monsterMod.innerHTML = monsterArray[i].monsterModifier[0] + ", " +  monsterArray[i].monsterModifier[1]; 
    holdingDiv.appendChild(monsterMod);                                

    let monsterImg : HTMLElement = document.createElement("img");      
    monsterImg.setAttribute("src", monsterArray[i].monsterBild); 

    let HP : HTMLElement = document.createElement("p");
    HP.innerHTML = "Health Points:" + monsterArray[i].monsterHealthPoints;
    holdingDiv.appendChild(HP);

    let XP : HTMLElement = document.createElement("p");
    XP.innerHTML = "Experience:" + monsterArray[i].monsterExperience;
    holdingDiv.appendChild(XP);

    
    monsterImg.setAttribute("alt", "Schreckliches Monster");           
    holdingDiv.appendChild(monsterImg);                                 

    let monsterBtn : HTMLElement = document.createElement("BUTTON"); 
                                                               
    monsterBtn.innerHTML = "Monster bekämpfen!";                      
    holdingDiv.appendChild(monsterBtn);   
                                                            

    let monsterCount : number = i;                  
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    monsterBtn.addEventListener(                                        
        'click', function() {                                           
            fightMonster(monsterCount);                                
        }, false);    
        
       
}



function getRNGNumber(_maxNumber : number) : number
{
    return Math.floor ( Math.random ()*  _maxNumber) ;     
                                                    
}



function generateMonsterName() : string
{
    let generatedMonsterName : string = ""; 

 
    let rngNumber : number = getRNGNumber(prefix.length);               
    generatedMonsterName = prefix[rngNumber];                          

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                      
    generatedMonsterName += monsterName[rngNumber];                             

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            
    generatedMonsterName += suffix[rngNumber];                          

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

function generateMonsterPoB(): string {
    let rngNumber: number = getRNGNumber(monsterGeburtsort.length);
    return monsterGeburtsort[rngNumber]}



function generateMonsterXP() : number
{

    let tempMonsterXP : number = 300 + getRNGNumber(500);
    return tempMonsterXP;
}



function generateMonsterLevel() : number
{

    let tempMonsterXP : number = 1 + getRNGNumber(10);
    return tempMonsterXP;
}



function generateMonsterModifer() : string[]
{
    let tempMonsterMod : string[] = [];                                         
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; 
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  
    return tempMonsterMod;                                                      
}



function fightMonster(_index: number) {

    if (monsterArray[_index].monsterLevel <= playerLevel) {
        console.log("Spieler gewinnt gegen Monster");
        updatePlayerLevel(monsterArray[_index-1].monsterExperience); 
        monsterArray.splice(_index-1, 1);
        playerXP += monsterArray[_index ].monsterExperience;  
        updateHTML();
    }

    else if (playerLevel < monsterArray[_index-1].monsterLevel) {
    
        console.log("Monster gewinnt, Spieler verloren, Streifen verrutscht");
        updatePlayerLevel((monsterArray[_index - 1].monsterExperience) * (-1));
    
    }
updateHTML()
updatePlayerLevel(0);
}



function updatePlayerLevel(ifVariable1 : number)
{
    playerLevel = (Math.floor(playerXP / playerXPperLevel)) + 1; 

    if (playerXP +ifVariable1 > 0)  
    {
        playerXP +=ifVariable1;
    }                                                                                              
    else  {
        playerXP = 0;
    }
    if (playerLevel == 20 && booleanFurUpdatePlayer == false) 
    {
        alert ("Du hast Level 20 erreicht und gewonnen");
        booleanFurUpdatePlayer = true;  
    }                                                                       // Spieler-Level = XP / XPproLevel

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + playerLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + playerLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");  
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

function fightWeakestMonster() {
    let fightWeakest = monsterArray.length;
    for (let i = monsterArray.length; i > 0; i--) {
        if (monsterArray[fightWeakest - 1].monsterLevel > monsterArray[i - 1].monsterLevel)
        fightWeakest = i;
    }
    fightMonster(fightWeakest);
}
fightWeakestMonster()

function neuerPoB() {
    console.log("neue Places of Birth werden zum array hinzugefügt");
    monsterGeburtsort.push("Mariannengraben");
    monsterGeburtsort.push("hinter den Bergen bei den 7 Zwergen");
    monsterGeburtsort.push("Chile");
    monsterGeburtsort.push("Japan");
    console.log("fertig")
}

neuerPoB()
console.log(monsterGeburtsort)

function fightAllWeakMonsters () {
    for (let i: number = monsterArray.length; i > 0; i--) {
        if (playerLevel > monsterArray[i - 1].monsterLevel) {
            fightMonster(i);
        }
    }
}

function fightAllMonsters() {
    for (let i = monsterArray.length; i > 0; i--) {   
        fightMonster(i);
    }
}

