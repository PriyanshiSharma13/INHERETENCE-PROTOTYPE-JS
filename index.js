console.log("working");

// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parentObject = {
    calculateAge(){
        console.log(`The person whose name is ${this.fname} is a ${this.profession} has an age of ${2022 - this.bYear}`);
    }
}

const childObjectOne = Object.create(parentObject);

childObjectOne.fname = "Priyanshi";
childObjectOne.profession = "Designer";
childObjectOne.bYear = 1998;
childObjectOne.calculateAge();

const childObjectTwo = Object.create(parentObject);

childObjectTwo.fname = "Priyanshi";
childObjectTwo.profession = "Designer";
childObjectTwo.bYear = 1998;
childObjectTwo.calculateAge();

// Write code to explain prototype chaining

let myObject = {
    name: "Ananyaa",
    age: 23,
    gender: "female",
    showInfo: function(){
        console.log(`The name of the person is ${this.name} whose gender is ${this.gender} has an age of ${this.age}`);
    }
}
console.log(myObject);
myObject.showInfo();

let secondObject = {
    name: "Alia",
}

secondObject.__prototype__ = myObject;
// console.log(secondObject);
console.log(secondObject.name,secondObject.age,secondObject.gender);

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

function arraySum(N){
    let sum=0;
    for(let i in N) { 
        sum += N[i];
    }
    return sum;
}
let array = [22,44];
let show= arraySum(array);

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function itemOne (fname,gender,profession) {
    this.fname = fname;
    this.gender = gender;
    this.profession = profession;
}

itemOne.prototype.gender = "Female"
const itemTwo = new itemOne ("Niall","Male","Singer");
console.log(itemTwo);

