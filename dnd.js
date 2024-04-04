const prompt = require('prompt-sync')();

let sheet =
{
    'Name': 'Baern',
    'Race': 'Orc',
    'Class': 'Ranger',
    'Level': 12,
    'Strength': 18,
    'Dexterity': 14,
    'Constitution': 16,
    'Intelligence': 8,
    'Wisdom': 16,
    'Charisma': 12
};

function modifier (value)
{
    value = (value - 10) / 2;
    value = Math.floor(value);
    return value;
}

function d20 ()
{
    let p = Math.round(Math.random() * 20);
    return p;
}

module.exports.d20 = d20;

console.log(`object value before: ${sheet.Strength}`);
let newStrength = prompt("Enter a new strength value: ");
sheet['Strength'] = parseInt(newStrength);
console.log(`object value after: ${sheet.Strength}`);

let strMod = modifier(sheet.Strength);

/* 
let dexMod = modifier(sheet.Dexterity);
let conMod = modifier(sheet.Constitution);
let intMod = modifier(sheet.Intelligence);
let wisMod = modifier(sheet.Wisdom);
let chaMod = modifier(sheet.Charisma);
*/

console.log(`your strength modifier is: ${strMod}`);
//console.log(d20());

//, dexMod, conMod, intMod, wisMod, chaMod */