let skills: string[] = ['Bash', 'Counter', 'Healing'];

// Interfaces es una serie de llaves para asegurar un objeto.
interface Character {
    name: string;
    hp: number;
    skill: string[];
    hometown?: string;
}

// Objeto de JS.
const person: Character = {
    name: 'Strider',
    hp: 100,
    skill: ['Bash', 'Counter', 'Healing']
}

person.hometown = 'Pueblo Natal';

// Console con formato table.
console.table(person);