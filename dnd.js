let ficha =
{
    'Name': 'Baern',
    'Race': 'Orc',
    'Class': 'Ranger',
    'Level': 12,
    'Strength': '',
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

let forca = console.log(prompt("digite a força do seu personagem: \n"));
força = ficha.Strength;

let strMod = modifier(ficha.Strength);
let dexMod = modifier(ficha.Dexterity);
let conMod = modifier(ficha.Constitution);
let intMod = modifier(ficha.Intelligence);
let wisMod = modifier(ficha.Wisdom);
let chaMod = modifier(ficha.Charisma);

console.log(strMod);
console.log(d20());

//, dexMod, conMod, intMod, wisMod, chaMod