/*

Scope

Block Scope - variable declard inside a pare of curly braces cannot be accessed from outside the block
Function Scope - variables declared inside a function cannot be accessed from outside the function

Global Scope - globally scoped variable can be accessed inside a block or function
*/

let a = 10 // Global scope

function outer () {
    let b = 20;
    function inner () {   // inner function
        let c =30;
        console.log(a , b , c)
    }
    inner()
}
outer()  // output is 10 20 30 