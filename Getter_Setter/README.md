# Getter and Setter in JavaScript

There are three common ways to implement getters and setters in JavaScript: using property get set, class get set, and object get set.

### 1. Property Get Set

In this method, we use the `Object.defineProperty()` function to define a property directly on an object, or modify an existing property on an object, and returns the object. This is a lower-level method that provides more control over how the getter and setter functions behave.
#### Disadvantages 
- **Verbosity**: This method can be quite verbose and complex, especially when defining multiple properties.
- **Performance**: The `Object.defineProperty()` method is slower than direct assignment, which could be a concern in performance-critical applications.


### 2. Class Get Set

In this method, we use the `get` and `set` keywords within a class definition. This is a more modern approach introduced with ES6 and provides a cleaner syntax when working with classes.
#### Disadvantages 
- **Browser Compatibility**: This method uses ES6 syntax, which is not supported in older browsers. You would need to use a transpiler like Babel for backward compatibility.
- **Inheritance**: If you're not careful, you can accidentally override a parent class's getter or setter, which can lead to bugs.


### 3. Object Get Set

In this method, we define getters and setters directly within an object literal. This is a straightforward approach when working with single objects.
#### Disadvantages 
- **Scalability**: This method is not ideal for larger applications or when you need to create multiple instances of an object, as each instance would have its own copy of the getter and setter functions.
- **Encapsulation**: JavaScript does not have true private properties, so properties intended to be private can still be accessed directly.



### Best Approach

The best approach depends on your specific use case. If you're working with classes, the class get set method is likely the most appropriate. If you're working with individual objects, the object get set method may be simpler. The property get set method provides the most control, but can be more verbose and complex.
