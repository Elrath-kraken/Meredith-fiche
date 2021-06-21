/* Modifiez ces informations pour celles de votre personnage */
let cname = 'Meredith';
let class1 = 'Wizard (Scribe) lvl 19';
let class2 = 'Sorcerer (Abherrant mind) lvl 2';
let city = 'Yharnam';
let str = 24;
let dex = 24;
let con = 24;
let int = 30;
let wis = 24;
let cha = 24;
let pro = 6;
let hp = 233;
let speed = 30;
let xp = 8467735;
let xpnext = 9000000;
let xpmissing = xpnext - xp;
let abolethxp = 140000 + 20000 + 20000 + 7200 + 20000 + 155000 + 2625000 + 460000 + 100000 + 460000 + 328000;
let abolethrolls = [
    3, 5
]
let xtrascrollgreen = 5;


// Entrez les bonus de vos armes et armures (2 pour une arme +2, 1 pour une armure +1, 2 pour un Wand of Potency +1, etc)
let sword1 = 1;
let sword2 = 1;
let wand = 2;
let wanddc = 4;
let armor = 9;

/* Calculs des Stats.*/

let strmod = (str - 10) / 2;
strmod = Math.floor(strmod);
let dexmod = (dex - 10) / 2;
dexmod = Math.floor(dexmod);
let conmod = (con - 10) / 2;
conmod = Math.floor(conmod);
let intmod = (int - 10) / 2;
intmod = Math.floor(intmod);
let wismod = (wis - 10) / 2;
wismod = Math.floor(wismod);
let chamod = (cha - 10) / 2;
chamod = Math.floor(chamod);
let ac = 10 + armor + dexmod;
let wounds = 0;
let exp = pro * 2;

/* Modifiez pour la stat d'attaque et de sort de votre personnage */
let melee1 = pro + sword1 + dexmod;
let melee2 = pro + sword2 + dexmod;
let spell = pro + intmod + wand;
let spelldc = pro + intmod + wanddc + 8;

/* Ajoutez + pro aux stats dans lesquelles vous êtes proficient et +exp pour votre expertise */
let acrobatics = dexmod + pro;
let animal = wismod;
let arcana = intmod + exp;
let athletics = strmod + pro;
let deception = chamod; + pro;
let history = intmod + exp;
let insight = wismod; + pro;
let intimidation = chamod;
let investigation = intmod + pro;
let medicine = wismod;
let nature = intmod + pro;
let perception = wismod;
let performance = chamod;
let persuasion = chamod; + pro;
let religion = intmod + pro;
let sleight = dexmod + pro;
let stealth = dexmod + pro;
let survival = wismod;

/* Saving Throws */

let ststr = strmod;
let stdex = dexmod + 2;
let stcon = conmod + pro;
let stint = intmod + pro;
let stwis = wismod + pro;
let stcha = chamod;

/* Pour Meredith */




/* Écrire les stats dans le HTML */
document.getElementById('str').innerHTML = str + ' (+' + strmod + ')';
document.getElementById('dex').innerHTML = dex + ' (+' + dexmod + ')';
document.getElementById('con').innerHTML = con + ' (+' + conmod + ')';
document.getElementById('int').innerHTML = int + ' (+' + intmod + ')';
document.getElementById('wis').innerHTML = wis + ' (+' + wismod + ')';
document.getElementById('cha').innerHTML = cha + ' (+' + chamod + ')';
document.getElementById('hp').innerHTML = hp;
document.getElementById('ac').innerHTML = ac;
document.getElementById('acrobatics').innerHTML = '+' + acrobatics;
document.getElementById('animal').innerHTML = '+' + animal;
document.getElementById('arcana').innerHTML = '+' + arcana;
document.getElementById('athletics').innerHTML = '+' + athletics;
document.getElementById('deception').innerHTML = '+' + deception;
document.getElementById('history').innerHTML = '+' + history;
document.getElementById('insight').innerHTML = '+' + insight;
document.getElementById('intimidation').innerHTML = '+' + intimidation;
document.getElementById('investigation').innerHTML = '+' + investigation;
document.getElementById('medicine').innerHTML = '+' + medicine;
document.getElementById('nature').innerHTML = '+' + nature;
document.getElementById('perception').innerHTML = '+' + perception;
document.getElementById('performance').innerHTML = '+' + performance;
document.getElementById('persuasion').innerHTML = '+' + persuasion;
document.getElementById('religion').innerHTML = '+' + religion;
document.getElementById('sleight').innerHTML = '+' + sleight;
document.getElementById('stealth').innerHTML = '+' + stealth;
document.getElementById('survival').innerHTML = '+' + survival;
document.getElementById('speed').innerHTML = speed;
document.getElementById('ststr').innerHTML = '+' + ststr;
document.getElementById('stdex').innerHTML = '+' + stdex;
document.getElementById('stcon').innerHTML = '+' + stcon;
document.getElementById('stint').innerHTML = '+' + stint;
document.getElementById('stwis').innerHTML = '+' + stwis;
document.getElementById('stcha').innerHTML = '+' + stcha;
document.getElementById('name').innerHTML = cname;
document.getElementById('class1').innerHTML = class1;
document.getElementById('class2').innerHTML = class2;
document.getElementById('city').innerHTML = city;
document.getElementById('melee1').innerHTML = '+' + melee1;
document.getElementById('melee2').innerHTML = '+' + melee2;
document.getElementById('spell').innerHTML = '+' + spell;
document.getElementById('spelldc').innerHTML = spelldc;
document.getElementById('xp').innerHTML = 'Total xp: ' + xp;
document.getElementById('xpnext').innerHTML = 'Total xp for next level: ' + xpnext;
document.getElementById('xpmissing').innerHTML = 'Xp missing for next level: ' + xpmissing;
/* Rendre les boutons de points de vie fonctionnels*/
function moins() {
    wounds--
    document.getElementById('wounds').innerHTML = wounds;
    document.getElementById('hp').innerHTML = hp + ' (Current HP:' + (hp - wounds) + ')';
}
function plus() {
    if (wounds < hp) {
        wounds++
    } else {
        document.body.innerHTML = "<img src=\"./Assets/img/death.gif\" height=\"1080px\"> ";
        console.log('test')
    }
    document.getElementById('wounds').innerHTML = wounds;
    document.getElementById('hp').innerHTML = hp + ' (Current HP:' + (hp - wounds) + ')';

}

let damage = 0;

function modhp() {
    damage = document.getElementById('userinput').value;
    if (damage[0] == '+') {
        wounds -= parseInt(damage.substring(1));

    } else if (damage[0] == '-') {
        wounds += parseInt(damage.substring(1));

    }

    if (wounds > hp) {
        document.getElementById('wounds').innerHTML = 'You are dead';
    }
    if (wounds < 0) {
        wounds = 0;
    }

    document.getElementById('wounds').innerHTML = wounds;
    document.getElementById('hp').innerHTML = (hp + ' (Current HP:' + (hp - wounds) + ')');
}
document.getElementById('abolethxp').addEventListener('click',
    function abolethshow() {
        alert('Aboleth xp :' + abolethxp);
    });

document.getElementById('intim').addEventListener('click',
    function lejeu() {
        alert('LE JEU');
    });
/* Dice Roller */

let resultd4 = 0;
let resultd6 = 0;
let resultd8 = 0;
let resultd10 = 0;
let resultd12 = 0;
let resultd20 = 0;
let resultd100 = 0;

let d4 = function d4() {
    resultd4 = Math.ceil(Math.random() * 4);
    return resultd4;
}
let d6 = function d6() {
    resultd6 = Math.ceil(Math.random() * 6);
    return resultd6;
}
let d8 = function d8() {
    resultd8 = Math.ceil(Math.random() * 8);
    return resultd8;
}
let d10 = function d10() {
    resultd10 = Math.ceil(Math.random() * 10);
    return resultd10;
}
let d12 = function d12() {
    resultd12 = Math.ceil(Math.random() * 12);
    return resultd12;
}
let d20 = function d20() {
    resultd20 = Math.ceil(Math.random() * 20);
    return resultd20;
}
let d100 = function d100() {
    resultd100 = Math.ceil(Math.random() * 100);
    return resultd100;
}

/* Dice Roll Meredith */

document.getElementById('rolld4').addEventListener('click',
    function rolld4() {
        d4();
        document.getElementById('resultd4').innerHTML = resultd4;
        console.log('Result of D4 :' + resultd4);
    });
document.getElementById('rolld6').addEventListener('click',
    function rolld6() {
        d6();
        document.getElementById('resultd6').innerHTML = resultd6;
        console.log('Result of D6 :' + resultd6);
    });
document.getElementById('rolld8').addEventListener('click',
    function rolld8() {
        d8();
        document.getElementById('resultd8').innerHTML = resultd8;
        console.log('Result of D8 :' + resultd8);
    });
document.getElementById('rolld10').addEventListener('click',
    function rolld10() {
        d10();
        document.getElementById('resultd10').innerHTML = resultd10;
        console.log('Result of D10 :' + resultd10);
    });
document.getElementById('rolld12').addEventListener('click',
    function rolld12() {
        d12();
        document.getElementById('resultd12').innerHTML = resultd12;
        console.log('Result of D12 :' + resultd12);
    });

document.getElementById('rolld20').addEventListener('click',
    function rolld20() {
        d20();
        document.getElementById('resultd20').innerHTML = resultd20;
        console.log('Result of D20 :' + resultd20);
    });

document.getElementById('rolld100').addEventListener('click',
    function rolld100() {
        d100();
        document.getElementById('resultd100').innerHTML = resultd100;
        console.log('Result of D100 :' + resultd100);
    });

function rollmainattackfred() {
    d8();

    document.getElementById('resultsrollmainattackfred').innerHTML = resultd8 + ' + ' + dexmod + ' + ' + sword1 + ' = ' + (resultd8 + dexmod + sword1)
};

function rolloffattackfred() {
    d6();

    document.getElementById('resultsrolloffattackfred').innerHTML = resultd6 + ' + ' + dexmod + ' + ' + sword2 + ' = ' + (resultd6 + dexmod + sword2)
};

function rollmainattackfredsneak() {
    d8()
    d6()
    let result2d6 = Math.ceil(Math.random() * 6)
    let result3d6 = Math.ceil(Math.random() * 6)
    let result4d6 = Math.ceil(Math.random() * 6)
    let result5d6 = Math.ceil(Math.random() * 6)
    let result6d6 = Math.ceil(Math.random() * 6)
    let result7d6 = Math.ceil(Math.random() * 6)
    let result8d6 = Math.ceil(Math.random() * 6)
    let result9d6 = Math.ceil(Math.random() * 6)
    if (resultd6 == 1) {
        resultd6 = 2;
    } if (result2d6 == 1) {
        result2d6 = 2;
    } if (result3d6 == 1) {
        result3d6 = 2;
    } if (result4d6 == 1) {
        result4d6 = 2;
    } if (result5d6 == 1) {
        result5d6 = 2;
    } if (result6d6 == 1) {
        result6d6 = 2;
    } if (result7d6 == 1) {
        result7d6 = 2;
    } if (result8d6 == 1) {
        result8d6 = 2;
    } if (result9d6 == 1) {
        result9d6 = 2;
    }
}

function rollblacklotusfred() {
    d6()
    let result2d6 = Math.ceil(Math.random() * 6)
    let result3d6 = Math.ceil(Math.random() * 6)
    let result4d6 = Math.ceil(Math.random() * 6)
    let result5d6 = Math.ceil(Math.random() * 6)
    let result6d6 = Math.ceil(Math.random() * 6)
    let result7d6 = Math.ceil(Math.random() * 6)
    let result8d6 = Math.ceil(Math.random() * 6)
    let result9d6 = Math.ceil(Math.random() * 6)
    document.getElementById('resultsblacklotusfred').innerHTML = resultd6 + ' + ' + result2d6 + ' + ' + result3d6 + ' + ' + result4d6 + ' + ' + result5d6 + ' + ' + result6d6 + ' + ' + result7d6 + ' + ' + result8d6 + ' + ' + result9d6 + ' = ' + (resultd6 + result2d6 + result3d6 + result4d6 + result5d6 + result6d6 + result7d6 + result8d6 + result9d6);
}