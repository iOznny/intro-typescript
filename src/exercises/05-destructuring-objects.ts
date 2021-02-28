// La desestructuración de objetos permite 
// la extraccion de promiedades y metodes de un objeto.

interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 50,
    second: 36,
    song: 'Gran Vida / Huracán',
    details: {
        author: 'Aleman',
        year: 2020
    }
}

// Creación de constantes en base al Player
const { volume, second, song, details } = player



// Desestructuración de un objeto en base a la contante de details: Details
const { author, year } = details

// Segunda manera de Desestructuración

/** El agregado a year es por que en caso de tener otra variable con el mismo nombre
* lo que hacemos es asignar un nuevo nombre a esa propiedad de la siguiente forma:
* { details: { year: newVarYear } }
*/
const { details: { author: newVarAuthor, year: newVarYear } } = player


// Impresión del Objecto.
console.log('Volumen actual: ', volume);
console.log('Segundo actual: ', second);
console.log('Canción actual: ', song);
console.log('Autor actual: ', newVarAuthor);
console.log('Año actual: ', newVarYear);