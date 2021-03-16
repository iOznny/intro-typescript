// Desestructuración de Argumentos.
export interface Product {
    desc: string;
    price: number;
}

const telefono: Product = {
    desc: 'Samgun Galaxy S9+',
    price: 100
}

const tableta: Product = {
    desc: 'iPad Air',
    price: 100
}

export function calISV(products: Product[]): [number, number] {
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * 0.15];
}

/* const products = [telefono, tableta];
const [ total, isv ] = calISV(products);
console.log('Total: ', total);
console.log('ISV: ', isv); */