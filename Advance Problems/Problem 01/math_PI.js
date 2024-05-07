// Attempting to redefine Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// Check if the redefinition worked
console.log(descripter);
console.log(Math.PI); // Output: 3.141592653589793

// Even though we tried to redefine it, Math.PI remains unchanged

const person = {
    name: 'buddha',
    age: 30
};

// Define a property 'name' with writable set to false
Object.defineProperty(person, 'name', {
    writable: false
});

// Attempt to change the 'name' property
person.name = 'jeet';

// Output the result
console.log(person.name); // Output: buddha
