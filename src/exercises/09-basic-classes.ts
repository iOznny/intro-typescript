// Clases Basicas

/**
 * Diferencia de CLases y Interfaces
 * Las clases permiten crear instancias.
 * Las interfaces no se pueden definir como deben funcionar los setters o getters.
 */

class Heroe {
    // Niveles de acceso pueden ser private, public o static.
    /* private alterEgo: string;
    public age: number;
    static nameReal: number; */

    /* El constructor es una funcion que se ejcuta cuando se realiza una instancia de la clase */
    constructor(
        public alterEgo: string, 
        public age: number, 
        public nameReal: string
    ) {}
}

const iroman = new Heroe('Ironman', 45, 'Tony');
console.log(iroman);