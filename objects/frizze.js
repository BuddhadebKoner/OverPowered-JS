const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};
Object.freeze(user);

// Attempting to modify properties
user.name = 'Jane'; // This will not have any effect
user.address.city = 'Los Angeles'; // This will also not have any effect

console.log(user); // Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }