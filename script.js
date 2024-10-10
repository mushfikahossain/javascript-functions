//part 1: Declaring and Invoking Functions
console.log("Part 1: Declaring and Invoking Functions")

    function greet(name = 'World') {
        return `Hello ${name}`;
    }

    console.log(greet());
    console.log(greet('You'))

console.log(" ")
//Part 2: Working with Parameters and Returning Values
console.log("Part 2: Working with Parameters and Returning Values")

    function addNumbers(num1, num2) {
        return num1 + num2;
    }

    console.log("5 + 7 = ")
    console.log(addNumbers(5,7))

console.log(" ")
//Part 3: Function Scope
console.log("Part 3: Function Scope")

    let x = "Global";

    function changeValue() {
        let x = "Local";
        return x;
    }

    console.log("Printing variable")
    console.log(x)

    console.log("Calling the function")
    console.log(changeValue());

console.log(" ")
//Part 4: Closures
console.log("Part 4: Closures")

    function outerFunction() {
        let count = 0;
        return function updateCount() {
            count ++;
            return count;
        }
    }

    console.log("Calling 3 times: ")
    
    let counter = outerFunction();
    console.log(counter());
    console.log(counter());
    console.log(counter());