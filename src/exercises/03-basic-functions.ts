// Función tradicional.
function sum(a: number, b: number): number {
    return a + b;
}

// Función de flecha.
const sumArrow = (a: number, b: number): number => {
    return a + b;
}

function multiply(num: number, othernum?: number, base: number = 2): number {
    return num * base;
}

// Interface Character
interface CharacterVLR {
    character: string;
    points: number;
    seeHP: () => void;
}

function cure(character: CharacterVLR, pointsX: number): void {
    character.points += pointsX;
    console.log(character);
}

// Sumar
const resSum = sum(10, 20);
const resSumArrow = sumArrow(10, 20);

// Multiplicar
const resMultiply = multiply(5, 0, 10);

// Nuevo Personaje
const newPerson: CharacterVLR = {
    character: 'Strider',
    points: 50,
    seeHP() {
        console.log('Points: ', this.points);
    }
}

// Console log de Obj.
cure(newPerson, 20);
newPerson.seeHP();

// Console log de funtions.
console.log(`resSum: ${ resSum }`);
console.log(`resSumArrow: ${ resSumArrow }`);
console.log(`resMultiply: ${ resMultiply }`);