/*------------------------------------ prototype-------------------------------------------*/


function person(fName , LName) {
    this.fname = fName;
    this.LName = LName;
}

const p1 = new person('piyush' , 'khandhar')
const p2 = new person('raj' , 'patel')

p1.getFullName = function () {
    return this.fname + ' ' + this.LName
}
console.log(p1.getFullName()) // output: piyush khandhar
//console.log(p2.getFullName()) // give error getFullName is not a function 

const p3 = new person('piyush' , 'khandhar')
const p4 = new person('vimal' , 'nakum')

// using prototype set function for all obj of person function

person.prototype.getFullName = function () {
    return this.fname + ' ' + this.LName

}
console.log(p1.getFullName()) // output: piyush khandhar
console.log(p2.getFullName()) // output: vimal nakum 
