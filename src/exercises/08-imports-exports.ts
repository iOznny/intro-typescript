// Improtaciones y Exportaciones.
import { Product, calISV } from "./07-destructuring-arguments";

const carShopping: Product[] = [
    {
        desc: 'Tel 1',
        price: 100
    },
    {
        desc: 'Tel 2',
        price: 150
    }
];

// Desestructuramos el arreglo.
const [ total, isv ] = calISV(carShopping);

console.log('Total: ', total );
console.log('ISV: ', isv);
