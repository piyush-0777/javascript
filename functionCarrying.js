/* 
Function Currying

Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nestiong function that take one argument at a time.

--function f(a,b,c) is transformed to f(a)(b)(c)
*/

function sum (a , b , c) {
    return a+b+c
}
console.log(sum(4 , 5 , 7)) // output 16

function multiply (a , b , c) {
    return a*b*c
}

function carry (fn) {
    return function(a) {
        return function (b) {
            return function (c) {
                return fn(a , b, c)
            }
        }
    }
}
const carriedSum = carry(sum)
const carriedMultiply = carry(multiply)
console.log(carriedSum(2)(4)(5)) // output 11
console.log(carriedMultiply(2)(8)(7)) // output 112
