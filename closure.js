/* 
Closure 

A closure is the combination of a function bundled together with reference to its surrounding state. Closures are created every time a function is created, at function creation time.

in JavaScript, when we return a function another function, we are effectively returning a combination of the function definition along with the function'a scope. This would let the function definetion have an associated persistent memory which could hold on to love data between executions. That combination of the function and its scope chain is what is called a closere in JavaScript.


--closure is created when function is retruning the inner function
-- this retruning function is able to use outer function variable after  outer function finished execution
*/

//with return function

function outer1 () {
    let counter = 0;
    function inner1 () {
        counter++
        console.log(counter);
    }
    inner1()
}

outer1() // output 1
outer1() // output 1

//  because with every new invocation fo the function (call the function) temporary memory is established and we have an new counter variable so out put is 1 1

// return inner function  

function outer2 () {
    let counter = 0
    function inner2 () {
        counter++
        console.log(counter)
    }
    return inner2   // in javascript able return function
}
const fn = outer2()
fn() // output 1
fn() // output 2


