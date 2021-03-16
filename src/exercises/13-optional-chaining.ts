// Encadenamiento Opcional
interface Passenger {
    name: string;
    sons?: string[];
}

const passenger1: Passenger = {
    name: 'Cesar'
}

const passenger2: Passenger = {
    name: 'Aurora',
    sons: ['Alberto', 'Margarita']
}

function printSons(passenger: Passenger): void  {
    const countSons = passenger.sons?.length || 0;
    console.log(countSons);
}

printSons(passenger1);
printSons(passenger2);