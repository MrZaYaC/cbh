# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I changed the function to make it cleaner and easier to understand. Here's two principles I used to refactor the function:

1. **DRY (Don't Repeat Yourself):** The original code hashed the data in two separate places, which is a repetition of logic. In the refactored function, we made sure that hashing happens in one place only, adhering to the DRY principle. If we need to change the hashing mechanism in the future, we only have to change it in one place.

2. **KISS (Keep It Simple, Stupid):** The refactored function is simpler and more straightforward. I removed unnecessary nested conditions, making the function easier to understand. I also used the `||` operator for the assignment of the candidate variable, simplifying the condition to a single line. The result is a function that is easier to read and maintain.


