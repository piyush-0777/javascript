/*
 This 

 --The JavaScript this keyword which is used in a function, refers to the object it belongs to
-- it makes functions reusable by letting you decie the object value
 --this value is determined entirely by how a function is called

 How to determine 'this'?
 --implicit binding
 --Explicit binding
 --New binding
 --Default binding
 */

 function sayMyName (name) {
    console.log(`my name is ${name}`)
 }
 const a = sayMyName('piyush')
 //console.log(a) // hear a is undefind

 //---------------------------------implicit binding -----------------------------------

 const person = {
    name: ' piyush' , 
    sayMyName: function () {
        console.log(`my name is ${this.name}`)
    }
 }

 console.log(person.sayMyName())

 //----------------------------Explicit binding -----------------------------------------

 function sayMyname1 () {
        console.log(`my name is ${this.name}`)
 }

 /*
 in javascript every function has a call built-in method which allows you to specify the context with which a function is involved 
 */
 sayMyname1.call(person) 



 //------------------------------- new binding -------------------------------------------

 function person1 (name) {
    this.name = name
 }
 const p1 = new person1 ('piyush')
 const p2 = new person1 ('batman')

 // new keyword creat an empty objct for person function
 console.log(p1.name) // output 'piyush'
 console.log(p2.name) // output 'batman'

 /* ---------------------------- Default binding ----------------------------------------- */
 globalThis.name = 'piyush' // sat 
function saymyName2 () {
    console.log(`my name is ${this.name}`)
}
saymyName2() 
/* 
if globleThis.name is not defind
output my name is undefind
 in global scope javascript will try to finda variable called name. it dosen't find it so this.name = undefind

 if globleThis.name is defind

  output is my name is piyush
*/
