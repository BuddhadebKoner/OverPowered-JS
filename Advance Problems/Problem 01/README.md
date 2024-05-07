### JavaScript Object Property Descriptor Examples

#### Accessing Property Descriptor of Math.PI

```javascript
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);
console.log(Math.PI); // Output: 3.141592653589793
```

##### output
```bash
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
3.141592653589793
```
 
##### How it Works
```javascript
const person = {
    name: 'Buddha',
    age: 30
};

Object.defineProperty(person, 'name', {
    writable: false
});

person.name = 'Jeet';
console.log(person.name); // Output: Buddha
```
##### Explanation
Redefining Math.PI: The attempt to redefine the value of Math.PI to 3.14 using Object.defineProperty showcases the immutability of constants like Math.PI.

Defining Property Descriptor: The name property of the person object is defined with the descriptor { writable: false }, making it non-writable.

Attempting to Change Property: Despite attempting to change the name property of person to 'Jane', it remains unchanged as 'John' due to its non-writable property setting.
