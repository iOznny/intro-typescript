// Genericos

/**
 * Cuanto encontramos la siguiente expresión <T>
 * se comprende que puede aceptar cualquiere tipo que se le envie.
 */
function whatTypeAmI<T>(arg: T) {
    return arg
}

let string = whatTypeAmI('Hello World');
let number = whatTypeAmI(100);
let array = whatTypeAmI([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let explicit = whatTypeAmI<number>(100);