let monsterHolder = "monsterHoldingCell";
let booleanFurUpdatePlayer = false;
let playerName = "Spielername";
let playerXP = 0;
let playerXPperLevel = 1000;
let playerLevel = 1;
let prefix = ["todesmutiger", "schrumpfhörniger", "nach Käse schnüffelnder ", "knallrümpfiger", "Gelbfüßiger", "Salzleckstein begehrender", "Waschmittel inhalierender", " pyromanischer", " Flamingo reitender", " im Kühlschrank vergessener",];
let monsterName = [" Guhl", " Schlickschlupf", " Göttling", " Gabelschwanz", " Shinigami", " Eselsbrückeningenieur", " Waldschrat", " Busch", " Sandalenträger", " Kaugummi", " Killerjoghurt",];
let suffix = [" aus dem Buckelsumpf", " der im dunkeln Leuchtet", " mit Seifenspender-Funktion", " mit Wackelpudding Phobie", " mit implantierten Hosenbein", " der Affenfußarmee", " der denkt er sei ein Radiergummi", " mit neuer Hüfte", " mit Paradontose", " der ohne Helm Fahrrad fährt", " der seine gallenblase verlegt hat", " mit psychopatischer Fliege im Kopf"];
let monsterModifers = ["wasserfest", "Analphabet", "hat Angst vor Göffel-Zinken", "stinkt", "stubenrein", "spielsüchtig", "aggressiv", "elegant", "rassistisch", "menschenscheu", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterLebensraum = ["Hochebene", "Mordor", "Velen", "Westeros", "Namek", "Vertania-City",];
let monsterBild = ["imgs/ga.JPG", "imgs/g.JPG", "imgs/gu.JPG", "imgs/sch.JPG", "imgs/e.JPG", "imgs/pok.JPG", "imgs/goll.JPG", "imgs/poki.JPG", "imgs/mosk.JPG",];
let monsterGeburtsort = ["Nordpol", "Mond", "Mars", "china", "Kambodia", "unknown", "Russland"];
let monsterArray = [];
console.log(monsterArray);
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    document.getElementById("fighteveryone").addEventListener("click", fightAllMonsters, false);
    updatePlayerLevel(0);
    console.log("" + document.getElementById("monsterSpawner").innerHTML);
    document.getElementById("kleistesMonster").addEventListener("click", fightWeakestMonster, false);
};
function generateMonster() {
    let newNr = getRNGNumber(4);
    for (let i = 0; i < newNr; i++) {
        let newMonsterName = generateMonsterName();
        let newMonsterModifier = generateMonsterModifer();
        let newMonsterLebensraum = generateMonsterLebensraum();
        let newMonsterBild = generateMonsterBild();
        let newMonsterHP = generateMonsterHitPoints();
        let newMonsterXP = generateMonsterXP();
        let newMonsterLevel = generateMonsterLevel();
        let newMonster = {
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            monsterBild: newMonsterBild,
            monsterLebensraum: newMonsterLebensraum,
            monsterLevel: newMonsterLevel
        };
        monsterArray.push(newMonster);
        updateHTML();
        console.log(monsterArray[0].monsterExperience);
    }
}
function getMonsterCount() {
    return monsterArray.length;
}
function updateHTML() {
    clearMonsterCell();
    monsterGenerateHTMLAll();
    console.log(getMonsterCount() + " Monster sind Momentan im Spiel");
}
function monsterGenerateHTMLAll() {
    for (let i = 0; i < getMonsterCount(); i++) {
        monsterGenerateHTML(i);
    }
}
function clearMonsterCell() {
    let monsterChild = document.getElementById(monsterHolder);
    while (monsterChild.firstChild) {
        monsterChild.removeChild(monsterChild.firstChild);
    }
}
function monsterGenerateHTML(i) {
    let monsterZähler = i;
    console.log("Momentan gibt es: " + monsterZähler + "Monster");
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "monster");
    holdingDiv.setAttribute("id", "monster" + i);
    document.getElementById(monsterHolder).appendChild(holdingDiv);
    let monsterName = document.createElement("p");
    monsterName.innerHTML = monsterArray[i].monsterName;
    holdingDiv.appendChild(monsterName);
    let monsterLeb = document.createElement("p");
    monsterLeb.innerHTML = monsterArray[i].monsterLebensraum;
    holdingDiv.appendChild(monsterLeb);
    let levels = document.createElement("p");
    levels.innerHTML = "Level:" + monsterArray[i].monsterLevel;
    holdingDiv.appendChild(levels);
    let monsterMod = document.createElement("p");
    monsterMod.innerHTML = monsterArray[i].monsterModifier[0] + ", " + monsterArray[i].monsterModifier[1];
    holdingDiv.appendChild(monsterMod);
    let monsterImg = document.createElement("img");
    monsterImg.setAttribute("src", monsterArray[i].monsterBild);
    let HP = document.createElement("p");
    HP.innerHTML = "Health Points:" + monsterArray[i].monsterHealthPoints;
    holdingDiv.appendChild(HP);
    let XP = document.createElement("p");
    XP.innerHTML = "Experience:" + monsterArray[i].monsterExperience;
    holdingDiv.appendChild(XP);
    monsterImg.setAttribute("alt", "Schreckliches Monster");
    holdingDiv.appendChild(monsterImg);
    let monsterBtn = document.createElement("BUTTON");
    monsterBtn.innerHTML = "Monster bekämpfen!";
    holdingDiv.appendChild(monsterBtn);
    let monsterCount = i;
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);
    monsterBtn.addEventListener('click', function () {
        fightMonster(monsterCount);
    }, false);
}
function getRNGNumber(_maxNumber) {
    return Math.floor(Math.random() * _maxNumber);
}
function generateMonsterName() {
    let generatedMonsterName = "";
    let rngNumber = getRNGNumber(prefix.length);
    generatedMonsterName = prefix[rngNumber];
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);
    generatedMonsterName += monsterName[rngNumber];
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);
    generatedMonsterName += suffix[rngNumber];
    return generatedMonsterName;
}
function generateMonsterBild() {
    let bildErstellen;
    bildErstellen = monsterBild[getRNGNumber(monsterBild.length)];
    return bildErstellen;
}
function generateMonsterLebensraum() {
    let lebensraumErstellen;
    lebensraumErstellen = monsterLebensraum[getRNGNumber(monsterLebensraum.length)];
    return lebensraumErstellen;
}
function generateMonsterHitPoints() {
    let tempMonsterHP = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
function generateMonsterPoB() {
    let rngNumber = getRNGNumber(monsterGeburtsort.length);
    return monsterGeburtsort[rngNumber];
}
function generateMonsterXP() {
    let tempMonsterXP = 300 + getRNGNumber(500);
    return tempMonsterXP;
}
function generateMonsterLevel() {
    let tempMonsterXP = 1 + getRNGNumber(10);
    return tempMonsterXP;
}
function generateMonsterModifer() {
    let tempMonsterMod = [];
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];
    return tempMonsterMod;
}
function fightMonster(_index) {
    if (monsterArray[_index].monsterLevel <= playerLevel) {
        console.log("Spieler gewinnt gegen Monster");
        updatePlayerLevel(monsterArray[_index - 1].monsterExperience);
        monsterArray.splice(_index - 1, 1);
        playerXP += monsterArray[_index].monsterExperience;
        updateHTML();
    }
    else if (playerLevel < monsterArray[_index - 1].monsterLevel) {
        console.log("Monster gewinnt, Spieler verloren, Streifen verrutscht");
        updatePlayerLevel((monsterArray[_index - 1].monsterExperience) * (-1));
    }
    updateHTML();
    updatePlayerLevel(0);
}
function updatePlayerLevel(ifVariable1) {
    playerLevel = (Math.floor(playerXP / playerXPperLevel)) + 1;
    if (playerXP + ifVariable1 > 0) {
        playerXP += ifVariable1;
    }
    else {
        playerXP = 0;
    }
    if (playerLevel == 20 && booleanFurUpdatePlayer == false) {
        alert("Du hast Level 20 erreicht und gewonnen");
        booleanFurUpdatePlayer = true;
    } // Spieler-Level = XP / XPproLevel
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + playerLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + playerLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");
}
function lebensraumErweitern() {
    console.log("gleich wird der lebensraum der Monster erweitert werden");
    monsterLebensraum.push("Verbotener Wald");
    monsterLebensraum.push("Kaukasus");
    monsterLebensraum.push("Hyrule");
    monsterLebensraum.push("Kyoto");
    monsterLebensraum.push("Haselnusstortenland");
    monsterLebensraum.push("Landdörfchenbergstadt");
    console.log("Nun werde die Monster Artgerecht gehalten und die Monsterschutzorganisationen können sich nicht mehr über Monster aus Bodenhaltung beschweren.");
}
lebensraumErweitern();
console.log(monsterLebensraum);
function fightWeakestMonster() {
    let fightWeakest = monsterArray.length;
    for (let i = monsterArray.length; i > 0; i--) {
        if (monsterArray[fightWeakest - 1].monsterLevel > monsterArray[i - 1].monsterLevel)
            fightWeakest = i;
    }
    fightMonster(fightWeakest);
}
fightWeakestMonster();
function neuerPoB() {
    console.log("neue Places of Birth werden zum array hinzugefügt");
    monsterGeburtsort.push("Mariannengraben");
    monsterGeburtsort.push("hinter den Bergen bei den 7 Zwergen");
    monsterGeburtsort.push("Chile");
    monsterGeburtsort.push("Japan");
    console.log("fertig");
}
neuerPoB();
console.log(monsterGeburtsort);
function fightAllWeakMonsters() {
    for (let i = monsterArray.length; i > 0; i--) {
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
//# sourceMappingURL=62-TS-Example.js.map