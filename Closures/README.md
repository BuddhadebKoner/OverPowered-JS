## What is a Closure?

A closure is a feature in JavaScript where an inner function retains access to variables from its outer function, even after the outer function has finished executing.

## Key Points

- **Inner Function Access**: The inner function can access variables of the outer function.
- **Persistent Scope**: The inner function maintains access to the scope of its outer function, allowing it to "remember" the environment in which it was created.

### Explanation

1. **Outer Function**: `createCounter` creates a local variable `count` and returns an inner function.
2. **Inner Function**: The returned function has access to `count` due to the closure.
3. **State Persistence**: Each time the inner function is called, it updates and accesses the same `count` variable, demonstrating how closures maintain state.

## Use Cases

- **Encapsulation**: Hide internal implementation details.
- **Data Privacy**: Create private variables.
- **Function Factories**: Generate functions with their own private state.

## Summary

Closures are a powerful feature in JavaScript that allow functions to capture and remember their lexical environment. They enable advanced patterns like function factories and data encapsulation.