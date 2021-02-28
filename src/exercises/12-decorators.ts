// Decoradores

/**
 * Los decoradores permiten cambiar las clases en
 * el momento que son definidas.
 * Un decorador no es más que una función que expande su clase.
*/

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
}

@classDecorator

class superClass {
    public myProperty: string = 'ABC123';

    print() {
        console.log('Hola mundo');
    }
}

console.log(superClass);

const myClass = new superClass();
console.log(myClass.myProperty);
