// Extender una Clase

/**
 * El extender una clase es el poder
 * agregar ciertas funcionalidades, propiedades a una clase existente.
 */
class NormalPerson {
    constructor(
        public name: string,
        public address: string
    ) {}
}

// El SUPER, es llamar el constructor de la clase en la cual extiende.
class Heroe2 extends NormalPerson {
    constructor(
        public alterEgo: string, 
        public age: number, 
        public nameReal: string
    ) {
        // LLamamos al super de NormalPerson
        super(nameReal, 'New York, USA');
    }
}

const iroman_per = new Heroe2('Ironman', 45, 'Tony');
console.log(iroman_per);