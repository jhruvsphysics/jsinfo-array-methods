// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format 
// “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand 
// plus + and minus -.

// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. 
// It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.


class Calculator {
    constructor() {
        this.operations = []
    }
    calculate(str) {
        // str = NUMBER operator NUMBER 
        let arr = str.split(" ")
        if (arr[1] === "+") {return Number(arr[0]) + Number(arr[2])}
        else if (arr[1] === "-") {return Number(arr[0]) - Number(arr[2])}
        else {
            let opr = this.operations.filter(e => e.name === arr[1])
            if (opr.length !== 0) {
                return opr[0].operation(arr[0], arr[2])
            }
        }
    }
    addMethod(name, opr) {
        this.operations.push({name: name, operation: opr})
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") )

calc.addMethod("*", (a, b) => a * b)
console.log(calc.calculate("3 * 7"))
console.log(calc.calculate("34 - 12"))