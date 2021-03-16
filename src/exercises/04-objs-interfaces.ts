// Interfaces
interface AddressSuperHeroe {
    street: string;
    postal_code: string;
    city: string;
    country: string;
}

interface SuperHeroe {
    name: string;
    age: number;
    address: AddressSuperHeroe;
    showAddress: () => string;
}

const superHeroe: SuperHeroe = {
    name: 'Wannda Maximoff',
    age: 32,
    address: {
        street: 'West View, Ridgefield Park', 
        postal_code: '07660', 
        city: 'Nueva Jersey',
        country: 'USA'
    },
    showAddress() {
        return this.name + ': ' + this.address.street + ', ' + this.address.city + ', ' + this.address.postal_code + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log(address);